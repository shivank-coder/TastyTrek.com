import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productlist: [],
  cardItem: [], // Corrected the property name here
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setDataproduct: (state, action) => {
      console.log(action);
      state.productlist = [...action.payload];
    },
    addCardItem: (state, action) => {
      console.log(action);
      const total = action.payload.price;
      state.cardItem = [...state.cardItem, { ...action.payload, qty: 1, total: total }];
    },
    deleteCardItem: (state, action) => {
      console.log(action);
      // Handle deletion logic if needed
    },
  },
});

export const { setDataproduct, addCardItem, deleteCardItem } = productSlice.actions;
export default productSlice.reducer;
