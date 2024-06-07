import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name : "이주호",
    comment : "dddddddddd",
  },
  {
    name : "김경민",
    comment : "dddㄴㅇㄴㅇddddddd",
  },
  {
    name : "기아성",
    comment : "111111111111111dddddddddd",
  }
]


function CommentList(props) {
  return(
    <div>
      {comments.forEach((comment) => {
        return(
          <Comment name = {comment.name} comment = {comment.comment}/>
        )
      })}
    </div>
  );
}

export default CommentList;