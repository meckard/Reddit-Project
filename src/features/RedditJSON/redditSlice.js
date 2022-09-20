import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import GetSubredditPosts from "./redditJson";




export const redditSlice = createSlice({
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
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload
            state.searchTerm = ''
        },
        toggleShowingComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload]
            .showingComments
        },
        startGetComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload]
            if (!state.posts[action.payload.showingComments]) {
                return
            }
            state.posts[action.payload].loadingComments = true
            state.posts[action.payload].error = false
        },
        getCommentsSuccess(state, action) {
            state.posts[action.payload.index].loadingComments = false
            state.posts[action.payload.index].comments = action.payload.comments
        },
        getCommentsFailed(state,action) {
            state.posts[action.payload].loadingComments = false  
            state.posts[action.payload].error = true      
        }

    }
})

export const fetchPosts = (subreddit) => async (dispatch) => {
    try{
        dispatch(startGetPosts())
        let posts = await GetSubredditPosts(subreddit)

        const postsWithMetaData = posts.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false
        }))
        dispatch(getPostsSuccess(postsWithMetaData))
    } catch (error) {
        dispatch(getPostsFailed())
    }
}

export const fetchComments = (index, permalink) => async (dispatch) => {
    try {
        dispatch(startGetComments(index))
        const comments = await getPostComments(permalink)
        dispatch(getCommentsSuccess({ index, comments }))
    } catch (error) {
        dispatch(getCommentsFailed)
    }
}

const selectPosts = (state) => state.reddit.posts
const selectSerchTerm = (state) => state.reddit.searchTerm
export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddit

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSelectedSubreddit],
    (posts, searchTerm) => {
        if (searchTerm !== '') {
            return posts.filter((post) => posts.title.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        return posts
    }
)

export const {
    setPosts,
    getPostsFailed,
    getPostsSuccess,
    startGetPosts,
    setSearchTerm,
    setSelectedSubreddit,
    toggleShowingComments,
    getCommentsFailed,
    getCommentsSuccess,
    startGetComments
} = redditSlice.actions

export default redditSlice.reducer