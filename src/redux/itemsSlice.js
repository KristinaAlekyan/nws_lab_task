import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [],
};

export const fetchCategory = () => async (dispatch) => {
    await fetch('https://api.thecatapi.com/v1/categories')
        .then((response) => response.json())
        .then((res) => {
            dispatch(setCategory(res))
        });
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