import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FeatureIcons.css";

export type FeatureIconsType = {
  className?: string;
  trophy1?: string;
  highQuality?: string;
  craftedFromTopMaterials?: string;

  /** Style props */
  propMargin?: CSSProperties["margin"];
};

const FeatureIcons: FunctionComponent<FeatureIconsType> = ({
  className = "",
  trophy1,
  highQuality,
  propMargin,
  craftedFromTopMaterials,
}) => {
  const highQualityStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={`feature-icons ${className}`}>
      <img className="trophy-1-icon" loading="lazy" alt="" src={trophy1} />
      <div className="text">
        <div className="high-quality" style={highQualityStyle}>
          {highQuality}
        </div>
        <div className="crafted-from-top">{craftedFromTopMaterials}</div>
      </div>
    </div>
  );
};

export default FeatureIcons;
