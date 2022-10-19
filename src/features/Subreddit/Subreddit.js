import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchPosts, selectFilteredPosts } from "../RedditJSON/redditSlice"
import { GiPresent, GiCoalWagon } from "react-icons/gi"
import { Link } from "react-router-dom"
import { Comment } from "../Comment/Comment"
import { changeSubreddit } from "../RedditJSON/redditSlice"
import { changeActivePostId } from "../IndividualPost/IndividualPostSlice"

export const Subreddit = (props) => {
    const reddit = useSelector((state) => state.reddit)
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit
    const dispatch = useDispatch()
    const posts = useSelector(selectFilteredPosts)
    

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    }, [dispatch, selectedSubreddit])


    return (
        <div className='subreddit'>
            {posts.map(post => (
                <div key={post.id} className='post'>
                <div className='post-header'>
                    <h2>{post.title}</h2>
                </div>
                <div className='post-body'>
                    <div className='sub-auth'>
                        <p className="sub-name"><Link to='/subreddit' onClick={() => dispatch(changeSubreddit(`/${post.subreddit_name_prefixed}`))}>{post.subreddit_name_prefixed}</Link></p>
                    </div>
                    <p className='post-text'>{post.selftext}</p>
                    <img src={post.thumbnail} alt=""/>
                    <div className='comments'>{post.comments.map((comment) => {
                       return <Comment comment={comment} key={comment.id} />
                    })}</div>
                </div>
                <div className='post-footer'>
                    <Link className="author" to={"/individualPost"} onClick={() => dispatch(changeActivePostId(post.name))}>
                        by {post.author}
                    </Link>
                    <div className='votes'>
                        <div className='up-votes'>
                            <GiPresent/>
                            {post.ups} 
                        </div>  
                        <div className='down-votes'>
                            <GiCoalWagon/>
                            {post.downs}
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}