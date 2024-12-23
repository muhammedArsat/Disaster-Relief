import React from "react";
import "./FeedCard.css";
const FeedCard = ({ content, image }) => {
  return (
    <div className="feed_card">
      <div className="left_side">
        <h3>{content}</h3>
      </div>
      <div className="right_side">
        <img src={image} alt="feed card first image" />
      </div>
    </div>
  );
};

export default FeedCard;
