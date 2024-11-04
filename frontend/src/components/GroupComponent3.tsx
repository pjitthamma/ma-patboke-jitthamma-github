import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { retrieveCartItems, saveCartItems } from "../utils/userStorage";
import "./GroupComponent3.css";

export type GroupComponent3Type = {
  className?: string;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

const GroupComponent3: FunctionComponent<GroupComponent3Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Fetch cart items from localStorage on page load
  useEffect(() => {
    //const storedCartItems = localStorage.getItem("cartItems");
    //if (storedCartItems) {
    //  try {
    //    const parsedItems = JSON.parse(storedCartItems);
    //    if (Array.isArray(parsedItems)) {
    //      setCartItems(parsedItems);
    //    } else {
    //      console.error("Invalid cart data in localStorage");
    //    }
    //  } catch (error) {
    //    console.error("Failed to parse cart data from localStorage:", error);
    //  }
    //}

    const storedCartItems = retrieveCartItems();
    setCartItems(storedCartItems);
  }, []);

  // Navigate to the single product page
  const onGroupImageClick = useCallback(
    (productId: number) => {
      navigate(`/single-product?productId=${productId}`);
    },
    [navigate]
  );

  // Navigate to the checkout page
  const onGroupButtonClick = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  // Update quantity of the item
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent setting less than 1

    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.floor(newQuantity) } : item
    );
    setCartItems(updatedItems);
    saveCartItems(updatedItems);
    // localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  // Remove an item from the cart
  const handleRemoveItem = (id: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    saveCartItems(updatedItems);
    // localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  // Calculate the total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className={`rectangle-parent11 ${className}`}>
      <div className="frame-child10" />
      <div className="cart-item1">
        <div className="product-details3">
          <div className="product1">Product</div>
          <div className="price9">Price</div>
          <div className="quantity1">Quantity</div>
          <div className="subtotal2">Subtotal</div>
        </div>

        {cartItems.length === 0 ? (
          <div>No items in the cart.</div>
        ) : (
          cartItems.map((item) => (
            <div className="item-actions" key={item.id}>
              <img
                className="item-actions-child"
                loading="lazy"
                alt={item.name}
                src={item.imageUrl}
                onClick={() => onGroupImageClick(item.id)}
              />
              <div className="selected-item-details-wrapper">
                <div className="selected-item-details">
                  <div className="asgaard-sofa-wrapper">
                    <div className="asgaard-sofa2">{item.name}</div>
                  </div>
                  <div className="item-remove">
                    <div className="asgaard-sofa2">
                      € {item.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="frame-child11" />
                  <input
                    type="number"
                    className="rectangle-parent12"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                    min={1}
                  />

                  <div className="item-remove-button-wrapper">
                    <div
                      className="item-remove-button"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <div className="rs-25000000-container">
                        <div className="asgaard-sofa2">
                          € {(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                      <img
                        className="ant-designdelete-filled-icon"
                        loading="lazy"
                        alt="Delete"
                        src="/antdesigndeletefilled.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="rectangle-parent13">
        <div className="frame-child12" />
        <div className="cart-totals-wrapper">
          <h2 className="cart-totals">CART TOTALS</h2>
        </div>
        <div className="calculation">
          <div className="calculation-details">
            {cartItems.map((item) => (
              <div key={item.id} className="calculation-items">
                <div className="subtotal3">{item.name} </div>
                <div className="rs-250000006">
                  € {(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
            <div className="calculation-items1">
              <div className="total1">Total</div>
              <div className="rs-250000007">
                € {calculateTotal().toFixed(2)}
              </div>
            </div>
          </div>
          <div className="cart-total">
            <button className="rectangle-parent14" onClick={onGroupButtonClick}>
              <div className="frame-child13" />
              <div className="check-out">Check Out</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent3;
