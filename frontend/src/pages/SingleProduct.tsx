import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import GroupComponent4 from "../components/GroupComponent4"; // Use the updated component
import FrameComponent3 from "../components/FrameComponent3";
import { productData } from "../components/productData"; // Import product data
import "./SingleProduct.css";

const SingleProduct: FunctionComponent = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get('productId'); // Extract productId from query params

  const product = productData.find((p) => p.id === Number(productId)); // Find product by ID

  if (!product) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  return (
    <div className="single-product">
      <Header meubelHouseLogos05="/meubel-house-logos05@2x.png" />
      <main className="product-details-wrapper">
        <section className="product-details">
          {/* Pass product details to GroupComponent4 */}
          <GroupComponent4
            className="group-component"
            productId={product.id}
            productName={product.name}
            productPrice={product.price}
            productDescription={product.description}
            productImage={product.image}
            productCategory={product.category}
          />
        </section>
      </main>
      <FrameComponent3 />
    </div>
  );
};

export default SingleProduct;
