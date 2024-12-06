import React, { useState, useEffect } from "react";
import { Post, Comment } from "../types";
import { PostCard, PostDetails } from "../components";
import { useApi } from "../hooks/useApi";
import { FaPlus } from "react-icons/fa";

const CommunityPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [newPostContent, setNewPostContent] = useState<string>("");
  const [newPostImage, setNewPostImage] = useState<File | null>(null);
  const { request } = useApi();

  useEffect(() => {
    // Mock data fetching simulation - replace with actual API call
    const mockPosts: Post[] = [
      {
        id: "1",
        userId: "u1",
        userName: "John Doe",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
        content:
          "This dance class has been amazing, really enjoying the vibe here!",
        likes: 23,
        comments: [
          {
            id: "c1",
            postId: "1",
            userId: "u2",
            userName: "Jane Smith",
            content: "I agree! The instructor is great!",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1729608462362-21193b628e56?fit=crop&w=500&h=300",
      },
      {
        id: "2",
        userId: "u3",
        userName: "Alice Brown",
        avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
        content: "Loved the community vibe here, everyone is so supportive!",
        likes: 15,
        comments: [
          {
            id: "c2",
            postId: "2",
            userId: "u4",
            userName: "Bob Johnson",
            content: "Absolutely! It's so motivating!",
          },
          {
            id: "c2",
            postId: "2",
            userId: "u4",
            userName: "Bob Johnson",
            content: "Absolutely! It's so motivating!",
          },
          {
            id: "c2",
            postId: "2",
            userId: "u4",
            userName: "Bob Johnson",
            content: "Absolutely! It's so motivating!",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?fit=crop&w=500&h=300",
      },
    ];
    setPosts(mockPosts);
  }, []);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleClosePostDetails = () => {
    setSelectedPost(null);
  };

  const handleAddPost = async () => {
    if (!isLoggedIn) {
      alert("Please log in to add a post.");
      return;
    }
    if (!newPostContent.trim()) {
      alert("Post content cannot be empty.");
      return;
    }

    const newPost: Post = {
      id: (posts.length + 1).toString(),
      userId: "currentUser", // This should be replaced by the logged-in user ID
      userName: "Current User", // Replace with the logged-in user's name
      avatarUrl: "https://randomuser.me/api/portraits/lego/1.jpg", // Replace with logged-in user's avatar
      content: newPostContent,
      likes: 0,
      comments: [],
      imageUrl: newPostImage ? URL.createObjectURL(newPostImage) : "",
    };

    // Update state locally
    setPosts([newPost, ...posts]);
    setNewPostContent("");
    setNewPostImage(null);

    // API Call
    const response = await request("post", "/posts", {
      content: newPostContent,
    });
    if (response.error) {
      console.error("Failed to add post:", response.error);
    }
  };

  const handleLikePost = async (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );

    // API Call to like post
    await request("post", `/posts/${postId}/like`);
  };

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleClosePostDetails();
    }
  };

  useEffect(() => {
    if (selectedPost) {
      window.addEventListener("keydown", handleEscape);
    } else {
      window.removeEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedPost]);

  return (
    <div className="community-page min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Explore Posts</h2>
        <button
          onClick={handleAddPost}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition flex items-center gap-2"
        >
          <FaPlus />
          {isLoggedIn ? "Add New Post" : "Log in to Add Post"}
        </button>
      </div>
      <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Create a New Post</h3>
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          className="w-full p-3 border rounded mb-4 text-white"
          placeholder="What's on your mind?"
        />
        <input
          type="file"
          onChange={(e) =>
            setNewPostImage(e.target.files ? e.target.files[0] : null)
          }
          className="mb-4"
        />
        <button
          onClick={handleAddPost}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Post
        </button>
      </div>
      <div className="posts-feed grid gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onClick={() => handlePostClick(post)}
            onLike={() => handleLikePost(post.id)}
          />
        ))}
      </div>

      {selectedPost && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleClosePostDetails();
            }
          }}
        >
          <PostDetails post={selectedPost} onClose={handleClosePostDetails} />
        </div>
      )}
    </div>
  );
};

export default CommunityPage;
