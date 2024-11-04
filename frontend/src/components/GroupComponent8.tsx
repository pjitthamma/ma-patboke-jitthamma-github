import { FunctionComponent } from "react";
import "./GroupComponent8.css";

export type GroupComponent8Type = {
  className?: string;
};

const GroupComponent8: FunctionComponent<GroupComponent8Type> = ({
  className = "",
}) => {
  return (
    <div className={`hero-background-parent ${className}`}>
      <img
        className="hero-background-icon"
        alt=""
        src="/content-background@2x.png"
      />
      <div className="title-logo">
        <h1 className="contact3">Contact</h1>
        <img
          className="meubel-house-logos-05-icon4"
          loading="lazy"
          alt=""
          src="/meubel-house-logos05-11@2x.png"
        />
      </div>
      <div className="breadcrumb">
        <div className="breadcrumb-items1">
          <div className="home-link">
            <div className="home6">Home</div>
          </div>
          <img
            className="dashiconsarrow-down-alt23"
            loading="lazy"
            alt=""
            src="/dashiconsarrowdownalt2@2x.png"
          />
          <div className="contact4">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent8;
