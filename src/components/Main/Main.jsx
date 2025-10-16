import Column from "../Column/Column"
import CardLoader from "../CardLoader/CardLoader";

function Main({loading}) {
    return (
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">

            {loading ? <CardLoader /> :
            ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"].map((title, id)=>(
                <Column loading={loading} title={title} key={id} />
            ))}

            </div>
          </div>
        </div>               
      </main>
    )
  }
  
  export default Main