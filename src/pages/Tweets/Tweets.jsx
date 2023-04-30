import React, { useEffect, useState } from "react";
import {
  selectFollowingList,
  selectNumberOfUsers,
  selectUsers,
} from "../../redux/usersSelector";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../../components/UserCard/UserCard";
import { getUsers } from "../../redux/usersOperations";
import {
  ButtonContainer,
  CardsContainer,
  Filter,
  StyledButton,
} from "./Tweets.styled";
import { Link, useLocation } from "react-router-dom";
import MySelect from "../../components/Select/Select";

const Tweets = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const backLink = location.state?.from ?? "/";

  const usersNumber = useSelector(selectNumberOfUsers);
  const amountOfPages = Math.ceil(usersNumber / 3);

  const usersList = useSelector(selectUsers);
  const following = useSelector(selectFollowingList);

  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(page);
  const [selectedOption, setSelectedOption] = useState("showAll");
  const [filteredUsers, setFilteredUsers] = useState(usersList ?? []);

  useEffect(() => {
    if (!usersList || usersList.length === 0) {
      dispatch(getUsers(page));
    }
  }, [page, dispatch, usersList]);

  useEffect(() => {
    setPrevPage(page);
  }, [page]);

  useEffect(() => {
    if (prevPage !== page) dispatch(getUsers(page));
  }, [page, prevPage, dispatch]);

  useEffect(() => {
    if (selectedOption === "showAll") setFilteredUsers(usersList);
    if (selectedOption === "follow")
      setFilteredUsers(
        usersList.filter((user) => {
          return !following.includes(user.id);
        })
      );
    if (selectedOption === "followings")
      setFilteredUsers(
        usersList.filter((user) => {
          return following.includes(user.id);
        })
      );
  }, [following, selectedOption, usersList]);

  const handleClick = () => {
    setPage(page + 1);
  };

  const blockLoadMore = () => {
    if (usersList.length === usersNumber) return true;
  };

  return (
    <>
      <Link to={backLink}>
        <StyledButton type="button">Back</StyledButton>
      </Link>
      <Filter>Filter tweets:</Filter>
      <MySelect
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <CardsContainer>
        {filteredUsers.map((userData) => (
          <UserCard key={userData.id} userData={userData} />
        ))}
      </CardsContainer>
      {page < amountOfPages && !blockLoadMore() && (
        <ButtonContainer>
          <StyledButton type="button" onClick={handleClick} kind="loadMore">
            Load more
          </StyledButton>
        </ButtonContainer>
      )}
    </>
  );
};

export default Tweets;
