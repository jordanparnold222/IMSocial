import React, { useState } from "react";
import "./comment.css";

const CommentButton = ({ isExpanded, onCommentClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    onCommentClick();
    setIsLiked(!isLiked);
    console.log(isLiked);
  };

  return (
    <div
      className={isExpanded ? "expanded-comment-btn" : "comment-btn"}
      onClick={handleClick}
    >
      <div className="content">
        <span className="comment"></span>
        <div className="comment-text">Comments</div>
        <span className={`numb ${isLiked ? "comment-active" : ""}`}></span>
      </div>
    </div>
  );
};

export default CommentButton;
