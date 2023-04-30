import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = (state) => state.users.allUsers;
export const selectFollowingList = (state) => state.users.following;
export const selectNumberOfUsers = (state) => state.users.usersNumber;
export const selectLoading = (state) => state.users.isLoading;
export const selectSelectedOption = (state) => state.users.selectedOption;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFollowingList, selectSelectedOption],
  (allUsers, following, selectedOption) => {
    if (selectedOption === "showAll") return allUsers;
    if (selectedOption === "follow")
      return allUsers.filter((user) => {
        return !following.includes(user.id);
      });
    if (selectedOption === "followings")
      return allUsers.filter((user) => {
        return following.includes(user.id);
      });
  }
);
