import { FunctionComponent } from "react";
import Header from "../components/Header";
import GroupComponent8 from "../components/GroupComponent8";
import ContactInfo from "../components/ContactInfo";
import FrameComponent3 from "../components/FrameComponent3";
import "./Contact.css";

const Contact: FunctionComponent = () => {
  return (
    <div className="contact">
      <Header meubelHouseLogos05="/meubel-house-logos051@2x.png" />
      <section className="hero">
        <GroupComponent8 />
        <ContactInfo />
      </section>
      <FrameComponent3 />
    </div>
  );
};

export default Contact;
