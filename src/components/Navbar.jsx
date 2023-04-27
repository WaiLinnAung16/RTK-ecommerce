import React from "react";
import { FaShopify, FaSearch } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav className="mb-5 p-3 bg-info">
      <div className=" flex items-center justify-between container mx-auto">
        <Link to={"/"}>
          <div className=" flex items-center space-x-3" id="logo_container">
            <FaShopify className=" text-3xl text-primary" id="logo" />
            <h1 className=" hidden md:flex text-xl font-extrabold text-primary">
              Shopify
            </h1>
          </div>
        </Link>
        <div className=" flex items-center gap-3">
          <Link to={"/add-to-cart"}>
            <div className=" flex items-center gap-2 text-secondary bg-primary py-1 px-2 rounded shadow-sm">
              <BsCart2 className=" text-2xl" />
              <span className=" font-bold tracking-tighter">
                {cartItems.length}
              </span>
            </div>
          </Link>

          <div className=" w-[150px] md:w-full flex items-center space-x-2  rounded-md p-2 bg-secondary">
            <FaSearch className=" text-xl text-primary" />
            <input
              type="text"
              placeholder="Search..."
              className="w-[100px] md:w-full  outline-none bg-transparent text-primary font-semibold placeholder:font-semibold placeholder:text-primary"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
