import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import dishSlice from "../features/dishSlice";

// create store
export const store = configureStore({
    reducer:{
        allCart:cartSlice,
        allDish: dishSlice
    }
})