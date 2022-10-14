import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import Post from "../Post/Post"
import { fetchComments, fetchPosts, setSearchTerm, selectFilteredPosts } from "../RedditJSON/redditSlice"

const Pages = () => {
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
            {posts.map((post, index) => (
               <Post 
               key={post.id}
               post={post}
               index={index}
               onToggleComments={onToggleComments(index)}
               />
            ))}
        </>
    )

    }

    export default Pages