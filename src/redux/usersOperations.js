import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers, updateUserApi } from "../services/usersApi";

export const getUsers = createAsyncThunk("fetch/users", async (_, thunkAPI) => {
  try {
    const users = await fetchUsers();
    return users;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk(
  "follow/user",
  async ({ userData, id }, thunkAPI) => {
    try {
      const user = await updateUserApi(userData, id);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
