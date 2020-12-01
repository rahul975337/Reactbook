import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./Reels/StoryReel";
function Feed() {
  return (
    <div className="feed">
      {/* S T O R Y    R E E L */}
      <StoryReel />
      {/* M E S S A G E    S E N D E R  or ADD POST*/}
      <MessageSender />
      {/* P O S T */}
      <Post />
    </div>
  );
}

export default Feed;
