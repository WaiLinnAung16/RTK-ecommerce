import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  totalAmount: 0,
  quantity: 0,
  cartItems: [],
};

const STORAGE_KEY = "cartItems";

const storeItems = Cookies.get(STORAGE_KEY);

const calculateQuantity = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};
const calculateTotalAmount = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price, 0);
};

if (storeItems) {
  initialState.cartItems = JSON.parse(storeItems);
  initialState.quantity = calculateQuantity(initialState.cartItems);
  initialState.totalAmount = calculateTotalAmount(initialState.cartItems);
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find((item) => item.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
        state.quantity = calculateQuantity(state.cartItems);
        state.totalAmount = calculateTotalAmount(state.cartItems);
        Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
      }
    },
    addQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      console.log(calculateTotalAmount(state.cartItems));
      state.quantity = calculateQuantity(state.cartItems);
      state.totalAmount =  
    },
    minusQuantity: (state, { payload }) => {
      if (payload.quantity === 1) {
        return state;
      } else {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        state.quantity--;
        state.totalAmount -= payload.price;
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.quantity--;
      state.totalAmount -= payload.price * payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, addQuantity, minusQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
