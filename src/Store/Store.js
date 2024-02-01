import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./Slices/Cart";
import productReducer from "./Slices/Product";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["product", "cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export default store;
export const persistor = persistStore(store);
