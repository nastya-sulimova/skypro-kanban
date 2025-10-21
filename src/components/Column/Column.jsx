import Card from "../Card/Card"
import { cardList } from "../../data";
import { MainColumn, ColumnTitle, Cards } from "./Column.style";

function Column({ title }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
      {   cardList
                .filter((item) => item.status === title)
                .map((item, id) =>
                  <Card item={item} key={id}/>
                )}
      </Cards>
    </MainColumn>
  );
}

export default Column;