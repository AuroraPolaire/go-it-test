import React, { useRef } from "react";
import { selectFilteredUsers } from "../../redux/usersSelector";
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

  const cardsContainerRef = useRef(null);

  const filteredUsersList = useSelector(selectFilteredUsers);

  const { users, loadMore, isMore } = useLoadMore({
    initialPage: 1,
    usersList: filteredUsersList,
    itemsPerLoad: 3,
  });

  const handleClick = () => {
    loadMore();
    const container = cardsContainerRef.current;
    if (container) {
      container.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
        offsetTop: 50,
      });
    }
  };

  return (
    <>
      <Link to={backLink}>
        <StyledButton type="button">Back</StyledButton>
      </Link>
      <Filter>Filter tweets:</Filter>
      <MySelect />
      <CardsContainer ref={cardsContainerRef}>
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
