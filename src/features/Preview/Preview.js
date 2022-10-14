import React from 'react'
import { API_URL } from '../RedditJSON/redditJson'
import './Preview.css'
import { Comment } from '../Comment/Comment'
import { Link } from 'react-router-dom'
import { GiPresent, GiCoalWagon } from 'react-icons/gi'
import { Route } from 'react-router-dom'
import Post from '../Post/Post'
import { useDispatch } from 'react-redux'
import { changeActivePostId } from '../IndividualPost/IndividualPostSlice'

const Preview = (props) => {
    const { post } = props
    const subredditLink= `${API_URL}/${post.subreddit_name_prefixed}`
    const dispatch = useDispatch()

    return (
        <div key={post.id} className='post'>
            <div className='post-header'>
                <h2>{post.title}</h2>
            </div>
            <div className='post-body'>
                <div className='sub-auth'>
                    <p className="sub-name"><a href={subredditLink}>{post.subreddit_name_prefixed}</a></p>
                </div>
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
    )
}

export default Preview