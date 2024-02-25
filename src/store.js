import { configureStore } from "@reduxjs/toolkit";
import  paginationReducer  from "./common/Pagination/paginationSlice";


const store = configureStore({
    reducer: {
        pagination: paginationReducer,
    },
});

export default store;