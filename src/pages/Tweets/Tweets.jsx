import React from "react";
import {
  selectFilteredUsers,
  selectSelectedOption,
} from "../../redux/usersSelector";
import { useSelector } from "react-redux";
import UserCard from "../../components/UserCard/UserCard";
import {
  ButtonContainer,
  CardsContainer,
  Filter,
  StyledButton,
} from "./Tweets.styled";
import { Link, useLocation } from "react-router-dom";
import MySelect from "../../components/Select/Select";
import { useLoadMore } from "../../hooks/useLoadMore";

const Tweets = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? "/";

  const filteredUsersList = useSelector(selectFilteredUsers);
  const selectedOption = useSelector(selectSelectedOption);

  const { users, loadMore, isMore } = useLoadMore({
    initialPage: 1,
    usersList: filteredUsersList,
    itemsPerLoad: 3,
  });

  const handleClick = () => {
    loadMore();
  };

  return (
    <>
      <Link to={backLink}>
        <StyledButton type="button">Back</StyledButton>
      </Link>
      <Filter>Filter tweets:</Filter>
      <MySelect />
      <CardsContainer>
        {users.map((userData) => (
          <UserCard key={userData.id} userData={userData} />
        ))}
      </CardsContainer>
      {isMore && (
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
