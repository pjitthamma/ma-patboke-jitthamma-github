import { FunctionComponent } from "react";
import "./GroupComponent1.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={`group-section ${className}`}>
      <img className="frame-child14" alt="" src="/content-background@2x.png" />
      <div className="hero-title1">
        <h1 className="shop3">Shop</h1>
        <img
          className="meubel-house-logos-05-icon3"
          loading="lazy"
          alt=""
          src="/meubel-house-logos05-11@2x.png"
        />
      </div>
      <div className="breadcrumbs1">
        <div className="home-breadcrumb">
          <div className="home-wrapper">
            <div className="home5">Home</div>
          </div>
          <div className="shop-breadcrumb">
            <img
              className="dashiconsarrow-down-alt22"
              alt=""
              src="/dashiconsarrowdownalt21@2x.png"
            />
            <div className="shop-wrapper">
              <div className="shop4">Shop</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent1;
