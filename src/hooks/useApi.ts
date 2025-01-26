import axios, { AxiosRequestConfig, Method } from "axios";
import { useState } from "react";
import { useUser } from "../store/UserContext";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { logout } = useUser();

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
      const response = await api.request({
        method,
        url,
        data,
        ...config,
      });
      return { data: response.data, error: null };
    } catch (err: any) {
      if (err.response?.status === 401 && useAuth && refreshToken) {
        try {
          const refreshResponse = await api.post("/refresh/", { refresh: refreshToken });
          const newAccessToken = refreshResponse.data.access;
          localStorage.setItem("accessToken", newAccessToken);

          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${newAccessToken}`,
          };

          const retryResponse = await api.request({
            method,
            url,
            data,
            ...config,
          });
          return { data: retryResponse.data, error: null };
        } catch {
          logout();
        }
      }

      if (err.response) {
        setError(err.response.data.detail || "An error occurred");
        return { data: null, error: err.response.data.detail || "An error occurred" };
      }

      setError(err.request ? "No response from server" : "Request error");
      return { data: null, error: err.request ? "No response from server" : "Request error" };
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
}