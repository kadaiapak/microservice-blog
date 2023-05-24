import React from "react";

export default ({comments}) => {
    const renderedComment = comments.map(comment => {
        let content;
        if(comment.status === 'approved') {
            content = comment.content;
        }
        if(comment.status === 'pending') {
            content = 'This comment is awaiting moderation';
        }
        if(comment.status === 'rejected') {
            content = 'this comment has been rejecting'
        }
        return <li key={comment.id}>{content}</li>
    } )

    return (
        <ul>
            {renderedComment}
        </ul>
    )
}