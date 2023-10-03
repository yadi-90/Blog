import React, { useState, useEffect } from "react";
import Form from "./Form"; // Assuming Form component is in the same directory

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);

  const loadPosts = () => {
    fetch("http://localhost:5173/blogposts")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const updatePost = (savedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === savedPost.id ? savedPost : post))
    );
    setEditingPostId(null);
  };

  const onEdit = (post) => {
    const editingId = post.id;
    setEditingPostId(editingId);
  };

  const onDelete = (postToDelete) => {
    // Placeholder for onDelete function
    // You need to implement the logic to delete the post
    // For example, you can send a DELETE request to the server
    // and then update the state to remove the deleted post.
    console.log("Delete post with id:", postToDelete.id);
  };

  return (
    <div className="cards">
      {posts.map((post) => {
        return (
          <div key={post.id} className="card">
            {post.id === editingPostId ? (
              <Form initialPost={post} savedPost={updatePost} />
            ) : (
              <>
                <div>
                  {post.date} <img src={post.image} alt={post.alt} />
                </div>
                <div className="container">{post.title} {post.content}</div>
                <button type="button" onClick={() => onDelete(post)}>
                  Delete
                </button>
                <button type="button" onClick={() => onEdit(post)}>
                  Edit
                </button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BlogPosts;
