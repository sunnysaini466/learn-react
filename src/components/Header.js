import { useState } from "react";
import { LOGO_CDN_URL } from "../config";

export const Title = () => {
  return <img alt="food villa" src={LOGO_CDN_URL} />;
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
