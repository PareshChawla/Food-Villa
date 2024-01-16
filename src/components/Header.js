import { useContext, useState } from "react";
import food from "../assets/img/logo2.png";
import cart from "../assets/img/cart.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Options from "../assets/img/options.png";
import Cross from "../assets/img/cross.png";

const Header = () => {
  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [toggleState, setToggleState] = useState(false);

  const handleLoginClick = () => {
    // Logic for login (e.g., authentication)
    setLoggedIn(true);
  };

  const handleLogoutClick = () => {
    // Logic for logout
    setLoggedIn(false);
  };

  const handleToggleState = () => {
    setToggleState(!toggleState);
  };

  return (
    <>
      <div className="md:h-[13vh] h-[18vh] w-full flex flex-row justify-between items-center sm:flex-row sm:flex bg-[#FAF1E4] border-[#DEB887] border shadow-lg">
        <Link to="/">
          <img
            className="md:h-[70px] md:w-[70px] h-20 w-20 md:ml-8 transform transition-transform hover:scale-105"
            src={food}
            alt="logo"
          />
        </Link>
        <ul className="sm:flex gap-20 py-7 ml-auto mr-12 hidden">
          <Link to="/" className="hover:text-orange-800 text-md font-serif">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-orange-800 text-md font-serif"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-orange-800 text-md font-serif"
          >
            Contact us
          </Link>
        </ul>
        {isLoggedIn ? (
          <div className="flex flex-row items-center justify-center">
            <h3 className="font-bold text-sm">{user.name}</h3>
            <button
              className="md:block mr-2 bg-[#DEB887] hidden rounded-lg h-6 w-16 hover:bg-black hover:text-red-50 text-sm font-medium m-5 hover:shadow-lg"
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="hidden md:block mr-2 bg-[#DEB887] rounded-lg h-6 w-14 hover:bg-black hover:text-red-50 text-sm font-medium m-5 hover:shadow-lg"
            onClick={handleLoginClick}
          >
            Login
          </button>
        )}
        <Link to="/cart">
          <div className="flex flex-row items-center ml-28">
            <img
              className="md:h-7 md:w-7 md:m-2 h-8 w-8"
              src={cart}
              alt="cart"
            />
            <p className=" h-7 w-6 hover:bg-black bg-[#935116] text-white md:w-5 md:h-6 md:ml-0  ml-2 font-bold text-xl md:text-lg md:font-mono text-center md:text-center rounded-t-md md:mr-6">
              {cartItems.length}
            </p>
          </div>
        </Link>
        <div className="relative">
          {toggleState ? (
            <div
              className="h-6 w-6 m-2 md:hidden md:h-7 md:w-7 md:mr-2 cursor-pointer"
              onClick={handleToggleState}
            >
              <img src={Cross} alt="close" />
            </div>
          ) : (
            <div
              className="h-7 w-7 m-2 md:hidden md:h-7 md:w-7 md:mr-2 cursor-pointer"
              onClick={handleToggleState}
            >
              <img src={Options} alt="options" />
            </div>
          )}
        </div>
        {toggleState && (
          <div className="bg-[#DEB887] flex flex-col justify-end p-6 absolute right-2 mt-10 top-16 rounded-lg animate-bounce-limited z-10">
            <Link to="/">
              <p className="font-serif font-bold text-lg hover:text-orange-800">
                Home
              </p>
            </Link>
            <Link to="/about">
              <p className="font-serif font-bold text-lg hover:text-orange-800">
                About
              </p>
            </Link>
            <Link to="contact">
              <p className="font-serif font-bold text-lg hover:text-orange-800">
                Contact us
              </p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
