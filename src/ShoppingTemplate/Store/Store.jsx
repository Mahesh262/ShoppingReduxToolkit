import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './UserSlice'
 const rootReducer = {
    cart:cartReducer,
 };
 const Store = configureStore({
    reducer :rootReducer ,
 })
 export default Store