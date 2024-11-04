import { FunctionComponent } from "react";
import Footer from "./Footer";
import "./FrameComponent3.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <footer className={`footer-wrapper ${className}`}>
      <Footer />
    </footer>
  );
};

export default FrameComponent3;
