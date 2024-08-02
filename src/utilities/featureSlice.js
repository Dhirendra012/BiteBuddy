import { createSlice } from "@reduxjs/toolkit";

const featureSlice = createSlice({
    name: 'feature',
    initialState:{
        glowBtn: 'Home',
    },
    reducers:{
        setGlowBtn: (state , action) =>
        {  state.glowBtn = action.payload; }
    }
});

export const { setGlowBtn } = featureSlice.actions;

export default featureSlice.reducer;