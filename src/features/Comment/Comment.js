import React from "react";

export const Comment = (props) => {
    const { comment } = props

    return (
        <div className='comment'>
            <div classname='comment-header'>
                <h3>{comment.author}</h3>
            </div>
            <div className='comment-body'>
                {comment.body}
            </div>
        </div>
    )
}