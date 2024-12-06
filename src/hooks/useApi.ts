import axios, { AxiosRequestConfig, Method } from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useUser } from "../store/UserContext";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const navigate = useNavigate();
  const { logout } = useUser(); // Access the logout function from UserContext

  const authToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const request = async (
    method: Method,
    url: string,
    data: any = null,
    config: AxiosRequestConfig = {},
    useAuth: boolean = false
  ) => {
    setLoading(true);
    setError(null);

    if (useAuth && authToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${authToken}`,
      };
    }

    try {
      let response;
      if (method.toLowerCase() === "get") {
        response = await api.get(url, config);
      } else if (method.toLowerCase() === "delete") {
        response = await api.delete(url, config);
      } else {
        response = await api.request({ method, url, data, ...config });
      }

      return { data: response.data, error: null };
    } catch (err: any) {
      if (err.response && err.response.status === 401 && useAuth && refreshToken) {
        try {
          const refreshResponse = await api.post("/refresh/", { refresh: refreshToken });
          const newAccessToken = refreshResponse.data.access;
          localStorage.setItem("accessToken", newAccessToken);

          // Retry the original request with the new token
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${newAccessToken}`,
          };
          const retryResponse = await api.request({ method, url, data, ...config });
          return { data: retryResponse.data, error: null };
        } catch (refreshError: any) {
          logout();
        }
      } else if (err.response) {
        setError(err.response.data.message || "Server error");
      } else if (err.request) {
        setError("No response from server");
      } else {
        setError("Request error");
      }
      return { data: null, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
}