import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent3 from "../components/FrameComponent3";
import "./Checkout.css";

const Payment: FunctionComponent = () => {
  return (
    <div className="checkout">
      <Header meubelHouseLogos05="/meubel-house-logos05@2x.png" />
      <section className="content">
        Your Payment
      </section>
        
    <FrameComponent3 />
    </div>
  );
};

export default Payment;
