import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Link, useNavigate  } from 'react-router-dom';
import "./Footer.css";

export type FooterType = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMarginTop?: CSSProperties["marginTop"];
  propHeight?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  propMargin?: CSSProperties["margin"];
  propFontWeight?: CSSProperties["fontWeight"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propHeight1?: CSSProperties["height"];
  propPadding1?: CSSProperties["padding"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  propFlex,
  propAlignSelf,
  propMarginTop,
  propHeight,
  propPadding,
  propMargin,
  propFontWeight,
  propTextDecoration,
  propHeight1,
  propPadding1,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
      marginTop: propMarginTop,
    };
  }, [propFlex, propAlignSelf, propMarginTop]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  const funiroStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      fontWeight: propFontWeight,
    };
  }, [propMargin, propFontWeight]);

  const aboutStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      padding: propPadding1,
    };
  }, [propHeight1, propPadding1]);

  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    navigate('/error');
  };

  return (
    <div className={`footer ${className}`} style={footerStyle}>
      <div className="footer-background" />
      <div className="frame-parent7" style={groupDivStyle}>
        <div className="brand-info-parent">
          <div className="brand-info">
            <b className="funiro" style={funiroStyle}>
              Funiro.
            </b>
            <div className="address-container">
              <div className="university-drive-suite-container">
                <p className="university-drive-suite">
                  Max-Planck-Straße 50
                </p>
                <p className="university-drive-suite">04105 Leipzig Germany</p>
              </div>
            </div>
          </div>
          <div className="frame-parent8">
            <div className="frame-parent9">
              <div className="links-parent">
                <div className="links">Links</div>
                <div className="frame-wrapper">
                  <div className="home-group">
                    <Link to="/" className="home1">Home</Link>
                    <Link to="/shop" className="shop1">Shop</Link>
                    <Link to="/contact" className="contact">Contact</Link>
                  </div>
                </div>
              </div>
              <div className="help-parent" style={groupDiv1Style}>
                <div className="help">Help</div>
                <div className="payment-options-parent">
                <Link to="/policy"className="returns">Policies</Link>
                </div>
              </div>
            </div>
            <div className="frame-wrapper1">
              <div className="newsletter-parent" style={groupDiv1Style}>
                <div className="newsletter">Newsletter</div>
                  <div className="email-subscription">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="email-field" 
                    />
                    <button className="subscribe" onClick={handleSubscribeClick}>Subscribe</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-parent">
          <div className="line-div" />
          <div className="copyright">
            <div className="enter-your-email">
              2024 furino. All rights reverved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
