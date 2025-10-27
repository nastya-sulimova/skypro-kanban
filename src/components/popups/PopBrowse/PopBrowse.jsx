import Calendar from "./Calendar/Calendar"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useMemo } from "react"
import { cardList } from "../../../data"
import { SPopBrowse, PopBrowseContent, HiddenCategories } from "./PopBrowse.styled"

function PopBrowse() {
  const {id} = useParams();

  const navigate = useNavigate();

  const cardItem = useMemo(
    ()=> cardList.find((card)=>card.id===id)||{topic:'', title:'', date:'', status:''}, //не понимаю зачем ИЛИ и что это вообще
    [id]
  );

  const handleClose = () => {
    navigate('/'); // Возвращаемся на главную при закрытии
  }

    return (
        <SPopBrowse id="popBrowse">
          <div className="pop-browse__container">
            <div className="pop-browse__block">
              <PopBrowseContent>
                <div className="pop-browse__top-block">
                  <h3 className="pop-browse__ttl">{cardItem.title}</h3>
                  <div className="categories__theme theme-top _orange _active-category">
                    <p className="_orange">{cardItem.topic}</p>
                  </div>
                </div>
                <div className="pop-browse__status status">
                  <p className="status__p subttl">Статус</p>
                  <div className="status__themes">
                    {/* <div className="status__theme _hide">
                      <p>Без статуса</p>
                    </div>
                    <div className="status__theme _gray">
                      <p className="_gray">Нужно сделать</p>
                    </div>
                    <div className="status__theme _hide">
                      <p>В работе</p>
                    </div>
                    <div className="status__theme _hide">
                      <p>Тестирование</p>
                    </div>
                    <div className="status__theme _hide">
                      <p>Готово</p>
                    </div> */}
                    <div className={`status__theme ${cardItem.status ? '_gray' : '_hide'}`}>
                  <p>{cardItem.status}</p>
                </div>
                {/* <div className={`status__theme ${cardItem.status === 'Нужно сделать' ? '_gray' : '_hide'}`}>
                  <p className="_gray">{cardItem.status}</p>
                </div>
                <div className={`status__theme ${cardItem.status === 'В работе' ? '' : '_hide'}`}>
                  <p>{cardItem.status}</p>
                </div>
                <div className={`status__theme ${cardItem.status === 'Тестирование' ? '' : '_hide'}`}>
                  <p>{cardItem.status}</p>
                </div>
                <div className={`status__theme ${cardItem.status === 'Готово' ? '' : '_hide'}`}>
                  <p>{cardItem.status}</p>
                </div> */}
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
                    <button className="btn-browse__edit _btn-bor _hover03">
                      <a href="#">Редактировать задачу</a>
                    </button>
                    <button className="btn-browse__delete _btn-bor _hover03">
                      <a href="#">Удалить задачу</a>
                    </button>
                  </div>
                  <button onClick={handleClose} className="btn-browse__close _btn-bg _hover01">
                    Закрыть
                  </button>
                </div>
                <div className="pop-browse__btn-edit _hide">
                  <div className="btn-group">
                    <button className="btn-edit__edit _btn-bg _hover01">
                      <a href="#">Сохранить</a>
                    </button>
                    <button className="btn-edit__edit _btn-bor _hover03">
                      <a href="#">Отменить</a>
                    </button>
                    <button
                      className="btn-edit__delete _btn-bor _hover03"
                      id="btnDelete"
                    >
                      <a href="#">Удалить задачу</a>
                    </button>
                  </div>
                  <button onClick={handleClose} className="btn-edit__close _btn-bg _hover01">
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