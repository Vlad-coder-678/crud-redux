import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/product.slice";
import modalsSlice from "./slices/modals.slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  reducer: {
    modals: modalsSlice,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
