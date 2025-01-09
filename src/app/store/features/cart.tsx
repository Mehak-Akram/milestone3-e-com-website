import { Cart } from "@/app/utils/type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000);
      let newObj = { ...action.payload, uuid };
      state.push(newObj);
    },
    delItem(state, { payload }) {
      return state.filter((val) => val.uuid !== payload);
    },

    addCart(state, action) {
      let obj = state.find(
        (val) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      );
      if (obj) {
        ++obj.qty;
        let newState = state.filter((val) => val.id !== obj?.id);
        state = [...newState, obj];
        return;
      }
    },

    subtarctCart(state, action) {
      let obj = state.find(
        (val) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      );
      if (obj !== undefined) {
        if (obj.qty <= 1) {
          return state.filter((val) => val.uuid !== obj?.uuid);
        }

        --obj.qty;
        let newState = state.filter((val) => val.uuid == obj?.uuid);
        state = [...newState, obj];
        return;
      }
    },
  },
});

export const { addToCart, delItem, addCart, subtarctCart } = cartSlice.actions;

export default cartSlice.reducer;
