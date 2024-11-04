import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import FeaturedProducts from "../components/FeaturedProducts";
import FrameComponent3 from "../components/FrameComponent3";
import "./Home.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

 // Function to handle clicking on the product
 const handleProductClick = useCallback((productId: number) => {
  navigate(`/single-product?productId=${productId}`); // Redirect to single product with ID
}, [navigate]);

  const onMaskGroupIconClick = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  const navigateToDining = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const navigateToBedroom = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const navigateToLiving = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const handleShowMoreClick = () => {
    navigate('/shop');
  };

  return (
    <div className="home">
      <Header meubelHouseLogos05="/meubel-house-logos05@2x.png" />
      <main className="hero-content-parent">
        <section className="hero-content">
        <div onClick={navigateToLiving} style={{ cursor: 'pointer' }}>
            <img
              className="mask-group-icon"
              loading="lazy"
              alt=""
              src="mask-group.svg"
            />
          </div>
        </section>
        <section className="product-categories-parent">
          <div className="product-categories">
            <div className="categories-header">
              <div className="browse-range">
                <h2 className="browse-the-range">Browse The Range</h2>
              </div>
              <div className="treating-all-skin">
                Discover your dream furniture across dining, living, bedroom and other more categories—tailored to fit your home.
              </div>
            </div>
          </div>
          <div className="categories-container">
            <div className="category-cards">
              <div onClick={navigateToDining} style={{ cursor: "pointer" }}>
                <FrameComponent
                  maskGroup="/mask-group-1@2x.png"
                  dining="Dining"
                />
              </div>
              <div onClick={navigateToBedroom} style={{ cursor: "pointer" }}>
                <FrameComponent
                  maskGroup="/mask-group-2@2x.png"
                  propWidth="356px"
                  dining="Bedroom"
                  propMinWidth="112px"
                />
              </div>
              <div onClick={navigateToLiving} style={{ cursor: "pointer" }}>
                <FrameComponent
                  maskGroup="/imageliving-room@2x.png"
                  propWidth="356px"
                  dining="Living"
                  propMinWidth="112px"
                />
              </div>
            </div>
            <h1 className="title">Our Products</h1>
            <div className="products-content-wrapper">
              <div className="products-content">
                <div className="product-cards">

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
                </div>
                <div className="show-more-wrapper">
                  <button className="show-more" onClick={handleShowMoreClick}>
                    <div className="show-more-child" />
                    <div className="show-more1">Show More</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FrameComponent3 />
    </div>
  );
};

export default Home;
