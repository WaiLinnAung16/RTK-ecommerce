import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCardStackPlus, RxCardStackMinus } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  addQuantity,
  minusQuantity,
  removeFromCart,
} from "../features/cartSlice";
const AddToCart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (cartItems.length === 0) {
    return (
      <div className=" flex flex-col justify-center items-center gap-5 container mx-auto">
        <h1 className="text-5xl">Your Cart is Empty!</h1>
        <Link to={"/"}>
          <button className=" bg-info mr-3 py-2 px-4 rounded-md font-bold text-primary transition hover:bg-primary hover:text-secondary">
            Go Shopping
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className=" flex flex-col gap-5 container mx-auto">
      {cartItems.map((item) => {
        const oneItemPrice = item.price * item.quantity;
        return (
          <div
            className=" flex flex-col items-center md:flex-row gap-4 p-3 md:p-5 border rounded-md "
            key={item.id}
          >
            <div className=" shrink-0 rounded overflow-hidden">
              <img src={item.thumbnail} alt="" className=" h-[250px]" />
            </div>
            <div className=" flex flex-col justify-center gap-4 w-full">
              <h1 className=" text-xl font-bold">{item.title}</h1>
              <p className=" w-full md:w-3/4 font-semibold text-slate-600">
                {item.description}
              </p>
              <p className=" text-xl font-bold">${oneItemPrice}</p>

              <div className=" flex items-center gap-4 select-none">
                <RxCardStackMinus
                  onClick={() => dispatch(minusQuantity(item))}
                  className=" text-3xl text-red-400 hover:scale-105 hover:text-red-600"
                />
                <p className=" font-bold text-3xl">{item.quantity}</p>
                <RxCardStackPlus
                  onClick={() => dispatch(addQuantity(item))}
                  className=" text-3xl text-accent hover:scale-105 hover:text-blue-600"
                />
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item))}
                className=" bg-danger mr-3 w-40 py-2 rounded-md font-bold text-primary transition hover:bg-red-500 hover:text-secondary"
              >
                Remove Item
              </button>
            </div>
          </div>
        );
      })}
      <div className=" flex justify-between border-t-2 pt-4">
        <h1 className=" text-4xl font-semibold">Total</h1>
        <p className=" text-4xl font-bold">${totalAmount}</p>
      </div>
    </div>
  );
};

export default AddToCart;
