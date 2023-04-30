import axios from "axios";

axios.defaults.baseURL = "https://644969a9b88a78a8f0071802.mockapi.io";

export const fetchUserQauntity = async () => {
  const { data } = await axios.get(`/users`);
  return data;
};

export const fetchUsers = async (page) => {
  const { data } = await axios.get(`/users?page=${page}&limit=3`);
  return data;
};

export const updateUserApi = async (userData, id) => {
  const { data } = await axios.put(`/users/${id}`, userData);
  return data;
};
