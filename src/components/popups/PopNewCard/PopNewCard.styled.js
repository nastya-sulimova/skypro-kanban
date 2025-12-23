import styled from "styled-components";

export const PopNewCardStyled = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  &:target {
    display: block;
  }
`;

export const PopNewCardValidError = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 400px;
`;

export const ValidErrorTitle = styled.h4`
  margin-bottom: 15px;
  color: #d32f2f;
`;

export const ValidErrorList = styled.ul`
  margin-bottom: 20px;
  padding-left: 20px;
`;

export const ValidErrorItem = styled.li`
  margin-bottom: 5px;
  color: #555;
`;

export const ValidButtonBlock = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const ValidButton = styled.button`
  padding: 8px 20px;
  background: #565eef;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
