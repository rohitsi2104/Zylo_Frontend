export interface Post {
  id: string;
  userId: string;
  userName: string;
  avatarUrl: string;
  content: string;
  likes: number;
  imageUrl?: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  userName: string;
  content: string;
}