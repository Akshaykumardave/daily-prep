import { configureStore } from "@reduxjs/toolkit"; // Import the configureStore function from Redux Toolkit
import cartReducer from "./slice" // Import the cart reducer from the slice file

// Create the Redux store using configureStore
const store = configureStore({
    reducer: {
        cart: cartReducer // Connect the cart reducer to the cart slice in the store
    }
});

// Export the store so it can be used in the app
export default store;