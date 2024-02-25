import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        page: 1,
    },
    reducers: {
        incrementPage: (state) => {
            state.page += 1;
        },
        decrementPage: (state) => {
            state.page -= 1;
        },
        goToPage: (state, action) => {
            state.page = action.payload;
        },
        goToTheFirstPage: (state) => {
            state.page = 1;
        },
        goToTheLastPage: (state, action) => {
            state.page = action.payload;
        },
    },
});

export const {
    incrementPage,
    decrementPage,
    goToPage,
    goToTheFirstPage,
    goToTheLastPage
} = paginationSlice.actions;

export default paginationSlice.reducer;