import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";




export const RedditSlice = createSlice({
    name: 'reddit',
    initialState: {
        posts: [],
        error: false,
        isLoading: false,
        searchTerm: '',
        selectedSubreddit: '/popular'
    } ,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload
        },
        startGetPosts(state) {
            state.isloading = true
            state.error = false
        },
        getPostsSuccess(state, action) {
            state.isLoading = false
            state.posts = action.payload
        },
        getPostsFailed(state) {
            state.isLoading = false
            state.error = true
        },
        setSearchTerm(state, action){
            state.searchTerm = action.payload
        }

    }
})