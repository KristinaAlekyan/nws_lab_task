import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";

export const store = configureStore({
  reducer: {
    itemsSlice: itemsSlice,
  },
});

export default store;