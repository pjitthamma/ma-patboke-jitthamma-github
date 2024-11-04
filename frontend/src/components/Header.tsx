import { FunctionComponent, useState  } from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

export type HeaderType = {
  className?: string;
  meubelHouseLogos05?: string;
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  meubelHouseLogos05,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={`header ${className}`}>
      <div className="header-child" />
      <div className="group-div">
        <div className="nav-links-container-parent">
          <div className="nav-links-container">
            <div className="logo-container">
              <img
                className="meubel-house-logos-05-icon"
                loading="lazy"
                alt="Furniro Logo"
                src={meubelHouseLogos05}
              />
            </div>
            <Link to="/" className="skinclinic">Furniro</Link>
          </div>
          <div className="nav-options">
            <div className="home-parent">
              <Link to="/" className="home1">Home</Link>
              <Link to="/shop" className="shop1 shopNewrelease">Shop</Link>
              <Link to="/policy" className="about">Policies</Link>
              <Link to="/contact" className="contact">Contact</Link>
            </div>
          </div>
          <div className="search-cart-icons">
            <div className="account-dropdown">
              <img
                className="mdiaccount-alert-outline-icon"
                loading="lazy"
                alt="Account"
                src="/mdiaccountalertoutline.svg"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="custom-dropdown-menu">
                  <Link to="/error" className="custom-dropdown-item">Your Account</Link>
                  <Link to="/orders" className="custom-dropdown-item">Your Orders</Link>
                  <hr className="custom-dropdown-divider" />
                  <Link to="/" className="custom-dropdown-item" style={{ color: 'red' }}>Logout</Link>
                </div>
              )}
            </div>
              <Link to="/cart">
                <img
                  className="mdiaccount-alert-outline-icon shopping-cart"
                  loading="lazy"
                  alt="Shopping Cart"
                  src="/antdesignshoppingcartoutlined.svg"
                />
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
