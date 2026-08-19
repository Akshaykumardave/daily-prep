import { createSlice } from "@reduxjs/toolkit" // Import the createSlice helper from Redux Toolkit

// Define the starting state for the cart slice
const initialState = {
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] // Initial number of items in the cart
}

// Create a slice with the name 'cart'
const addToCart = createSlice({
    name: 'cart', // Name of the slice used in action types
    initialState, // Set the initial state for this slice
    reducers: {
        addItem: (state, action) => { // Define an action creator called addItem
            //state.value += 1; // Increase the cart value by 1
            state.items.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeItem: (state, action) => { 
            const cartData = state.items.filter(item => item.id !== action.payload.id)
            state.items = cartData;
            localStorage.setItem('cart', JSON.stringify(cartData));
        },
        removeAllItems: (state) => {
            state.items = [];
        }
    }
});

// Extract the addItem action creator from the slice actions
export const { addItem, removeItem, removeAllItems } = addToCart.actions;

// Export the reducer so it can be used in the store
const cartReducer = addToCart.reducer;
export default cartReducer;