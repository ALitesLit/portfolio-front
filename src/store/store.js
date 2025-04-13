import { configureStore } from "@reduxjs/toolkit";

import pageReducer from "./slices/pageSlice";


const store = configureStore({
    reducer: {
        page: pageReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
})


export default store;