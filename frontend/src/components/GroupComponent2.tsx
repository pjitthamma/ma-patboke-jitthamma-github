import { FunctionComponent } from "react";
import "./GroupComponent2.css";

export type GroupComponent2Type = {
  className?: string;
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={`rectangle-parent10 ${className}`}>
      <img className="rectangle-icon" alt="" src="/content-background@2x.png" />
      <div className="cart-indicator">
        <div className="cart-item">
          <h1 className="cart1">Cart</h1>
          <img
            className="cart-meubel-house-logos-05-icon2"
            loading="lazy"
            alt=""
            src="/meubel-house-logos05-11@2x.png"
          />
        </div>
      </div>
      <div className="breadcrumb-links">
        <div className="breadcrumb-link-items">
          <div className="home4">Home</div>
        </div>
        <img
          className="dashiconsarrow-down-alt21"
          loading="lazy"
          alt=""
          src="/dashiconsarrowdownalt2@2x.png"
        />
        <div className="breadcrumb-link-items">
          <div className="cart2">Cart</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
