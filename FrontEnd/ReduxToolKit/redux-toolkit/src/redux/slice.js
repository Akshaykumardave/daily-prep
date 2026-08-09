import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

// SLICE name
const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state) => { // action
            state.value += 1;
        }
    }
});

export const {addItem} = addToCart.actions;
export default addToCart.reducer;