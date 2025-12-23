import Column from "../Column/Column";
import CardLoader from "../CardLoader/CardLoader";
import {
  MainContainer,
  Container,
  MainBlock,
  MainContent, MainContentError
} from "./Main.styled";

function Main({ loading, tasks, error }) {

  return (
    <MainContainer>
      <Container>
        <MainBlock>
          <MainContent>
          {error && (
            <MainContentError>
              {error}
            </MainContentError>
          )}
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
