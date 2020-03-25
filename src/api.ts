import axios from "axios";

export default {
  async getUsers() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return response.data;
  },

  async getPosts() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return response.data;
  },
};
