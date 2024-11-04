import logging
import re
from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet, EventType

logging.basicConfig(
    level=logging.DEBUG, 
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

logger = logging.getLogger(__name__)

class ActionCheckOrderStatus(Action):
    def name(self) -> Text:
        return "action_check_order_status"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        # Extract only the numeric part of the order_id
        order_id_full = tracker.get_slot("order_id")
        order_id = re.search(r'\b\d+\b', order_id_full).group(0) if order_id_full else None
        retry_count = tracker.get_slot("retry_count") or 0  # Default to 0 if slot is None

        # Check the last intent in the conversation history
        previous_intent = None
        for event in reversed(tracker.events):
            if event.get("event") == "user":
                previous_intent = event.get("parse_data", {}).get("intent", {}).get("name")
                break

        logger.debug(f"ActionCheckOrderStatus called with order_id: {order_id}, previous_intent: {previous_intent}, and retry_count: {retry_count}")

        # Initialize a default response message
        response_message = "Is there anything else we can assist you with?"

        # Only respond to order status inquiries
        if previous_intent == "provide_order_id":
            if order_id in ["1240010", "#1240010"]:
                dispatcher.utter_message(text="Your order is currently being processed and will be delivered shortly.")
                retry_count = 0  # Reset retry count on successful lookup

            elif order_id in ["1240000", "#1240000"]:
                dispatcher.utter_message(text="Your order has been successfully delivered. If you have any further questions, please feel free to contact our support team.")
                retry_count = 0  # Reset retry count on successful lookup

            else:
                # Increment retry count
                retry_count += 1
                if retry_count >= 2:
                    dispatcher.utter_message(text="Sorry, we cannot process your request. Please contact our customer support.")
                    dispatcher.utter_message(text=response_message)
                    return [SlotSet("retry_count", 0)]  # Reset count after reaching limit
                else:
                    dispatcher.utter_message(text="We couldn’t locate any details for this order ID. Could you please verify and resend it?")
                    return [SlotSet("retry_count", retry_count)]

            # Check if the session was started by User B using the user_session_type slot
            user_session_type = tracker.get_slot("user_session_type")
            logger.debug(f"user_session_type from slot: {user_session_type}")

            # Provide a visual guide if user session type is B
            if user_session_type == "B":
                dispatcher.utter_message(response="utter_visual_guide_check_order")
            else:
                dispatcher.utter_message(text=response_message)

            return [SlotSet("retry_count", retry_count), SlotSet("order_id", order_id)]

        else:
            dispatcher.utter_message(text="We’re unsure if you’re inquiring about order status. Could you please clarify your request?")
            return []


class ActionGetNewReleaseProducts(Action):
    def name(self) -> Text:
        return "action_get_new_release_products"
    

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        # Mock data for new release products with descriptions
        new_releases = [
            {"name": "Resp", "description": "Outdoor bar table and stool.", "price": "$294"},
            {"name": "Luna", "description": "Scandinavian-inspired wooden dining table.", "price": "$499"},
            {"name": "Nora", "description": "Velvet tufted armchair, perfect for cozy corners.", "price": "$320"},
            {"name": "Aurora", "description": "Modern upholstered queen bed with a sleek headboard.", "price": "$720"},
            {"name": "Vela", "description": "Contemporary glass coffee table with chrome legs.", "price": "$260"},
            {"name": "Solace", "description": "Outdoor lounge set with weatherproof cushions.", "price": "$899"},
            {"name": "Astra", "description": "Minimalist oak writing desk with storage drawers.", "price": "$340"},
            {"name": "Fjord", "description": "Extendable dining table, perfect for gatherings.", "price": "$650"},
            {"name": "Breeze", "description": "Outdoor bar table and stools, weather-resistant rattan.", "price": "$294"},
            {"name": "Opal", "description": "Elegant wooden dresser with brass handles.", "price": "$540"},
            {"name": "Echo", "description": "Compact, modern bedside table with soft-close drawers.", "price": "$185"},
            {"name": "Cove", "description": "Plush sectional sofa with deep seating for maximum comfort.", "price": "$1,250"},
            {"name": "Haven", "description": "Luxurious velvet bench with gold-tone legs, ideal for entryways.", "price": "$295"},
        ]

        # Format the new release products into a single, structured message
        new_release_list = "\n".join([
            f"{i+1}. {item['name']}: {item['description']} (Price: {item['price']})" for i, item in enumerate(new_releases)
        ])

        # Send the message with product information
        full_message = f"Here are the latest products:\n{new_release_list}"
        dispatcher.utter_message(text=full_message)

        # Check if the session was started by User B using the user_session_type slot
        user_session_type = tracker.get_slot("user_session_type")
        logger.debug(f"user_session_type from slot: {user_session_type}")

        if user_session_type == "B":
            # Show the "Visual Guide" button if user session type is B
            dispatcher.utter_message(response="utter_visual_guide_new_release")
        else:
            # Default follow-up message for other users
            dispatcher.utter_message(text="Is there anything else we can assist you with?")

        return []

    
class ActionListPaymentOptions(Action):
    def name(self) -> Text:
        return "action_list_payment_options"
    

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        # Payment options information
        payment_options = [
            {
                "name": "Bank Transfer",
                "details": "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
            },
            {
                "name": "Credit Card",
                "details": "Pay securely using your Visa, MasterCard, or American Express. Your payment details are processed through a secure and encrypted payment gateway. Your order will be processed and shipped immediately after the payment is confirmed."
            },
            {
                "name": "Cash on Delivery",
                "details": "Choose to pay in cash upon receiving your order. This option allows you to inspect the item before payment. Please ensure you have the exact amount as couriers may not carry change. Available for select locations only."
            }
        ]

        # Format the payment options into a list
        payment_options_list = "\n".join([
            f"{i+1}. {option['name']}: {option['details']}" for i, option in enumerate(payment_options)
        ])

        # Send the payment information in a single bubble
        full_message = f"Here are the available payment options:\n{payment_options_list}"
        dispatcher.utter_message(text=full_message)

        # Check if the session was started by User B using the user_session_type slot
        user_session_type = tracker.get_slot("user_session_type")
        logger.debug(f"user_session_type from slot: {user_session_type}")

        if user_session_type == "B":
            # Show the "Visual Guide" button if user session type is B
            dispatcher.utter_message(response="utter_visual_guide_payment_option")
        else:
            # Default follow-up message for other users
            dispatcher.utter_message(text="Is there anything else we can assist you with?")

        return []
    
class ActionRequestRefund(Action):
    def name(self) -> Text:
        return "action_request_refund"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        # Extract only the numeric part of the refund_order_id
        refund_order_id_full = tracker.get_slot("order_id")
        refund_order_id = re.search(r'\b\d+\b', refund_order_id_full).group(0) if refund_order_id_full else None
        retry_count = tracker.get_slot("retry_count") or 0  # Initialize retry count if not already set

        # Check the last intent in the conversation history
        previous_intent = None
        for event in reversed(tracker.events):
            if event.get("event") == "user":
                previous_intent = event.get("parse_data", {}).get("intent", {}).get("name")
                break

        logger.debug(f"ActionRequestRefund called with refund_order_id: {refund_order_id}, previous_intent: {previous_intent}, retry_count: {retry_count}")

        # Initialize a default response message
        response_message = "Is there anything else we can assist you with?"

        if previous_intent == "provide_order_id":
            if refund_order_id in ["1240000", "#1240000"]:
                dispatcher.utter_message(text="This product has already been delivered and is ineligible for a refund. For more information, please refer to our refund policy on the Policies page.")
                retry_count = 0  # Reset retry count on successful lookup

            elif refund_order_id in ["1240010", "#1240010"]:
                dispatcher.utter_message(text="To initiate your refund, please select 'Get Product Support' on your Orders page. You will receive a confirmation email once the request has been processed.")
                retry_count = 0  # Reset retry count on successful lookup

            else:
                # Increment retry count for unsuccessful lookup
                retry_count += 1
                if retry_count >= 2:
                    dispatcher.utter_message(text="Sorry, we cannot process your refund request. Please contact our customer support for further assistance.")
                    dispatcher.utter_message(text=response_message)
                    return [SlotSet("retry_count", 0)]  # Reset count after reaching limit
                else:
                    dispatcher.utter_message(text="We couldn’t locate any details for this order ID. Could you please verify and resend it?")
                    return [SlotSet("retry_count", retry_count)]

            # Check if the session was started by User B using the user_session_type slot
            user_session_type = tracker.get_slot("user_session_type")
            logger.debug(f"user_session_type from slot: {user_session_type}")

            # Provide a visual guide if user session type is B
            if user_session_type == "B":
                dispatcher.utter_message(response="utter_visual_guide_request_refund")
            else:
                dispatcher.utter_message(text=response_message)

            return [SlotSet("retry_count", retry_count), SlotSet("order_id", refund_order_id)]
        else:
            dispatcher.utter_message(text="We’re not certain if you're requesting a refund. Could you please rephrase your inquiry?")
            return []

class ActionSetSessionUserType(Action):
    def name(self) -> Text:
        return "action_set_session_user_type"

    def run(self, dispatcher, tracker, domain) -> List[Dict[Text, Any]]:
        # Check if the user_session_type slot is already set
        session_user_type = tracker.get_slot("user_session_type")
        
        if not session_user_type or session_user_type == "A":  # Only set if unset or default
            # Check the initial message to set the correct session type
            user_message = tracker.latest_message.get("text", "")
            session_type = "B" if user_message == "Starting session by User B" else "A"

            logger.debug(f"Setting user_session_type to: {session_type}")
            return [SlotSet("user_session_type", session_type)]
        
        # Log that the slot was already set, if applicable
        logger.debug(f"user_session_type already set to: {session_user_type}")
        return []


class ActionTriggerUIManipulation(Action):
    def name(self) -> Text:
        return "action_trigger_ui_manipulation"

    def run(self, dispatcher: CollectingDispatcher,
            tracker,
            domain: Dict[Text, Any]) -> List[EventType]:
        
        # Send custom JSON message to trigger UI on the frontend
        dispatcher.utter_message(json_message={"custom": {"event": "trigger_ui_manipulation"}})
        return []

class ActionDoNothing(Action):
    def name(self) -> Text:
        return "action_do_nothing"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        # Do nothing, simply return an empty list of events
        return []


