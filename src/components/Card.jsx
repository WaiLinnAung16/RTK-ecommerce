import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
const Card = ({ product }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  // console.log(cartItems);
  return (
    <div className=" w-80 h-[360px] p-4 relative shadow flex flex-col rounded transition cursor-pointer hover:shadow-xl hover:shadow-info hover:scale-105">
      <div className=" self-center">
        <img src={product.thumbnail} alt="" className=" h-40 " />
      </div>
      <h1 className=" font-bold text-lg my-3 text-primary">
        {product.title.substring(0, 25)}...
      </h1>
      <div className=" flex items-center space-x-2">
        <FaStar className=" text-danger" />
        <p className=" font-semibold text-accent">({product.rating})</p>
      </div>
      <h1 className=" text-xl font-bold text-primary my-3">
        $ {product.price}
      </h1>
      <div className="absolute bottom-3">
        <button
          onClick={() => dispatch(addToCart(product))}
          className=" bg-info mr-3 py-2 px-4 rounded-md font-bold text-primary transition hover:bg-primary hover:text-secondary"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
