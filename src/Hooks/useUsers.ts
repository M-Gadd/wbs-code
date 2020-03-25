import api from "../api";
import { useState, useEffect } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState(Array);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const users = await api.getUsers();
      setUsers(users);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return { users, isLoading };
};
