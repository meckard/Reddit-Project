import GetSubredditPosts from "../RedditJSON/redditJson";
import { fetchPosts, selectFilteredPosts } from "../RedditJSON/redditSlice";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import Preview from "../Preview/Preview";

const Home = () => {
    const reddit = useSelector((state) => state.reddit)
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit
    const posts = useSelector(selectFilteredPosts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    }, [dispatch, selectedSubreddit])

    return (
        <>
        <div>
            {posts.map((post, index) => (
               <Preview 
               key={post.id}
               post={post}
               index={index}
               />
            ))}
        </div>
        </>
    )
}

export default Home