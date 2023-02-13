import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/Reducer/cartSlice";
import dataReducer from "../redux/Reducer/dataSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistCart = {
  key: "cart-jew",
  storage,
};

const persistData = {
  key: "data-jew",
  storage,
};

const cartPersist = persistReducer(persistCart, cartReducer);
const dataPersist = persistReducer(persistData, dataReducer);

const rootReducer = combineReducers({
  cart: cartPersist,
  data: dataPersist,
});

const myStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default myStore;
export const persistor = persistStore(myStore);
