import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김씨",
        comment: "하이"
    },
    {
        name: "이씨",
        comment: "안녕"
    },
    {
        name: "박씨",
        comment: "헬로"
    }
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;