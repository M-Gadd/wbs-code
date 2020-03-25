import api from "../api";
import { useState, useEffect } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState(Array);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await api.getPosts();
      setPosts(posts);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return { posts, isLoading };
};
