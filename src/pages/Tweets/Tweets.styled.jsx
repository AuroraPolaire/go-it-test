import styled from "styled-components";

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const StyledButton = styled.button`
  margin: 30px 0 20px;
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
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
`;
