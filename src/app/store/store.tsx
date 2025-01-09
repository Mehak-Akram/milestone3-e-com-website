import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product";
import cartSlice from "./features/cart";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({
  product: productSlice,
  cart: cartSlice,
});

const pReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: pReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
