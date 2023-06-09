import React from "react";
import { followUser, unfollowUser } from "../../redux/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFollowingList } from "../../redux/usersSelector";
import { updateUser } from "../../redux/usersOperations";
import { CardContainer } from "./UserCard.styled";
import SVG from "../../images/sprite.svg";

import Loader from "../Loader/Loader";
import { useState } from "react";

const UserCard = ({ userData }) => {
  const dispatch = useDispatch();
  const { user, tweets, followers, avatar, id } = userData;
  const [isLoading, setIsLoading] = useState(false);

  const followedUser = { user, tweets, followers: followers + 1, avatar, id };
  const unfollowedUser = { user, tweets, followers: followers - 1, avatar, id };

  const followingList = useSelector(selectFollowingList);

  const isFollowing = (id) => {
    return followingList.includes(id);
  };

  const handleClick = (e) => {
    setIsLoading(true);
    if (isFollowing(id)) {
      dispatch(unfollowUser(id));
      dispatch(updateUser({ userData: unfollowedUser, id })).then(() =>
        setIsLoading(false)
      );
    } else {
      dispatch(followUser(id));
      dispatch(updateUser({ userData: followedUser, id })).then(() =>
        setIsLoading(false)
      );
    }
  };

  return (
    <div>
      <CardContainer>
        <svg>
          <use href={`${SVG}#icon-Logo`}></use>
        </svg>

        <div className="hover-tooltip">
          <div className="pseudo-elements">
            <img src={avatar} alt={user} />
            <span className="tooltip">{user}</span>
          </div>
        </div>
        <ul>
          <li>{tweets} tweets</li>
          <li>{new Intl.NumberFormat("en-US").format(followers)} followers</li>
        </ul>

        <button
          type="button"
          className={`${isFollowing(id) ? "following" : "not-following"} ${
            isLoading ? "invisible" : "visible"
          }`}
          onClick={handleClick}
        >
          {isLoading ? <Loader /> : isFollowing(id) ? "Following" : "Follow"}
        </button>
      </CardContainer>
    </div>
  );
};

export default UserCard;
