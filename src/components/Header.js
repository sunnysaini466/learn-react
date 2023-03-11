import { useState } from "react";
import Logo from "../assets/img/food-villa.png";
import { Link } from "react-router-dom";

export const Title = () => {
  return (
    <>
      <Link to="/">
        <img alt="food villa" src={Logo} />
      </Link>
    </>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      {/* {title}
      <button onClick={() => setTitle("Sunny food app")}>Click Here</button> */}
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
