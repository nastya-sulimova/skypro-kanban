import {
  SNotFoundPage,
  NotFoundPageLink,
  SNotFoundPageButton,
} from "../components/NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <>
      <SNotFoundPageButton>
        <NotFoundPageLink to={"/"}>Главная страница</NotFoundPageLink>
      </SNotFoundPageButton>
      <SNotFoundPage>
        <div>404</div>
        <div>Страница не найдена</div>
      </SNotFoundPage>
    </>
  );
};

export default NotFoundPage;
