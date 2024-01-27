import { createSlice } from '@reduxjs/toolkit';
import { FaCreativeCommonsSamplingPlus } from 'react-icons/fa';
const initialState={
    productlist:[]
}
export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        setDataproduct:(state,action)=>{
            console.log(action);
            state.productlist=[...action.payload]
        }
    }
})

export const {setDataproduct}=productSlice.actions;
export default productSlice.reducer;