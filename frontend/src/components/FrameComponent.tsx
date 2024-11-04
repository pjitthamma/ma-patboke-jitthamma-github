import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
  maskGroup?: string;
  dining?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  maskGroup,
  propWidth,
  dining,
  propMinWidth,
}) => {
  const cardNamesStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const diningStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`mask-group-parent ${className}`}>
      <img className="mask-group-icon1" loading="lazy" alt="" src={maskGroup} />
      <div className="card-names" style={cardNamesStyle}>
        <div className="dining" style={diningStyle}>
          {dining}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
