import styled from "styled-components";

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

const NotFoundPage = () => {
  return (
    <SNotFoundPage>
      <div>404</div>
      <div>Страница не найдена</div>
    </SNotFoundPage>
  );
};

export default NotFoundPage;
