import Column from "../Column/Column";
import CardLoader from "../CardLoader/CardLoader";
import {
  MainContainer,
  Container,
  MainBlock,
  MainContent,
} from "./Main.styled";

function Main({ loading }) {
  return (
    <MainContainer>
      <Container>
        <MainBlock>
          <MainContent>
            {loading ? (
              <CardLoader />
            ) : (
              ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово",
              ].map((title, id) => (
                <Column loading={loading} title={title} key={id} />
              ))
            )}
          </MainContent>
        </MainBlock>
      </Container>
    </MainContainer>
  );
}

export default Main;
