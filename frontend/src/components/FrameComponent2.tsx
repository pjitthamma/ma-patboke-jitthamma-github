import { FunctionComponent, useMemo, useState, CSSProperties } from "react";
import "./FrameComponent2.css";

export type FrameComponent2Type = {
  className?: string;
  streetAddress?: string; // This will be used as a placeholder and value
  label?: string; // Dynamic label for the input field

  /** Style props */
  propHeight?: CSSProperties["height"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  propHeight,
  streetAddress = "", // Default to empty string if no value provided
  label = "Street Address", // Default label if none provided
  propMinWidth,
}) => {
  const [inputValue, setInputValue] = useState(streetAddress); // Manage input state

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const streetAddressStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={`frame-wrapper2 ${className}`} style={frameDiv1Style}>
      <label className="street-address" style={streetAddressStyle} htmlFor="street-input">
        {label} {/* Dynamic label */}
      </label>
      <input
        type="text"
        id="street-input"
        className="address-input-fields"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FrameComponent2;
