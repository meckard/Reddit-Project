import GetSubredditPosts from "../RedditJSON/redditJson";
import { fetchPosts, selectFilteredPosts, fetchComments } from "../RedditJSON/redditSlice";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import Preview from "../Preview/Preview";
import Post from "../Post/Post";

const Home = () => {
    const reddit = useSelector((state) => state.reddit)
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit
    const posts = useSelector(selectFilteredPosts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    }, [dispatch, selectedSubreddit])

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
          dispatch(fetchComments(index, permalink));
        };
    
        return getComments;
      };

    return (
        <>
        <div>
            {posts.map((post, index) => (
               <Preview 
               key={post.id}
               post={post}
               index={index}
               onToggleComments={onToggleComments(index)}
               />
            ))}
        </div>
        </>
    )
}

export default Home