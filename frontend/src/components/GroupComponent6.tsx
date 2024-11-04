import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./GroupComponent6.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { retrieveCartItems } from "../utils/userStorage";

export type GroupComponent6Type = {
  className?: string;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const GroupComponent6: FunctionComponent<GroupComponent6Type> = ({
  className = "",
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState("");

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handlePlaceOrderClick = () => {
    navigate("/error"); // Navigate to the error page
  };

  const paymentDescriptions: Record<string, string> = {
    "bank-transfer":
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
    "credit-card":
      "Pay securely using your Visa, MasterCard, or American Express. Your payment details are processed through a secure and encrypted payment gateway. Your order will be processed and shipped immediately after the payment is confirmed.",
    "cash-on-delivery":
      "Choose to pay in cash upon receiving your order. This option allows you to inspect the item before payment. Please ensure you have the exact amount as couriers may not carry change. Available for select locations only.",
  };

  useEffect(() => {
    const storedCartItems = retrieveCartItems();
    setCartItems(storedCartItems);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className={`rectangle-parent2 ${className}`}>
      <div className="frame-child1" />
      <div className="order-table">
        <div className="table-header">
          <h3 className="product">Product</h3>
          <div className="quantity-values">
            <div className="quantity-cells">
              <div className="product-details2">
                {cartItems.map((item) => (
                  <div className="asgaard-sofa" key={item.id}>
                    {item.name} x {item.quantity}
                  </div>
                ))}
                <div className="total">Total</div>
              </div>
            </div>
          </div>
        </div>
        <div className="price-breakdown">
          <div className="subtotal-wrapper">
            <h3 className="subtotal1">Subtotal</h3>
          </div>
          <div className="subtotal-value">
            {cartItems.map((item) => (
              <div className="rs-25000000-wrapper" key={item.id}>
                <div className="rs-25000000">
                  € {item.price * item.quantity}
                </div>
              </div>
            ))}
            <div className="total-row">
              <b className="rs-250000002">€ {calculateTotal()}</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent10">
        <div className="options-divider-wrapper">
          <div className="options-divider" />
        </div>

        <div className="payment-options1">
          <div className="method-icons-parent">
            <div className="payment-options">
              <h3>Select Payment Method:</h3>

              <div className="payment-option">
                <input
                  type="radio"
                  id="bank-transfer"
                  name="payment"
                  value="Bank Transfer"
                  onChange={handleOptionChange}
                />
                <label htmlFor="bank-transfer">
                  Bank Transfer
                  <i
                    className="bi bi-info-circle bank-transfer"
                    onMouseEnter={() => setHoveredTooltip("bank-transfer")}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  ></i>
                </label>
              </div>

              <div className="payment-option">
                <input
                  type="radio"
                  id="credit-card"
                  name="payment"
                  value="Credit Card"
                  onChange={handleOptionChange}
                />
                <label htmlFor="credit-card">
                  Credit Card
                  <i
                    className="bi bi-info-circle credit-card"
                    onMouseEnter={() => setHoveredTooltip("credit-card")}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  ></i>
                </label>
              </div>

              <div className="payment-option">
                <input
                  type="radio"
                  id="cash"
                  name="payment"
                  value="Cash"
                  onChange={handleOptionChange}
                />
                <label htmlFor="cash">
                  Cash on Delivery
                  <i
                    className="bi bi-info-circle cash"
                    onMouseEnter={() => setHoveredTooltip("cash-on-delivery")}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  ></i>
                </label>
              </div>

              {hoveredTooltip && (
                <div className="tooltip-box">
                  <div>{paymentDescriptions[hoveredTooltip]}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="your-personal-data-container">
          <span className="your-personal-data">{`Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our `}</span>
          <span className="privacy-policy">privacy policy.</span>
        </div>
      </div>
      <div className="all-payment-options">
        <button className="group-button" onClick={handlePlaceOrderClick}>
          <div className="frame-child2" />
          <div className="place-order">Place order</div>
        </button>
      </div>
    </div>
  );
};

export default GroupComponent6;
