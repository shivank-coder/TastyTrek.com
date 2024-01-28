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

      const check=state.cardItem.some(el=> el._id===action.payload._id)
      console.log(check);
      if(check)
      {alert("already item in your card");

      }
      else{
        const total = action.payload.price;
        state.cardItem = [...state.cardItem, { ...action.payload, qty: 1, total: total }];
          
        
      }
   
},
   
        deleteCardItem: (state, action) => {
            console.log(action);
             const itemId = state.cardItem.findIndex((el)=>el._id===action.payload);
             state.cardItem.splice(itemId,1);
             console.log(itemId);
            // const updatedItems = state.cardItem.filter(item => item.id !== itemId);
            // state.cardItem = updatedItems;
          },

    increaseQty:(state,action)=>{
        const itemId = state.cardItem.findIndex((el)=>el._id===action.payload);
console.log(itemId);
 let qty=state.cardItem[itemId].qty;
 const quantityincrease=++ qty;
 state.cardItem[itemId].qty=quantityincrease;
const findprice=state.cardItem[itemId].price;
const total=findprice * quantityincrease;
state.cardItem[itemId].total=total;
    },

   decreaseQty:(state,action)=>{
    const itemId = state.cardItem.findIndex((el)=>el._id===action.payload);
console.log(itemId);
 let qty=state.cardItem[itemId].qty;
 if(qty>=1)
 { const quantitydecrease=-- qty;
 state.cardItem[itemId].qty=quantitydecrease;
 const findprice=state.cardItem[itemId].price;
 const total=findprice/quantitydecrease;
 state.cardItem[itemId].total=total;



 }


    }
  },
});

export const { setDataproduct, addCardItem, deleteCardItem,increaseQty,decreaseQty } = productSlice.actions;
export default productSlice.reducer;
