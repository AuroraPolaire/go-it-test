import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";
import { HomeContainer } from "./Home.styled";

const Home = () => {
  const iconStyle = { marginRight: "8px" };
  return (
    <HomeContainer>
      <h1>Welcome to TweetsNet !</h1>
      <ul>
        <li>
          <FcCheckmark style={iconStyle} />
          Search and follow interesting people.
        </li>
        <li>
          <FcCheckmark style={iconStyle} />
          Filter users.
        </li>
        <li>
          <FcCheckmark style={iconStyle} />
          More features to come!
        </li>
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
