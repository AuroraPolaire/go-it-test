import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUserQauntity,
  fetchUsers,
  updateUserApi,
} from "../services/usersApi";
import { scrollToBottom } from "./usersSlice";

export const getUsersNumber = createAsyncThunk(
  "fetch/numberOfUsers",
  async (thunkAPI) => {
    try {
      const users = await fetchUserQauntity();
      return users.length;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUsers = createAsyncThunk(
  "fetch/users",
  async (page, { dispatch, rejectWithValue }) => {
    try {
      const users = await fetchUsers(page);
      const isUserAtBottom =
        window.innerHeight + window.pageYOffset >= document.body.scrollHeight;
      dispatch(scrollToBottom(isUserAtBottom));
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
