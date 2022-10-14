import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilteredPosts, fetchPosts } from '../RedditJSON/redditSlice'
import { Comment } from '../Comment/Comment'
import { GiPresent, GiCoalWagon } from 'react-icons/gi'
import { API_URL } from '../RedditJSON/redditJson'


const IndividualPost = () => {
    const reddit = useSelector((state) => state.reddit)
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit
    const dispatch = useDispatch()
    const posts = useSelector(selectFilteredPosts)
    

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    }, [dispatch, selectedSubreddit])

    const activePostId = useSelector(state => state.individualPost)

    const selectedPost = posts.filter(post => post.name === activePostId)
    console.log(activePostId)
    console.log(selectedPost)

    return (
        <section className='post'>
            {selectedPost.map(post => (
                <section key={post.id}>
                    <div className='post-header'>
                        <h2>{post.title}</h2>
                        <p>{post.subreddit_name_prefixed}</p>
                    </div>
                    <div className='post-body'>
                <div className='sub-auth'>
                    <p className="sub-name">{post.subreddit_name_prefixed}</p>
                </div>
                <img src={post.thumbnail} alt=""/>
                <div className='comments'>{post.comments.map((comment) => {
                   return <Comment comment={comment} key={comment.id} />
                })}</div>
            </div>
            <div className='post-footer'>
                <p>
                    by {post.author}
                </p>
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
                </section>
            ))}
        </section>
    )
}

export {IndividualPost as default}