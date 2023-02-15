import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload.item;
      const quantity = action.payload.quantity;

      const itemIndex = state.cart.findIndex((cartItem) => {
        return cartItem.id == item.id;
      });
      if (itemIndex !== -1) {
        state.total += Math.round(item.price) * quantity;
        state.cart[itemIndex].quantity += quantity;
        window.alert("Add Product to Cart Successfully!!");

        return;
      }

      const newItem = {
        ...item,
        quantity,
      };
      state.total += Math.round(item.price) * quantity;
      state.cart.push(newItem);
      window.alert("Add Product to Cart Successfully!!");
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const itemIndex = state.cart.findIndex((item) => {
        return item.id == action.payload.id;
      });

      if (itemIndex !== -1) {
        if (product.quantity > 1) {
          state.cart[itemIndex].quantity -= 1;
          state.total -= Math.round(state.cart[itemIndex].price) * 1;
          return;
        }
      }
    },
    addMoreProduct: (state, action) => {
      const item = action.payload;
      const itemIndex = state.cart.findIndex((cartItem) => {
        return cartItem.id == item.id;
      });

      if (itemIndex !== -1) {
        state.total += Math.round(item.price);
        state.cart[itemIndex].quantity += 1;

        return;
      }
    },
    deleteFromCart: (state, action) => {
      const itemIndex = state.cart.findIndex((item) => {
        return item.id == action.payload.id;
      });

      if (itemIndex !== -1) {
        if (window.confirm("Remove this item?")) {
          state.total -=
            state.cart[itemIndex].price * state.cart[itemIndex].quantity;
          state.cart.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, addMoreProduct, deleteFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
