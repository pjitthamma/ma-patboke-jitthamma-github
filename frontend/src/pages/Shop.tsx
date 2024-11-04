import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import GroupComponent1 from "../components/GroupComponent1";
import ShopMenuBar from "../components/ShopMenuBar";
import Products from "../components/Products";
import FeatureIcons from "../components/FeatureIcons";
import Warranty from "../components/Warranty";
import FrameComponent3 from "../components/FrameComponent3";
import "./Shop.css";

const Shop: FunctionComponent = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string | null>(null);

  // Set filter to "newRelease" when the "New Release" button is clicked
  const handleNewReleaseClick = () => {
    setFilter("newRelease");
  };

  // Set filter to null when the "Best Seller" button is clicked to show all products
  const handleShowAllProducts = () => {
    setFilter(null);
  };

  return (
    <div className="shop">
      <Header meubelHouseLogos05="/meubel-house-logos05@2x.png" />
      <GroupComponent1 />
      <section className="content1">
        <ShopMenuBar 
          onNewReleaseClick={handleNewReleaseClick} 
          onBestSellerClick={handleShowAllProducts} 
        />
        <Products filter={filter} />
      </section>
      <footer className="features1">
        <div className="feature-list1">
          <div className="feature1">
            <FeatureIcons
              trophy1="/trophy-1.svg"
              highQuality="High Quality"
              craftedFromTopMaterials="crafted from top materials"
            />
            <Warranty />
            <FeatureIcons
              trophy1="/shipping.svg"
              highQuality="Free Shipping"
              propMargin="unset"
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

export default Shop;
