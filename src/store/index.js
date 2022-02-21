import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import goodsReducer from './goodsSlice';

export default configureStore({
    reducer: {
        goods: goodsReducer,
        cart: cartReducer
    }
})