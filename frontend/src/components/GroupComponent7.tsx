import { FunctionComponent } from "react";
import "./GroupComponent7.css";

export type GroupComponent7Type = {
  className?: string;
};

const GroupComponent7: FunctionComponent<GroupComponent7Type> = ({
  className = "",
}) => {
  return (
    <section className={`content-background-parent ${className}`}>
      <img
        className="content-background-icon"
        alt=""
        src="/content-background@2x.png"
      />
      <div className="hero-title">
        <h1 className="checkout1">Checkout</h1>
        <img
          className="meubel-house-logos-05-icon1"
          loading="lazy"
          alt=""
          src="/meubel-house-logos05-1@2x.png"
        />
      </div>
      <div className="breadcrumbs">
        <div className="breadcrumb-items">
          <div className="home3">Home</div>
          <img
            className="dashiconsarrow-down-alt2"
            loading="lazy"
            alt=""
            src="/dashiconsarrowdownalt2@2x.png"
          />
          <div className="checkout2">Checkout</div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent7;
