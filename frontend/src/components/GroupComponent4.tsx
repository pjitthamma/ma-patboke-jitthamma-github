import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { retrieveCartItems, saveCartItems } from "../utils/userStorage";
import "./GroupComponent4.css";

export type GroupComponent4Type = {
  className?: string;
  productName: string;
  productPrice: string;
  productDescription: string;
  productImage: string;
  productCategory: string;
  productId?: number;
};

const GroupComponent4: FunctionComponent<GroupComponent4Type> = ({
  className = "",
  productName,
  productPrice,
  productDescription,
  productImage,
  productCategory,
  productId, // Use the product ID to track the item in the cart
}) => {
  const [quantity, setQuantity] = useState<number>(1); // Track quantity
  const navigate = useNavigate();

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    // const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const cartItems = retrieveCartItems();

    // Check if the product is already in the cart
    const existingItem = cartItems.find((item: any) => item.id === productId);

    if (existingItem) {
      // If product already in cart, update quantity
      existingItem.quantity += quantity;
    } else {
      // If product not in cart, add it
      cartItems.push({
        id: productId || -1,
        name: productName,
        price: parseFloat(productPrice.replace(/[^\d.]/g, "")), // Convert price to a number
        quantity: quantity,
        imageUrl: productImage,
      });
    }

    // Save updated cart to localStorage
    saveCartItems(cartItems);
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // Redirect to cart page
    navigate("/cart");
  };

  // Function to handle decreasing quantity
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to handle increasing quantity
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={`rectangle-parent3 ${className}`}>
      <div className="frame-child3" />
      <div className="content-layout-wrapper">
        <div className="content-layout">
          <div className="image-placeholder-parent">
            <img
              className="image-placeholder"
              loading="lazy"
              alt={productName}
              src={productImage} // Product image
              style={{ width: "423px", height: "500px" }}
            />
          </div>
        </div>
      </div>
      <div className="product-information">
        <div className="options">
          <div className="product-name-price">
            <div className="product-name-container">
              <h1 className="asgaard-sofa1">{productName}</h1>
              <div className="rs-250000003">{productPrice}</div>
            </div>
          </div>
          <div className="product-rating-review">
            <div className="rating-review">
              <div className="rating">
                <img
                  className="dashiconsstar-filled"
                  loading="lazy"
                  alt=""
                  src="/dashiconsstarfilled.svg"
                />
                <img
                  className="dashiconsstar-filled"
                  loading="lazy"
                  alt=""
                  src="/dashiconsstarfilled.svg"
                />
                <img
                  className="dashiconsstar-filled"
                  loading="lazy"
                  alt=""
                  src="/dashiconsstarfilled.svg"
                />
                <img
                  className="dashiconsstar-filled"
                  loading="lazy"
                  alt=""
                  src="/dashiconsstarfilled.svg"
                />
                <img
                  className="dashiconsstar-filled"
                  alt=""
                  src="/carbonstarhalf.svg"
                />
              </div>
            </div>
            <div className="divider2" />
            <div className="rating-review">
              <div className="customer-review1">0 Customer Review</div>
            </div>
          </div>
          <div className="setting-the-bar-container">
            <p className="setting-the-bar">{productDescription}</p>
            <p className="setting-the-bar">&nbsp;</p>
          </div>
          <div className="options-name">
            <div className="size">Size</div>
          </div>
          <div className="product-options">
            <div className="size-options">
              <div className="rectangle-parent4">
                <div className="frame-child4" />
                <div className="l">L</div>
              </div>
              <div className="rectangle-parent5">
                <div className="frame-child5" />
                <div className="xl">XL</div>
              </div>
              <div className="rectangle-parent6">
                <div className="frame-child5" />
                <div className="xs">XS</div>
              </div>
            </div>
          </div>
          <div className="options-name">
            <div className="color">Color</div>
          </div>
          <div className="color-options">
            <div className="color-swatches">
              <div className="size-options">
                <div className="color-squares" />
                <div className="color-squares1" />
                <div className="color-squares2" />
              </div>
              <div className="cart-compare">
                <div className="social-icons">
                  <div className="rectangle-parent7">
                    <div className="frame-child7" />
                    <div className="icons" onClick={handleDecreaseQuantity}>
                      -
                    </div>
                    <div className="share9">{quantity}</div>
                    <div className="icons1" onClick={handleIncreaseQuantity}>
                      +
                    </div>
                  </div>
                </div>
                <button className="rectangle-parent8" onClick={handleAddToCart}>
                  <div className="frame-child8" />
                  <div className="add-to-cart9">Add To Cart</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-info1">
          <div className="info-divider">
            <div className="divider3" />
          </div>
          <div className="product-details-info">
            <div className="category-share">
              <div className="category-container">
                <div className="category">Category</div>
              </div>
              <div className="category-values">
                <div className="values-container">
                  <div>:</div>
                </div>
                <div className="share-icons">
                  <div className="category">{productCategory}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent4;
