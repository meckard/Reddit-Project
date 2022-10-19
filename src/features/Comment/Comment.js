import React, { useEffect, useState } from "react";
import { getPostComments } from "../RedditJSON/redditJson";
import './Comment.css'

export const Comment = (props) => {
    const {post} = props
    const [comments, setComments] = useState([])

    const dateCalculator = (created) => {
        const currentDate = Date.now();
        const postDate = new Date(created * 1000);
    
        const dateDifferenceInTime = currentDate - postDate;
    
        const dateDifferenceInMonths = dateDifferenceInTime / (1000 * 3600 * 24 * 30.4);
        const dateDifferenceInDays = dateDifferenceInTime / (1000 * 3600 * 24);
        const dateDifferenceInHours = dateDifferenceInTime / (1000 * 3600);
        const dateDifferenceInMinutes = dateDifferenceInTime / (1000 * 60);
    
        if (dateDifferenceInMonths > 12) {
            return "more than a year ago";
        } else if (dateDifferenceInMonths >= 1) {
            return Math.round(dateDifferenceInMonths) + " months ago";
        } else if (dateDifferenceInDays >= 1) {
            return Math.round(dateDifferenceInDays) + " days ago";
        } else if (dateDifferenceInHours >= 1) {
            return Math.round(dateDifferenceInHours) + " hours ago";
        } else if (dateDifferenceInMinutes >= 1) {
            return Math.round(dateDifferenceInMinutes) + " minutes ago";
        } else {
            return "less than a minute ago";
        }
    }


    useEffect(() => {
        getPostComments(post.permalink)
        .then(jsonComments => setComments(
            jsonComments.map( comment => (
                <div key={comment.id}>
                    <div className='comments'>
                        <div className='comment-author-date'>
                            <p className='comment-author'>{comment.author}</p>
                            <p className='comment-date'>{dateCalculator(comment.created_utc)}</p>
                        </div>
                        <p className='comment-body'>{comment.body}</p>
                        
                    </div>
                </div>
            ))
        ))
    })

    return (
        <div className='comment'>
           {comments}
        </div>
    )
}