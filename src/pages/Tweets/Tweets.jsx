import React, { useEffect, useState } from "react";
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

import { FiArrowLeftCircle } from "react-icons/fi";

const Tweets = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? "/";

  const [scrollTimeoutId, setScrollTimeoutId] = useState(null);

  const filteredUsersList = useSelector(selectFilteredUsers);

  const { users, loadMore, isMore } = useLoadMore({
    initialPage: 1,
    usersList: filteredUsersList,
    itemsPerLoad: 3,
  });

  useEffect(() => {
    return () => {
      clearTimeout(scrollTimeoutId);
    };
  }, [scrollTimeoutId]);

  const handleClick = () => {
    loadMore();

    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);

    setScrollTimeoutId(scrollTimeout);
  };

  return (
    <>
      <Link to={backLink}>
        <StyledButton type="button">
          <FiArrowLeftCircle className="back-icon" />
          Back
        </StyledButton>
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
