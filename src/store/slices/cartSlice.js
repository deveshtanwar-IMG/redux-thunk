import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        items:[]
    },
    reducers:{
        addtoCart(state,action){
            state.items.push(action.payload)
        },
        remove(state,action){},
    }
})

export const {addtoCart, remove} = cartSlice.actions; // export actions
export default cartSlice.reducer; // export reducer