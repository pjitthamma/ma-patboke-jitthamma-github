import { FunctionComponent } from "react";
import Header from "../components/Header";
import GroupComponent9 from "../components/GroupComponent9";
import GroupComponent10 from "../components/GroupComponent10";
import FrameComponent3 from "../components/FrameComponent3";
import "./Cart.css";

const Order: FunctionComponent = () => {
  return (
    <div className="cart">
      <Header meubelHouseLogos05="/meubel-house-logos051@2x.png" />
      <section className="frame-section">
        <GroupComponent9 />
        <GroupComponent10 />
      </section>
      <FrameComponent3 />
    </div>
  );
};

export default Order;
