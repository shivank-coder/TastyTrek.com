import { configureStore } from '@reduxjs/toolkit';
import usersliceReducer from './Userslice'
import ProductSlideReducer from './ProductSlide';
export const store=configureStore({
    reducer:{
        user:usersliceReducer,
        product:ProductSlideReducer,
    },
});