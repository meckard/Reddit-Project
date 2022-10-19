import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilteredPosts, fetchPosts } from '../RedditJSON/redditSlice'
import { Comment } from '../Comment/Comment'
import { GiPresent, GiCoalWagon } from 'react-icons/gi'
import { API_URL } from '../RedditJSON/redditJson'
import './individualPost.css'


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
                    <div className='top-portion'>
                        <div className='post-header'>
                            <h2>{post.title}</h2>
                        </div>
                        <div className='post-body'>
                            <div className='sub-auth'>
                                <p className="sub-name">{post.subreddit_name_prefixed}</p>
                            </div>
                            <img src={post.thumbnail} alt=""/>
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
                    </div>
                    <div className='post-comments'>
                        <div className='Comments'>
                            <p className='comment-numbers'>{post.num_comments} comments</p>
                            <Comment
                            post={post}
                             />
                        </div>
                    </div>
                </section>
            ))}
        </section>
    )
}

export {IndividualPost as default}