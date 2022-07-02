import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [],
};


export const itemsSlice = createSlice({
    name: "itemsSlice ",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload; 
        }
    }
});

export const {
    setCategory
} = itemsSlice.actions;

export const categorySelector = state => state.itemsSlice.category;

export default itemsSlice.reducer;