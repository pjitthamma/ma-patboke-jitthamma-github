import { FunctionComponent } from "react";
import Header from "../components/Header";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent3 from "../components/GroupComponent3";
import FrameComponent3 from "../components/FrameComponent3";
import "./Cart.css";

const Cart: FunctionComponent = () => {
  return (
    <div className="cart">
      <Header meubelHouseLogos05="/meubel-house-logos051@2x.png" />
      <section className="frame-section">
        <GroupComponent2 />
        <GroupComponent3 />
      </section>
      <FrameComponent3 />
    </div>
  );
};

export default Cart;
