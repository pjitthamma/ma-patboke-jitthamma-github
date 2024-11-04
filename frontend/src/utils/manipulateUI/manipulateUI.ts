import { automateCheckOrderStep1 } from './checkOrder';
import { automateNewReleaseStep1 } from './newRelease';
import { automatePaymentOptionStep1 } from './paymentOption';
import { automateRequestRefundStep1 } from './RequestRefund';

export const bindingManipulationUI = () => {
    // Define the MutationObserver callback function
    const callback = (mutationsList: MutationRecord[]) => {
        for (const mutation of mutationsList) {
            if (mutation.type === "childList") {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        // Common function to add click listener and disable button after click
                        const attachButtonListener = (
                            button: HTMLElement | null,
                            buttonText: string,
                            clickHandler: () => void
                        ) => {
                            if (button && button.textContent?.trim() === buttonText) {
                                button.addEventListener("click", () => {
                                    clickHandler();

                                    // Disable the button to prevent further clicks
                                    button.setAttribute("disabled", "true");
                                    button.style.opacity = "0.5"; // Optional: visually indicate disabled state
                                    button.style.pointerEvents = "none"; // Prevent any more interactions
                                    console.log(`Button '${buttonText}' clicked and disabled`);
                                }, { once: true }); // `once: true` ensures the listener only triggers once

                                console.log(`Event listener attached to ${buttonText} button`);
                            }
                        };

                        // Attach listeners to buttons by type with null check and casting
                        const checkOrderButton = node.querySelector("button.css-1aibqey") as HTMLElement | null;
                        if (checkOrderButton) attachButtonListener(checkOrderButton, "Check Order Visual Guide", automateCheckOrderStep1);

                        const newReleaseButton = node.querySelector("button.css-1aibqey") as HTMLElement | null;
                        if (newReleaseButton) attachButtonListener(newReleaseButton, "New Release Visual Guide", automateNewReleaseStep1);

                        const paymentOptionButton = node.querySelector("button.css-1aibqey") as HTMLElement | null;
                        if (paymentOptionButton) attachButtonListener(paymentOptionButton, "Payment Option Visual Guide", automatePaymentOptionStep1);

                        const refundButton = node.querySelector("button.css-1aibqey") as HTMLElement | null;
                        if (refundButton) attachButtonListener(refundButton, "Request Refund Visual Guide", automateRequestRefundStep1);
                    }
                });
            }
        }
    };

    const observer = new MutationObserver(callback);
    const targetNode = document.querySelector("#rasa-chat-widget-container"); // Target the chat widget container to observe for changes
    if (targetNode) {
        observer.observe(targetNode, {
            childList: true, // Watch for added/removed child nodes
            subtree: true,   // Also watch within descendants of targetNode
        });
    }
    return () => { observer.disconnect(); }; // Cleanup observer on component unmount
};
