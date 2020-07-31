import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
const Posts = (props) => {
  const [state, setState] = useState({});
  const [message, setMessage] = useState(null);

  // fetch posts
  useEffect(() => {
    const loadPosts = async () => {
      const response = await axios.get("/api/posts");
      const { data } = await response.data;
      console.log("res", data);
      setState(data);
    };

    loadPosts();
  }, []);

  // Add Posts
  const addPost = () => {
    props.history.push("/posts/add");
  };

  // Delete post
  const deletePost = async (id) => {
    const response = await axios.delete(`/api/posts/${id}`);
    const { data, message } = await response;
    console.log(response);
    setMessage(message);
  };

  return (
    <div className="posts">
      <div className="d-flex justify-content-between align-items-center">
        <h3>Posts</h3>
        <button className="btn btn-sm btn-info" onClick={addPost}>
          Add Post
        </button>
      </div>
      <hr />
      {message && (
        <div className="row">
          <div className="col-sm-12">{message}</div>
        </div>
      )}
      <div className="row">
        {Object.values(state).map((post) => (
          <Post key={post.id} deleted={() => deletePost(post.id)} data={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
