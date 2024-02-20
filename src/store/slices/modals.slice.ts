import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "store";

interface ModalsState {
  isShowAddProductModal: boolean;
}

const initialState: ModalsState = {
  isShowAddProductModal: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setIsShowAddProductModal: (state, action: PayloadAction<boolean>) => {
      state.isShowAddProductModal = action.payload;
    },
  },
});

export const { setIsShowAddProductModal } = modalsSlice.actions;

export const modalsState = (state: RootState) => state.modals;

export default modalsSlice.reducer;
