import Calendar from "./Calendar/Calendar"
import { Link, useNavigate } from "react-router-dom"
import { SPopBrowse, PopBrowseContent, HiddenCategories } from "./PopBrowse.styled"
import { Topic, TopicColors } from "../../Card/Card.styled"
import { useState } from "react"

function PopBrowse({task, onDelete}) {

  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleClose = () => {
    navigate('/');
  }

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  }

  const handleConfirmDelete = () => {
    onDelete();
    setShowDeleteConfirm(false);
  }

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  }

  const DeleteConfirmation = () => {
    return (
      <SPopBrowse id="popBrowse">
        <div className="pop-browse__container">
          <div className="pop-browse__block" style={{display: "flex", flexDirection: "column", gap: "15px", alignItems:"center"}}>
            <div style={{ display: "flex", flexDirection: "row", gap: "40px", fontSize:"18px"}}>Удалить задачу?</div>
            <div style={{display: "flex", gap: "50px"}}>
              <button style={{padding: "7px 20px"}} onClick={handleConfirmDelete} className="btn-browse__delete _btn-bor _hover03">Да, удалить</button>
              <button style={{padding: "7px 20px"}} onClick={handleCancelDelete} className="btn-browse__delete _btn-bor _hover03">Отмена</button>
            </div>
          </div>
        </div>
      </SPopBrowse>
    );
  }

  if (showDeleteConfirm) {
    return <DeleteConfirmation />;
  }

    return (
        <SPopBrowse id="popBrowse">
          <div className="pop-browse__container">
            <div className="pop-browse__block">
              <PopBrowseContent>
                <div className="pop-browse__top-block">
                  <h3 className="pop-browse__ttl">{task.title}</h3>
                  <Topic $topic={task.topic}>
                    <TopicColors style={{margin: '5px'}} $topic={task.topic}>{task.topic}</TopicColors>
                  </Topic>
                </div>
                <div className="pop-browse__status status">
                  <p className="status__p subttl">Статус</p>
                  <div className="status__themes">
                    <div className={`status__theme ${task.status ? '_gray' : '_hide'}`}>
                      <p>{task.status}</p>
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
                  <Calendar selectedDate={task.date}
                            onDateChange={() => {}}/>
                </div>
                <HiddenCategories className="theme-down__categories">
                  <p className="categories__p subttl">Категория</p>
                  <div className="categories__theme _orange _active-category">
                    <p className="_orange">{task.topic}</p>
                  </div>
                </HiddenCategories>
                <div className="pop-browse__btn-browse ">
                  <div className="btn-group">

                  <Link to={`/card/${task._id}/edit`} 
                  state={{ task }}
                  target="_self">
                    <button className="btn-browse__edit _btn-bor _hover03">
                        Редактировать задачу
                      </button>
                  </Link>

                    <button onClick={handleDeleteClick} className="btn-browse__delete _btn-bor _hover03">
                      Удалить задачу
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