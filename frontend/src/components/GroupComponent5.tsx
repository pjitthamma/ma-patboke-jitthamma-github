import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FrameComponent1 from "./FrameComponent1";
import NameInputFields from "./NameInputFields";
import FrameComponent2 from "./FrameComponent2";
import "./GroupComponent5.css";

export type GroupComponent5Type = {
  className?: string;
};

const GroupComponent5: FunctionComponent<GroupComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={`rectangle-parent1 ${className}`}>
      <div className="rectangle-div" />
      <h1 className="billing-details">Billing Details</h1>
      <div className="frame-wrapper3">
        <div className="first-name-field-parent">
          <div className="first-name-field">
            <div className="first-name-input">
              <FrameComponent1 label="First Name" />
            </div>
            <FrameComponent1 propMinWidth="212px" label="Last Name" />
          </div>
        </div>
      </div>
      <NameInputFields countryRegion="Country/Region" />
      <FrameComponent2 label="Address" />
      <div className="first-name-field">
            <div className="first-name-input">
              <FrameComponent1 label="City" />
            </div>
            <FrameComponent1 propMinWidth="212px" label="Postcode" />
          </div>
      <FrameComponent1
        label="Email address"
        propMinWidth="454px"
      />
    </div>
  );
};

export default GroupComponent5;
