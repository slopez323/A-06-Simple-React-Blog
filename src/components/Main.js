import { useState } from "react";
import Post from "./Post";

const Main = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState();

  const addPost = () => {
    const postsCopy = [...posts];
    postsCopy.sort((a, b) => b.id - a.id);
    const id = postsCopy.length > 0 ? postsCopy[0].id + 1 : 1;
    const post = { content: newPost, id };
    setNewPost("");
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    const postsCopy = [...posts];
    const index = postsCopy.findIndex((post) => post.id === id);
    postsCopy.splice(index, 1);
    setPosts(postsCopy);
  };

  return (
    <div className="main">
      <h2>Welcome {user.username}!</h2>
      <div className="new-post">
        <textarea
          placeholder="ENTER YOUR POST HERE"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={addPost}>Post</button>
      </div>
      <div className="posts">
        {posts.map((post) => {
          return (
            <Post
              user={user}
              post={post}
              deletePost={deletePost}
              key={post.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
