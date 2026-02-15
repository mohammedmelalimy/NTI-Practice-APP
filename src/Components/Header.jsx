import { Moon, ShoppingCart, SunDim } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { selectIsDarkMode, toggleTheme } from "../Store/Slices/themeSlice";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const isDark = useSelector(selectIsDarkMode);
  // to handle number of items in cart
  const addToCart = useSelector((state) => state.specific.specificProduct);



  return (
    <header className="w-5/6 mx-auto bg-white dark:bg-black text-black dark:text-white rounded-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">

      <nav className="p-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="" className="flex items-center space-x-3 cursor-pointer">
            <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="FlowCart Logo"
            />
            <span className="text-2xl font-bold">FlowCart</span>
          </Link>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <NavLink to="products" className="hover:text-blue-600">Products</NavLink>
          <NavLink to="about" className="hover:text-blue-600">About</NavLink>
          <NavLink to="contact" className="hover:text-blue-600">Contact</NavLink>
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark Mode */}
          <Link to="/cart">
            {addToCart.length>0 ? <span className="absolute top-3 right-17 bg-blue-500 text-white rounded-full
              w-4 h-4 flex items-center justify-center">{addToCart.length}</span>:null}
            <ShoppingCart size={26}/>
          </Link>
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {isDark ? <Moon size={22} /> : <SunDim size={22} />}
          </button>

          {/* responsive icon */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>
          </button>
        </div>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col p-4 space-y-3 font-medium">
          <NavLink to="" className="hover:text-blue-600" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="products" className="hover:text-blue-600" onClick={() => setOpen(false)}>Products</NavLink>
          <NavLink to="about" className="hover:text-blue-600" onClick={() => setOpen(false)}>About</NavLink>          <NavLink to="contact" className="hover:text-blue-600" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
      )}

    </header>
  );
};

export default Header;
