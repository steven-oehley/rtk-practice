import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../data/cartItems";

const calculateTotalAmount = (cartItems) => {
  return cartItems.reduce((total, item) => {
    return Math.round(total + item.price * item.amount, 2);
  }, 0);
};

const calculateTotalFigure = (cartItems) => {
  return parseFloat(
    cartItems
      .reduce((total, item) => {
        return total + item.price * item.amount;
      }, 0)
      .toFixed(2)
  );
};

const initialState = {
  cartItems: cartItems,
  amount: calculateTotalAmount(cartItems),
  total: calculateTotalFigure(cartItems),
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    decrement: (state, action) => {
      const productId = action.payload;
      const product = state.cartItems.find(
        (cartItem) => cartItem.id === productId
      );
      if (product && product.amount > 0) {
        product.amount -= 1;
      }
      state.amount = calculateTotalAmount(state.cartItems);
      state.total = calculateTotalFigure(state.cartItems);
    },
    increment: (state, action) => {
      const productId = action.payload;
      const product = state.cartItems.find(
        (cartItem) => cartItem.id === productId
      );
      if (product) {
        product.amount += 1;
      }
      state.amount = calculateTotalAmount(state.cartItems);
      state.total = calculateTotalFigure(state.cartItems);
    },
  },
});

export const { clearCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
