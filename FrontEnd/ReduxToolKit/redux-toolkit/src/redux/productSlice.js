import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; // Import the helper that creates an async Redux action creator.

export const fetchProducts = createAsyncThunk('products', async () => { // Create a thunk named 'products' that fetches product data asynchronously.
    const response = await fetch('https://dummyjson.com/products'); // Call the dummy API to get all products.
    const jsonResponse = await response.json(); // Convert the HTTP response into a JavaScript object.
    return jsonResponse.products; // Return only the products array from the response payload.
});

const initialState = { // Define the starting state for the product slice.
    items: [], // Store the list of products; empty by default.
    status: undefined, // Track the current status of the async request; initially undefined.
    error: null // Store any error message if the request fails; initially null.
};

const productSlice = createSlice({ // Create the Redux slice object.
    name: 'productSlice', // Give the slice a unique name in the Redux store.
    initialState, // Use the initial state defined above.
    extraReducers: (builder) => { // Add extra reducer cases for async thunk lifecycle actions.
        builder.addCase(fetchProducts.fulfilled, (state, action) => { // When the async fetch succeeds, update the state.
            state.status = 'succeeded..!!'; // Set the status to a success string.
            state.items = action.payload; // Store the products from the action payload in items.
        });
    }
});

const productReducer = productSlice.reducer;
export default productReducer;