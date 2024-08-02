import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import featurReducer from "./featureSlice";

const appStore = configureStore({
    reducer : {
        cart : cartReducer,
        feature: featurReducer,
    }
});

export default appStore;