import { getPostComments } from "../RedditJSON/redditJson"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import './Post.css'
import { GiConsoleController } from "react-icons/gi"


const Post = (props) => {
    const { post, onToggleComments } = props
    const dispatch = useDispatch

    const getPost = getPostComments(post.permalink)

    console.log(getPost)

    return (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.selftext}</p>
        </article>
    )
    
}

export default Post