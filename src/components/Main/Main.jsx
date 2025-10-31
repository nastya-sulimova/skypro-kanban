import Column from "../Column/Column";
import CardLoader from "../CardLoader/CardLoader";
import {
  MainContainer,
  Container,
  MainBlock,
  MainContent,
} from "./Main.styled";

function Main({ loading, tasks }) {

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
                <Column tasks={tasks} loading={loading} title={title} key={id} />
              ))
            )}
          </MainContent>
        </MainBlock>
      </Container>
    </MainContainer>
  );
}

export default Main;
