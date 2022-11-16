import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        changeActiveSearch: (state, action) => state = action.payload
    }
})

export const { changeActiveSearch } = SearchSlice.actions
export default SearchSlice.reducer