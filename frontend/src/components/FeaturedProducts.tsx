import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
} from "react";
import "./FeaturedProducts.css";

export type FeaturedProductsType = {
  className?: string;
  images?: string;
  prop?: string;
  productName?: string;
  sortDescription?: string;
  fixPrice?: string;
  fixPrice1?: string;
  category: string;
  productId?: number;
  onClick: () => void;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMarginBottom?: CSSProperties["marginBottom"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propMargin?: CSSProperties["margin"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
};

const FeaturedProducts: FunctionComponent<FeaturedProductsType> = ({
  className = "",
  propWidth,
  propMarginBottom,
  propFlex,
  images,
  prop,
  productName,
  propMinWidth,
  propMargin,
  sortDescription,
  propDisplay,
  propMinWidth1,
  fixPrice,
  propMinWidth2,
  fixPrice1,
  propWidth1,
  onClick, // Receive onClick as prop
}) => {
  const featuredProductsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      marginBottom: propMarginBottom,
      flex: propFlex,
    };
  }, [propWidth, propMarginBottom, propFlex]);

  const productNameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      margin: propMargin,
    };
  }, [propMinWidth, propMargin]);

  const sortDescriptionStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  const fixPriceStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const fixPrice1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className={`featured-products8 ${className}`}
      onClick={onClick} // Use the passed onClick handler
      style={featuredProductsStyle}
    >
      <textarea className="bg16" />
      <div className="images-parent1">
        <img className="images-icon8" loading="lazy" alt="" src={images} />
        <div className="label8">
        <div className="discount8" style={{ display: prop ? 'block' : 'none' }}
        >
          <div className="discount-child4" />
          <div className="div8">{prop}</div>
        </div>   
         
          {prop ? null : (
            <div className="new16">
              <div className="new-child6" />
              <div className="new17">New</div>
            </div>
          )}
        </div>
      </div>
      <div className="description-wrapper3">
        <div className="description9">
          <div className="product-name16">
            <div className="product-name17" style={productNameStyle}>
              {productName}
            </div>
            <div className="sort-description8" style={sortDescriptionStyle}>
              {sortDescription}
            </div>
          </div>
          <div className="price8">
            <div className="fix-price-parent4">
              <div className="fix-price16">
                {fixPrice}
              </div>
              <div className="discounted-price1">
              <div 
                className="fix-price17" 
                style={{ 
                  ...fixPrice1Style, 
                  display: fixPrice1 ? 'inline-block' : 'none' 
                }}
              >
                {fixPrice1}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pop-up">
        <div className="overlay" />
        <div className="button">
          <div className="cta">
            <div className="add-to-cart">Add to cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
