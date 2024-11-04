import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent3 from "../components/FrameComponent3";
import "./Contact.css";

const About: FunctionComponent = () => {
  return (
    <div className="contact">
      <Header meubelHouseLogos05="/meubel-house-logos051@2x.png" />
      <section className="hero">
        About US
      </section>
      <FrameComponent3 />
    </div>
  );
};

export default About;
