import Calendar from "./Calendar/Calendar";
import { useNavigate } from "react-router-dom";
import {
  SPopBrowse,
  PopBrowseContent,
  HiddenCategories,
} from "./PopBrowse.styled";
import { Topic, TopicColors } from "../../Card/Card.styled";
import { useState, useEffect } from "react";

function PopBrowseEdit({ task, error, loading, onSave, onDelete }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    topic: "",
    date: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (task && task._id) {
      setFormData({
        title: task.title || "",
        description: task.description || "",
        status: task.status || "",
        topic: task.topic || "",
        date: task.date || "",
      });
    }
  }, [task]);

  const handleSave = () => {
    const updatedData = {
      title: formData.title,
      topic: formData.topic,
      status: formData.status,
      description: formData.description,
      date: new Date(formData.date).toISOString(),
    };
    onSave(updatedData);
  };

  const handleDateChange = (newDate) => {
    setFormData((prev) => ({
      ...prev,
      date: newDate,
    }));
  };

  const handleClose = () => {
    navigate("/");
  };

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

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

  if (loading) {
    return (
      <SPopBrowse id="popBrowse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div>Загрузка...</div>
          </div>
        </div>
      </SPopBrowse>
    );
  }

  if (error) {
    return (
      <SPopBrowse id="popBrowse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div>Ошибка: {error}</div>
            <button onClick={handleClose}>Закрыть</button>
          </div>
        </div>
      </SPopBrowse>
    );
  }

  return (
    <SPopBrowse id="popBrowse">
      <div
        className="pop-browse__container"
        style={{ background: "transparent" }}
      >
        <div className="pop-browse__block">
          <PopBrowseContent>
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{task.title}</h3>
              <Topic $topic={task.topic}>
                <TopicColors style={{ margin: "5px" }} $topic={task.topic}>
                  {task.topic}
                </TopicColors>
              </Topic>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {[
                  "Без статуса",
                  "Нужно сделать",
                  "В работе",
                  "Тестирование",
                  "Готово",
                ].map((status) => (
                  <div
                    style={{ cursor: "pointer" }}
                    key={status}
                    className={`status__theme ${
                      formData.status === status ? "_gray" : ""
                    }`}
                    onClick={() => setFormData({ ...formData, status })}
                  >
                    <p
                      style={{
                        color: formData.status === status ? "white" : "#94A6BE",
                      }}
                    >
                      {status}
                    </p>
                  </div>
                ))}
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
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar
                selectedDate={formData.date}
                onDateChange={handleDateChange}
              />
            </div>
            <HiddenCategories className="theme-down__categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">{task.topic}</p>
              </div>
            </HiddenCategories>

            <div className="pop-browse__btn-edit">
              <div className="btn-group">
                <button
                  onClick={handleSave}
                  className="btn-edit__edit _btn-bg _hover01"
                >
                  Сохранить
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  Отменить
                </button>
                <button onClick={handleDeleteClick}
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  Удалить задачу
                </button>
              </div>
              <button
                onClick={handleClose}
                className="btn-edit__close _btn-bg _hover01"
              >
                Закрыть
              </button>
            </div>
          </PopBrowseContent>
        </div>
      </div>
    </SPopBrowse>
  );
}

export default PopBrowseEdit;
