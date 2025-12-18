import styled from "styled-components";
import { Link } from "react-router-dom";

export const SNotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(148, 166, 190, 1);
  font-family: Roboto;
  font-size: 30px;
  font-weight: 250;
  line-height: 100%;
  letter-spacing: 0%;
  text-transform: uppercase;
  width: 100vw;
  height: 100vh;
`;

export const NotFoundPageLink = styled(Link)`
  color: white;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: 100%;
  text-transform: uppercase;
  text-align: center;
`;

export const SNotFoundPageButton = styled.button`
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 4px;
  background: rgb(100 107 237);
  border: none;
  padding: 10px;
`;
