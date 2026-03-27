import { createSlice } from "@reduxjs/toolkit";


const initalState = {
    page: "main"
}


const pageSlice = createSlice(
    {
        initialState: initalState,
        name: "page",
        reducers: {
            setPage: (state, action) => {
                state.page = action.payload;
            }
        }
    }
)


export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;