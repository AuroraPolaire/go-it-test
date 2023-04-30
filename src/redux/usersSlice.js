import { createSlice } from "@reduxjs/toolkit";
import { updateUser, getUsers, getUsersNumber } from "./usersOperations";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersNumber: 0,
    allUsers: [],
    following: [],
    isLoading: false,
    error: null,
    shouldScroll: false,
  },
  reducers: {
    scrollToBottom: (state) => {
      state.shouldScroll = true;
    },
    followUser(state, action) {
      state.following.push(action.payload);
      const index = state.allUsers.findIndex(
        (user) => user.id === action.payload
      );
      state.allUsers[index].followers += 1;
    },
    unfollowUser(state, { payload }) {
      const indexOfFolloing = state.following.findIndex(
        (item) => item === payload
      );
      state.following.splice(indexOfFolloing, 1);
      const index = state.allUsers.findIndex((user) => user.id === payload);
      state.allUsers[index].followers -= 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsersNumber.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsersNumber.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.usersNumber = payload;
      })
      .addCase(getUsersNumber.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.shouldScroll = false;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allUsers = [...state.allUsers, ...payload];
        if (state.shouldScroll) {
          //   // setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }
        // }, 100);
        state.shouldScroll = false;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      }),
});

const persistConfig = {
  key: "users",
  storage,
  whitelist: ["following"],
};

export const {
  scrollToBottom,
  followUser,
  unfollowUser,
  showAll,
  showFollowing,
  showNotFollowing,
} = usersSlice.actions;
export const usersReducer = persistReducer(persistConfig, usersSlice.reducer);
