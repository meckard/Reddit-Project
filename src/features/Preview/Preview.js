import React from 'react'
import { API_URL } from '../RedditJSON/redditJson'
import './Preview.css'

const Preview = (props) => {
    const { post, index } = props
    const subredditLink= `${API_URL}/${post.subreddit_name_prefixed}`
    let gridColumn = index % 4

    return (
        <div key={post.id} className='post'>
            <div className='post-header'>
                <h2>{post.title}</h2>
            </div>
            <div className='post-body'>
                <div className='sub-auth'>
                    <p className="sub-name"><a href={subredditLink}>{post.subreddit_name_prefixed}</a></p>
                    <a className="author" href={post.url}>
                    by {post.author}
                    </a>
                </div>
                <img src={post.thumbnail} alt=""/>
            </div>
        </div>
    )
}

export default Preview