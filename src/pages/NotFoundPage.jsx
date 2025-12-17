import styled from "styled-components";
import { Link } from "react-router-dom";

const SNotFoundPage = styled.div`
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

const NotFoundPageLink = styled(Link)`
  color: white;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: 100%;
  text-transform: uppercase;
  text-align: center;
`;

const NotFoundPage = () => {
  return (
    <>
      <button
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          borderRadius: "4px",
          background: "rgb(100 107 237)",
          border: "none",
          padding: "10px",
        }}
      >
        <NotFoundPageLink to={"/"}>Главная страница</NotFoundPageLink>
      </button>
      <SNotFoundPage>
        <div>404</div>
        <div>Страница не найдена</div>
      </SNotFoundPage>
    </>
  );
};

export default NotFoundPage;
