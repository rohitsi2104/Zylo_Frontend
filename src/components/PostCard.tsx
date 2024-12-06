import React from "react";
import { Post } from "../types";
import { FaHeart } from "react-icons/fa";

interface PostCardProps {
  post: Post;
  onClick: () => void;
  onLike: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick, onLike }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-2xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        <img
          src={post.avatarUrl}
          alt={post.userName}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="font-semibold text-lg">{post.userName}</h2>
        </div>
      </div>
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt="Post"
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}
      <p className="text-gray-700 mb-4">{post.content.substring(0, 100)}...</p>
      <div className="flex items-center justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onLike();
          }}
          className="text-red-500 font-semibold flex items-center gap-2"
        >
          <FaHeart className="animate-pulse" />
          Like ({post.likes})
        </button>
        <button className="text-blue-500 font-semibold">
          Comments ({post.comments.length})
        </button>
      </div>
    </div>
  );
};

export default PostCard;