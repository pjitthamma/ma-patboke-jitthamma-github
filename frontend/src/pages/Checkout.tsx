import { FunctionComponent } from "react";
import Header from "../components/Header";
import GroupComponent7 from "../components/GroupComponent7";
import GroupComponent5 from "../components/GroupComponent5";
import GroupComponent6 from "../components/GroupComponent6";
import FeatureIcons from "../components/FeatureIcons";
import Warranty from "../components/Warranty";
import FrameComponent3 from "../components/FrameComponent3";
import "./Checkout.css";

const Checkout: FunctionComponent = () => {
  return (
    <div className="checkout">
      <Header meubelHouseLogos05="/meubel-house-logos05-11@2x.png" />
      <GroupComponent7 />
      <section className="content">
        <div className="rectangle-parent">
          <div className="frame-child" />
          <GroupComponent5 />
          <GroupComponent6 />
        </div>
      </section>
      <footer className="features">
        <div className="feature-list">
          <div className="feature">
            <FeatureIcons
              trophy1="/trophy-1.svg"
              highQuality="High Quality"
              propMargin="0"
              craftedFromTopMaterials="crafted from top materials"
            />
            <Warranty propMargin="0" />
            <FeatureIcons
              trophy1="/shipping.svg"
              highQuality="Free Shipping"
              propMargin="0"
              craftedFromTopMaterials="Order over 150 $"
            />
            <FeatureIcons
              trophy1="/customersupport.svg"
              highQuality="24 / 7 Support"
              propMargin="unset"
              craftedFromTopMaterials="Dedicated support"
            />
          </div>
        </div>
        <FrameComponent3 />
      </footer>
    </div>
  );
};

export default Checkout;
