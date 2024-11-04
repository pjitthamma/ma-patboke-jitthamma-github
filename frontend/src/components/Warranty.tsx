import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Warranty.css";

export type WarrantyType = {
  className?: string;

  /** Style props */
  propMargin?: CSSProperties["margin"];
};

const Warranty: FunctionComponent<WarrantyType> = ({
  className = "",
  propMargin,
}) => {
  const warrantyProtectionStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={`warranty ${className}`}>
      <img
        className="guarantee-icon"
        loading="lazy"
        alt=""
        src="/guarantee.svg"
      />
      <div className="warranty-child" />
      <div className="text1">
        <div className="warranty-protection" style={warrantyProtectionStyle}>
          Warranty Protection
        </div>
        <div className="over-2-years">Over 2 years</div>
      </div>
    </div>
  );
};

export default Warranty;
