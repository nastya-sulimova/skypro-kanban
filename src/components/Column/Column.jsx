import Card from "../Card/Card"
import { cardList } from "../../data";

function Column({ title, loading }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
      {   cardList
                .filter((item) => item.status === title)
                .map((item, id) =>
                  <Card item={item} key={id}/>
                )}
      </div>
    </div>
  );
}

export default Column;