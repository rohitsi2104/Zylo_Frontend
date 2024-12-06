import { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { User, UserContextProps } from "../types";

// Create UserContext with default values
const UserContext = createContext<UserContextProps>({
  user: null,
  isLoggedIn: false,
  login: () => {
    throw new Error("UserContext not initialized. Please wrap your component with UserProvider.");
  },
  logout: () => {
    throw new Error("UserContext not initialized. Please wrap your component with UserProvider.");
  },
});

// UserProvider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedAccessToken = localStorage.getItem("accessToken");
    const savedRefreshToken = localStorage.getItem("refreshToken");
    if (savedUser && savedAccessToken && savedRefreshToken) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData: User, tokens: { access: string; refresh: string }) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("accessToken", tokens.access);
    localStorage.setItem("refreshToken", tokens.refresh);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for accessing UserContext
export const useUser = (): UserContextProps => {
  return useContext(UserContext);
};

export default UserContext;