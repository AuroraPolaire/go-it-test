import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from "./Home.styled";

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to TweetsNet !</h1>
      <ul>
        <li>Search and follow interesting people.</li>
        <li>Filter users.</li>
        <li>More features to come!</li>
      </ul>
      <Link to="/tweets">
        <div className="button-box">
          <button type="button">See users</button>
        </div>
      </Link>
    </HomeContainer>
  );
};

export default Home;
