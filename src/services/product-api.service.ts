// external imports
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// internal imports
// constants
import { PRODUCTS_URL } from "constants/api";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axios.get(PRODUCTS_URL);
    return response;
  },
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async () => {
    const response = await axios.get(`${PRODUCTS_URL}/1`);
    return response;
  },
);

export const addNewProduct = createAsyncThunk(
  "product/addNewProduct",
  async (product) => {
    const response = await axios.post(PRODUCTS_URL, product);
    return response;
  },
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product) => {
    const response = await axios.patch(PRODUCTS_URL, product);
    return response;
  },
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    const response = await axios.delete(`${PRODUCTS_URL}/${id}`);
    return response;
  },
);
