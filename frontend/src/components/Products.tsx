import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";
import "./Products.css";

export type ProductsType = {
  className?: string;
  filter?: string | null;
};

const Products: FunctionComponent<ProductsType> = ({ className = "", filter }) => {
  const navigate = useNavigate();

  const handleProductClick = useCallback((productId: number) => {
    navigate(`/single-product?productId=${productId}`);
  }, [navigate]);

  // Determine if we should show all products (Best Seller) or filter to new releases
  const showAllProducts = filter === "bestSeller" || !filter;

  return (
    <div className={`products ${className}`}>
      <div className="rectangle-parent17">
        <div className="product-cards2">
          {/* Show all products if filter is set to bestSeller or null */}
          {showAllProducts && (
            <>
              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/1.png"
                prop="-30%"
                productName="Sylthe"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Minimal white chair"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 147"
                propMinWidth2="114px"
                fixPrice1="€ 205"
                propWidth1="107px"
                category="Chairs"
                productId={1}
                onClick={() => handleProductClick(1)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/2.png"
                prop="-30%"
                productName="Leviosa"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Stylish cafe chair"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 70"
                propMinWidth2="114px"
                fixPrice1="€ 149"
                propWidth1="107px"
                category="Chairs"
                productId={2}
                onClick={() => handleProductClick(2)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/3.png"
                prop="-50%"
                productName="Lolito"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Luxury big sofa"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 412"
                propMinWidth2="114px"
                fixPrice1="€ 822"
                propWidth1="107px"
                category="Sofas"
                productId={3}
                onClick={() => handleProductClick(3)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/4.png"
                prop=""
                productName="Resp"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Outdoor bar table and stool"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 294"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Outdoor Furniture"
                productId={4}
                onClick={() => handleProductClick(4)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/5.png"
                prop=""
                productName="Luna"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Scandinavian-inspired wooden dining table"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 499"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Dining Tables"
                productId={5}
                onClick={() => handleProductClick(5)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/6.png"
                prop=""
                productName="Nora"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Velvet tufted armchair, perfect for cozy corners"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 320"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Armchairs"
                productId={6}
                onClick={() => handleProductClick(6)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/7.png"
                prop=""
                productName="Aurora"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Modern upholstered queen bed with a sleek headboard"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 720"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Beds"
                productId={7}
                onClick={() => handleProductClick(7)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/8.png"
                prop=""
                productName="Vela"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Contemporary glass coffee table with chrome legs"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 260"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Coffee Tables"
                productId={8}
                onClick={() => handleProductClick(8)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/9.png"
                prop=""
                productName="Solace"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Outdoor lounge set with weatherproof cushions"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 899"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Outdoor Furniture"
                productId={9}
                onClick={() => handleProductClick(9)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/10.png"
                prop=""
                productName="Astra"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Minimalist oak writing desk with storage drawers"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 340"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Desks"
                productId={10}
                onClick={() => handleProductClick(10)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/11.png"
                prop=""
                productName="Fjord"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Extendable dining table, perfect for gatherings"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 650"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Dining Tables"
                productId={11}
                onClick={() => handleProductClick(11)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/12.png"
                prop=""
                productName="Breeze"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Outdoor bar table and stools, weather-resistant rattan"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 294"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Outdoor Furniture"
                productId={12}
                onClick={() => handleProductClick(12)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/13.png"
                prop=""
                productName="Opal"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Elegant wooden dresser with brass handles"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 540"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Dressers"
                productId={13}
                onClick={() => handleProductClick(13)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/14.png"
                prop=""
                productName="Echo"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Compact, modern bedside table with soft-close drawers"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 185"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Bedside Tables"
                productId={14}
                onClick={() => handleProductClick(14)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/15.png"
                prop=""
                productName="Cove"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Plush sectional sofa with deep seating for maximum comfort"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 1.250"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Sofas"
                productId={15}
                onClick={() => handleProductClick(15)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/16.png"
                prop=""
                productName="Haven"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Luxurious velvet bench with gold-tone legs."
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 295"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Benches"
                productId={16}
                onClick={() => handleProductClick(16)}
              />

            </>
          )}

          {/* Show only new release products if filter is set to "newRelease" */}
          {filter === "newRelease" && (
            <>
              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/4.png"
                prop=""
                productName="Resp"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Outdoor bar table and stool"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 294"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Outdoor Furniture"
                productId={4}
                onClick={() => handleProductClick(4)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/5.png"
                prop=""
                productName="Luna"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Scandinavian-inspired wooden dining table"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 499"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Dining Tables"
                productId={5}
                onClick={() => handleProductClick(5)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/6.png"
                prop=""
                productName="Nora"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Velvet tufted armchair, perfect for cozy corners"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 320"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Armchairs"
                productId={6}
                onClick={() => handleProductClick(6)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/7.png"
                prop=""
                productName="Aurora"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Modern upholstered queen bed with a sleek headboard"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 720"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Beds"
                productId={7}
                onClick={() => handleProductClick(7)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/8.png"
                prop=""
                productName="Vela"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Contemporary glass coffee table with chrome legs"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 260"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Coffee Tables"
                productId={8}
                onClick={() => handleProductClick(8)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/9.png"
                prop=""
                productName="Solace"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Outdoor lounge set with weatherproof cushions"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 899"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Outdoor Furniture"
                productId={9}
                onClick={() => handleProductClick(9)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/10.png"
                prop=""
                productName="Astra"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Minimalist oak writing desk with storage drawers"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 340"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Desks"
                productId={10}
                onClick={() => handleProductClick(10)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/11.png"
                prop=""
                productName="Fjord"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Extendable dining table, perfect for gatherings"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 650"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Dining Tables"
                productId={11}
                onClick={() => handleProductClick(11)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/12.png"
                prop=""
                productName="Breeze"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Outdoor bar table and stools, weather-resistant rattan"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 294"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Outdoor Furniture"
                productId={12}
                onClick={() => handleProductClick(12)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/13.png"
                prop=""
                productName="Opal"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Elegant wooden dresser with brass handles"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 540"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Dressers"
                productId={13}
                onClick={() => handleProductClick(13)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/14.png"
                prop=""
                productName="Echo"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Compact, modern bedside table with soft-close drawers"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 185"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Bedside Tables"
                productId={14}
                onClick={() => handleProductClick(14)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/15.png"
                prop=""
                productName="Cove"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Plush sectional sofa with deep seating for maximum comfort"
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 1.250"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Sofas"
                productId={15}
                onClick={() => handleProductClick(15)}
              />

              <FeaturedProducts
                propWidth="285px"
                propMarginBottom="unset"
                propFlex="unset"
                images="/16.png"
                prop=""
                productName="Haven"
                propMinWidth="93px"
                propMargin="unset"
                sortDescription="Luxurious velvet bench with gold-tone legs."
                propDisplay="unset"
                propMinWidth1="unset"
                fixPrice="€ 295"
                propMinWidth2="114px"
                fixPrice1=""
                propWidth1="107px"
                category="Benches"
                productId={16}
                onClick={() => handleProductClick(16)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
