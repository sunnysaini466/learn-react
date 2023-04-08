import { useState } from "react";
import Logo from "../assets/img/food-villa.png";
import { Link } from "react-router-dom";

export const Title = () => {
  return (
    <a href="/">
      <img className="h-20 m-2" alt="food villa" src={Logo} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between shadow-md bg-pink-50">
      <Title />
      {/* {title}
      <button onClick={() => setTitle("Sunny food app")}>Click Here</button> */}
      <div className="nav-items">
        <ul className="flex py-8">
          <Link to="/">
            <li className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300">
              Contact
            </li>
          </Link>
          <Link to="/instamart">
            <li className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300">
              Instamart
            </li>
          </Link>
          <li className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300">
            Cart
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
