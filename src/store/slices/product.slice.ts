// external imports
import { createSlice } from "@reduxjs/toolkit";

// internal imports
// models
import { ProductStateModel } from "models/state/product-state.model";
// store
import type { RootState } from "store";
// service
import { createProduct, fetchProducts } from "services/product-api.service";

const initialState: ProductStateModel = {
  error: null,
  fetchStatus: "idle",
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createNewLocalProduct: (state, action) => {
      state.products = [action.payload, ...state.products];
    },
    deleteLocaleProduct: (state, action) => {
      state.products = state.products.filter(({ id }) => id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    // fetch products
    builder.addCase(fetchProducts.pending, (state) => {
      state.fetchStatus = "pending";
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.data;
      state.fetchStatus = "succeeded";
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.fetchStatus = "failed";
      state.error = `Get all products failed! Error: ${action.payload}`;
    });
    // fetch product
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products = [...state.products, action.payload.data];
    });
  },
});

export const { createNewLocalProduct, deleteLocaleProduct } = productSlice.actions;

export const productState = (state: RootState) => state.product;

export default productSlice.reducer;
