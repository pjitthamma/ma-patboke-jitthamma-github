import { FunctionComponent, useMemo, CSSProperties, useState } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
  firstName?: string; // This will be used as a placeholder and value.
  label?: string; // Add a label prop to make it dynamic

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  propMinWidth,
  firstName = "", // Default to an empty string if not provided
  label = "First Name", // Default label if not provided
}) => {
  const [inputValue, setInputValue] = useState(firstName); // Manage input state

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={`first-name-parent ${className}`} style={frameDivStyle}>
      <label className="first-name" htmlFor="input-field">
        {label}
      </label>
      <input
        type="text"
        id="input-field"
        className="first-name-input-box"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FrameComponent1;
