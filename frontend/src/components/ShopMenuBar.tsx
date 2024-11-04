import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./GroupComponent.css";

export type ShopMenuBarProps = {
  onNewReleaseClick: () => void;
  onBestSellerClick: () => void; // Add the Best Seller click handler
};

const ShopMenuBar: FunctionComponent<ShopMenuBarProps> = ({ onNewReleaseClick, onBestSellerClick }) => {
  const navigate = useNavigate();

  return (
    <div className="rectangle-parent15">
      <div className="frame-child15" />
      <div className="filter-category-wrapper">
        <div className="filter-category">
          <div className="filter-dropdown">
            <div className="filter-label">
              <div className="filter-icon">
                <img
                  className="system-uiconsfiltering"
                  alt=""
                  src="/systemuiconsfiltering.svg"
                />
              </div>
              <div className="filter">Filter</div>
            </div>
          </div>
          <div className="filter-divider">
            <div className="filter-divider-child" />
          </div>
          <div className="filter-dropdown">
            <div className="filter-label filter-label-new-release">
              <div className="filter-icon">
                <img
                  className="system-uiconsfiltering"
                  alt=""
                  src="/new-arrival.svg"
                />
              </div>
              <div className="filter filter-label-new-release" onClick={onNewReleaseClick}>New Releases</div>
            </div>
          </div>
          <div className="filter-divider">
            <div className="filter-divider-child" />
          </div>
          <div className="filter-dropdown">
            <div className="filter-label filter-label-best-seller">
              <div className="filter-icon">
                <img
                  className="system-uiconsfiltering"
                  alt=""
                  src="/best-seller.svg"
                />
              </div>
              <div className="filter filter-label-best-seller" onClick={onBestSellerClick}>Best Seller</div>
            </div>
          </div>
          <div className="filter-divider">
            <div className="filter-divider-child" />
          </div>
        </div>
      </div>
      <div className="sort">
        <div className="results-count">
          <div className="showing-116-of">Showing 1–16 results</div>
        </div>
      </div>
    </div>
  );
};

export default ShopMenuBar;
