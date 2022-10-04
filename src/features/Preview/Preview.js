import React from 'react'
import { API_URL } from '../RedditJSON/redditJson'
import './Preview.css'
import { Comment } from '../Comment/Comment'
import { Link } from 'react-router-dom'
import { GiPresent, GiCoalWagon } from 'react-icons/gi'

const Preview = (props) => {
    const { post } = props
    const subredditLink= `${API_URL}/${post.subreddit_name_prefixed}`

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
                <div classname='comments'>{post.comments.map((comment) => {
                   return <Comment comment={comment} key={comment.id} />
                })}</div>
            </div>
            <div className='post-footer'>
                <Link className="author" to={post.permalink}>
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