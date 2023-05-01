import styled from "styled-components";

export const Filter = styled.h2`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 20px;
    padding: 0px 20px 15px;
  }

  @media screen and (min-width: 1280px) {
    padding: 5px 20px 20px;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  margin: 20px 0 20px;
  padding: 10px 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 0px;
  transition: background-color var(--transition-dur-and-func);

  :hover {
    background-color: #ffe066;
    cursor: pointer;
  }

  & .back-icon {
    margin-right: 8px;
    color: black;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
`;
