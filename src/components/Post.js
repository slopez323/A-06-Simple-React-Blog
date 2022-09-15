const Post = ({ user, post, deletePost }) => {
  return (
    <div className="post">
      <div className="user-details">
        <img src={user.url} alt="profile picture" />
        <div>{user.username}</div>
      </div>
      <div className="post-body">{post.content}</div>
      <button onClick={() => deletePost(post.id)}>Delete Post</button>
    </div>
  );
};

export default Post;
