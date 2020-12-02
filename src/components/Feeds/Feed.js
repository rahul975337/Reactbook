import React, { useState, useEffect } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./Reels/StoryReel";
import db from "../../firebase";
function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );

  }, []);
  return (
    <div className="feed">
      {/* S T O R Y    R E E L */}
      
      <StoryReel />
      {/* M E S S A G E    S E N D E R  or ADD POST*/}
      <MessageSender />
      {/* P O S T */}
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
