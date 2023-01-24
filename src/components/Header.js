import { LOGO_CDN_URL } from "../config";

export const Title = () => {
  return (
    <img
      alt="food villa"
      src={LOGO_CDN_URL}
    />
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;