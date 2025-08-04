import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useParams();

  // Use the environment variable for the API URL
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        // Fetch user details
        const userRes = await axios.get(
          `${API_URL}/api/users/${userId}` // Updated to use API_URL
        );
        setUser(userRes.data);

        // Fetch user's posts
        const postsRes = await axios.get(
          `${API_URL}/api/posts/user/${userId}` // Updated to use API_URL
        );
        setPosts(postsRes.data);
      } catch (err) {
        console.error("Error fetching profile data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [userId]);

  if (loading) {
    return <div className="info-text text-center">Loading profile...</div>;
  }

  if (!user) {
    return <div className="info-text text-center">Could not find user.</div>;
  }

  return (
    <div>
      <div className="profile-header">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.bio || "This user has not provided a bio."}</p>
      </div>

      <h3 className="page-title">Posts by {user.name}</h3>
      <div className="posts-container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="post">
              <p className="post-date">
                {new Date(post.createdAt).toLocaleString()}
              </p>
              <p className="post-content">{post.content}</p>
            </div>
          ))
        ) : (
          <p className="info-text">This user has not made any posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
