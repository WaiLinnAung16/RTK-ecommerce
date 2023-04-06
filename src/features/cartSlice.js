import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAmount: 0,
  quantity: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems = [...state.cartItems, payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
