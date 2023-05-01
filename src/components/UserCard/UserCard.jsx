import React from "react";
import { followUser, unfollowUser } from "../../redux/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFollowingList } from "../../redux/usersSelector";
import { updateUser } from "../../redux/usersOperations";
import { CardContainer } from "./UserCard.styled";
import SVG from "../../images/sprite.svg";

const UserCard = ({ userData }) => {
  const { user, tweets, followers, avatar, id } = userData;

  const followedUser = { user, tweets, followers: followers + 1, avatar, id };
  const unfollowedUser = { user, tweets, followers: followers - 1, avatar, id };

  const dispatch = useDispatch();
  const followingList = useSelector(selectFollowingList);

  const isFollowing = (id) => {
    return followingList.includes(id);
  };

  const handleClick = (e) => {
    if (isFollowing(id)) {
      dispatch(unfollowUser(id));
      dispatch(updateUser({ userData: unfollowedUser, id }));
    } else {
      dispatch(followUser(id));
      dispatch(updateUser({ userData: followedUser, id }));
    }
  };

  return (
    <div>
      <CardContainer>
        <svg>
          <use href={`${SVG}#icon-Logo`}></use>
        </svg>

        <div class="hover-tooltip">
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
          className={isFollowing(id) ? "following" : "not-following"}
          onClick={handleClick}
        >
          {isFollowing(id) ? "Following" : "Follow"}
        </button>
      </CardContainer>
    </div>
  );
};

export default UserCard;
