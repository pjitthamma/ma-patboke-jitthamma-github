import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Policy from "./pages/Policy";
import Error from "./pages/Error";
import 'intro.js/introjs.css';
import { setUsername } from "./utils/userStorage";
import { bindingManipulationUI } from "./utils/manipulateUI/manipulateUI";
//import { automateRequestRefundStep1 } from "./utils/manipulateUI/RequestRefund";

function App() {
  setUsername();
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    bindingManipulationUI();
  }, []);

  // todo: for test only
  //useEffect(() => {
  //  automateRequestRefundStep1();
  //}, []);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "This is the home page.";
        break;
      case "/checkout":
        title = "Checkout";
        metaDescription = "Proceed with your checkout.";
        break;
      case "/single-product":
        title = "Product";
        metaDescription = "View details of the product.";
        break;
      case "/cart":
        title = "Cart";
        metaDescription = "Your shopping cart.";
        break;
      case "/shop":
        title = "Shop";
        metaDescription = "Explore our products.";
        break;
      case "/contact":
        title = "Contact";
        metaDescription = "Get in touch with us.";
        break;
      case "/orders":
        title = "Orders";
        metaDescription = "Your previous orders.";
        break;
      case "/policy":
        title = "Policy";
        metaDescription = "Read our policies.";
        break;
      case "/error":
        title = "Error";
        metaDescription = "Page not found.";
        break;
      default:
        title = "";
        metaDescription = "";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/error" element={<Error />} />
      </Routes>
  );
}

export default App;
