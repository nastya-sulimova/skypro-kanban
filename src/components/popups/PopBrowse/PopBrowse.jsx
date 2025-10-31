import Calendar from "./Calendar/Calendar"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useMemo } from "react"
import { cardList } from "../../../data"
import { SPopBrowse, PopBrowseContent, HiddenCategories } from "./PopBrowse.styled"

import { Topic, TopicColors } from "../../Card/Card.styled"

function PopBrowse() {
  const {id} = useParams();

  const navigate = useNavigate();

  const cardItem = useMemo(
    ()=> cardList.find((card)=>card.id===id)||{topic:'', title:'', date:'', status:''},    
    [id]
  );

  const handleClose = () => {
    navigate('/');
  }

    return (
        <SPopBrowse id="popBrowse">
          <div className="pop-browse__container">
            <div className="pop-browse__block">
              <PopBrowseContent>
                <div className="pop-browse__top-block">
                  <h3 className="pop-browse__ttl">{cardItem.title}</h3>
                  <Topic $topic={cardItem.topic}>
                    <TopicColors style={{margin: '5px'}} $topic={cardItem.topic}>{cardItem.topic}</TopicColors>
                  </Topic>
                </div>
                <div className="pop-browse__status status">
                  <p className="status__p subttl">Статус</p>
                  <div className="status__themes">
                    <div className={`status__theme ${cardItem.status ? '_gray' : '_hide'}`}>
                      <p>{cardItem.status}</p>
                    </div> 
                  </div>
                </div>
                <div className="pop-browse__wrap">
                  <form
                    className="pop-browse__form form-browse"
                    id="formBrowseCard"
                    action="#"
                  >
                    <div className="form-browse__block">
                      <label htmlFor="textArea01" className="subttl">
                        Описание задачи
                      </label>
                      <textarea
                        className="form-browse__area"
                        name="text"
                        id="textArea01"
                        readOnly
                        placeholder="Введите описание задачи..."
                      ></textarea>
                    </div>
                  </form>
                  <Calendar/>
                </div>
                <HiddenCategories className="theme-down__categories">
                  <p className="categories__p subttl">Категория</p>
                  <div className="categories__theme _orange _active-category">
                    <p className="_orange">{cardItem.topic}</p>
                  </div>
                </HiddenCategories>
                <div className="pop-browse__btn-browse ">
                  <div className="btn-group">

                  <Link to={`/card/${cardItem.id}/edit`} target="_self">
                    <button className="btn-browse__edit _btn-bor _hover03">
                        Редактировать задачу
                      </button>
                  </Link>

                    <button className="btn-browse__delete _btn-bor _hover03">
                      <a href="#">Удалить задачу</a>
                    </button>
                  </div>
                  <button onClick={handleClose} className="btn-browse__close _btn-bg _hover01">
                    Закрыть
                  </button>
                </div>
              </PopBrowseContent>
            </div>
          </div>
        </SPopBrowse>
    )
  }
  
  export default PopBrowse