import { createSlice } from "@reduxjs/toolkit";
const initialState={
    items:[]
}
const userSlice= createSlice({
name:'cart',
initialState,
reducers:{
  addtoCart:(state,action)=>{
    const itemExists = state.items.some((item) => item.id === action.payload.id);
  if (!itemExists) {
    state.items.push({...action.payload ,quantity:1});
  }else {
    // If the item already exists, increment its quantity
    const existingItem = state.items.find((item) => item.id === action.payload.id);
    existingItem.quantity += 1;
  }
  },
  incrementQuantity: (state, action) => {
    const item = state.items.find((item) => item.id === action.payload.id);
    if (item) {
      item.quantity += 1;
    }
  },
  decrement: (state, action) => {
    const item = state.items.find((item) => item.id === action.payload.id);
    if (item && item.quantity > 0) {
      item.quantity -= 1;
    }
  },
  remove: (state, action) => {
    const index = state.items.findIndex((item) => item.id === action.payload.id);
    if (index !== -1) {
      state.items.splice(index, 1);
    }
  }

},

})
export  const {addtoCart, incrementQuantity, decrement, remove}= userSlice.actions;
export default userSlice.reducer;
