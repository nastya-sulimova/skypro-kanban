import Card from './Card/Card';

function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Column;