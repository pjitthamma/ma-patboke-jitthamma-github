import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent3 from "../components/FrameComponent3";
import "./Contact.css";

const Error: FunctionComponent = () => {
  return (
    <div className="error-page">
      <Header meubelHouseLogos05="/meubel-house-logos051@2x.png" />
      <section className="hero-error">
        <img src="/404.png" alt="404 Error" className="centered-image" />
      </section>
      <FrameComponent3 />
    </div>
  );
};

export default Error;
