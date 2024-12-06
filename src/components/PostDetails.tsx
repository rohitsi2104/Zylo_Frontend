import React, { useState } from 'react';
import { Post } from '../types';

interface PostDetailsProps {
  post: Post;
  onClose: () => void;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post, onClose }) => {
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (newComment.trim() === '') {
      alert('Please enter a comment.');
      return;
    }
    // Add comment functionality here
    console.log('Adding comment:', newComment);
    setNewComment('');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative mt-16">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">Close</button>
      <div className="flex items-center mb-4">
        <img src={post.avatarUrl} alt={post.userName} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="font-bold text-2xl mb-2">{post.userName}</h2>
          <p className="text-gray-700 mb-4">{post.content}</p>
        </div>
      </div>
      {post.imageUrl && (
        <img src={post.imageUrl} alt="Post Detail" className="w-full h-64 object-cover rounded mb-4" />
      )}
      <div className="comments-section max-h-96 overflow-y-auto">
        <h3 className="font-semibold text-xl mb-4">Comments</h3>
        {post.comments.map((comment) => (
          <div key={comment.id} className="mb-4 border-b pb-4">
            <p className="font-semibold">{comment.userName}</p>
            <p className="text-gray-600">{comment.content}</p>
          </div>
        ))}
        <div className="mt-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border rounded mb-2 bg-gray-800 text-white"
            placeholder="Add a comment..."
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;