import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  // Use the environment variable for the API URL
  const API_URL = process.env.REACT_APP_API_URL;

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${API_URL}/api/posts` // Updated to use API_URL
      );
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    try {
      const config = {
        headers: {
          "x-auth-token": token,
        },
      };
      const res = await axios.post(
        `${API_URL}/api/posts`, // Updated to use API_URL
        { content },
        config
      );
      setPosts([res.data, ...posts]);
      setContent("");
    } catch (err) {
      console.error(
        "Error creating post:",
        err.response ? err.response.data : err.message
      );
    }
  };

  return (
    <div>
      <h1 className="page-title">Home Feed</h1>
      {token && (
        <div className="post-form">
          <form onSubmit={onSubmit}>
            <textarea
              name="content"
              cols="30"
              rows="5"
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="btn">
              Post
            </button>
          </form>
        </div>
      )}
      <div className="posts-container">
        {loading ? (
          <p className="info-text text-center">Loading feed...</p>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="post">
              {/* NEW WRAPPER FOR AUTHOR AND DATE */}
              <div className="post-meta">
                <p className="post-author">
                  <Link to={`/profile/${post.author._id}`}>
                    {post.author.name}
                  </Link>
                </p>
                <p className="post-date">
                  {new Date(post.createdAt).toLocaleString()}
                </p>
              </div>
              <p className="post-content">{post.content}</p>
            </div>
          ))
        ) : (
          <div className="text-center info-text">
            <p>No posts yet. Be the first to share!</p>
            {!token && (
              <p>
                {" "}
                <Link to="/login">Login</Link> or{" "}
                <Link to="/register">Register</Link> to create a post.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
