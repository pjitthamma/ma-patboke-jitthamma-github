import { FunctionComponent, useState } from "react";
import "./GroupComponent3.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate if using react-router for navigation

export type GroupComponent10Type = {
  className?: string;
};

const GroupComponent10: FunctionComponent<GroupComponent10Type> = ({
  className = "",
}) => {
  const [showTracking, setShowTracking] = useState<{ [key: string]: boolean }>({
    "1240010": false,
  });
  const [showSupportDropdown, setShowSupportDropdown] = useState<{
    [key: string]: boolean;
  }>({
    "1240000": false,
    "1240010": false,
  });

  const navigate = useNavigate();

  // Toggle function to show or hide tracking info
  const toggleTracking = (orderId: string) => {
    setShowTracking((prev) => ({
      ...prev,
      [orderId]: !prev[orderId], // Toggle the current order's tracking visibility
    }));
  };

  // Toggle function for dropdown menu
  const toggleSupportDropdown = (orderId: string) => {
    setShowSupportDropdown((prev) => ({
      ...prev,
      [orderId]: !prev[orderId], // Toggle the dropdown visibility for the given order
    }));
  };

  // Function to handle navigation when "Request Refund" is clicked
  const handleRequestRefund = () => {
    navigate("/policy"); // Replace with the actual path to the policy page
  };

  const handleReview = () => {
    navigate("/error"); // Replace with the actual path to the policy page
  };

  return (
    <div className={`rectangle-parent11 ${className}`}>
      <div className="frame-child10" />
      <div className="cart-item1">
        <div className="product-details3-order">
          <div className="product1">Number</div>
          <div className="price9">Product</div>
          <div className="quantity1">Total</div>
          <div className="subtotal2">Status</div>
          <div className="subtotal2">Date</div>
        </div>

        <div className="item-actionsOrder">
          <img
            className="item-actions-child"
            loading="lazy"
            alt=""
            src="/1.png"
          />
          <div className="selected-item-details-wrapper">
            <div className="selected-item-details-order">
              <div className="">#1240000</div>
              <div className="">Sylthe</div>
              <div className="">€ 147</div>
              <div className="">Delivered</div>
              <div className="">2024-02-21</div>
            </div>
            <div className="action-buttons">
              <button className="action-button" disabled>Track Order</button>
              <button className="action-button" onClick={handleReview} >View Invoice</button>
              <button
                className="action-button action-button-1240000"
                onClick={() => toggleSupportDropdown("1240000")}
              >
                Get Product Support
              </button>

              {showSupportDropdown["1240000"] && (
                <div className="custom-dropdown-menu">
                  <a className="custom-dropdown-item" onClick={handleReview}>
                    Leave a Review
                    </a>
                  <a className="custom-dropdown-item custom-dropdown-item-1240000" onClick={handleRequestRefund}>
                    Request Refund
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="item-actions">
          <img
            className="item-actions-child"
            loading="lazy"
            alt=""
            src="/2.png"
          />
          <div className="selected-item-details-wrapper">
            <div className="selected-item-details-order">
              <div className="">#1240010</div>
              <div className="">Leviosa</div>
              <div className="">€ 350</div>
              <div className="">Processing</div>
              <div className="">2024-10-08</div>
            </div>
            <div className="action-buttons">
              <button
                className="action-button action-button-1240010"
                onClick={() => toggleTracking("1240010")}
              >
                {showTracking["1240010"] ? "Hide Tracking" : "Track Order"}
              </button>
              <button className="action-button" onClick={handleReview}>View Invoice</button>
              <button
                className="action-button"
                onClick={() => toggleSupportDropdown("1240010")}
              >
                Get Product Support
              </button>

              {showSupportDropdown["1240010"] && (
                <div className="custom-dropdown-menu">
                  <a className="custom-dropdown-item" onClick={handleReview}>
                    Leave a Review
                    </a>
                  <a className="custom-dropdown-item" onClick={handleRequestRefund}>
                    Request Refund
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {showTracking["1240010"] && (
          <div className="tracking-status-container">
            <img
              src="/tracking-status.png" // Replace with the correct image path
              alt="Tracking Status"
              className="tracking-status-image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupComponent10;
