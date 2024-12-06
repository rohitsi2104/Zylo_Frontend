export interface User {
  id: string;
  name: string;
  phone: string;
  profileImage?: string;
}

export interface UserContextProps {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User, tokens: { access: string; refresh: string }) => void;
  logout: () => void;
}