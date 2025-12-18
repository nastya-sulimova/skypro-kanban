import Calendar from "./Calendar/Calendar"
import { useNavigate } from "react-router-dom"
import { 
  SPopBrowse, 
  PopBrowseContent, 
  HiddenCategories, 
  PopBrowseDeleteConfirm, 
  DeleteQuestion, 
  DeleteOptions, 
  DeleteButtons,
  PopBrowseValidError,

} from "./PopBrowse.styled"
import { 
  ValidErrorTitle, 
  ValidErrorList,
  ValidErrorItem,
  ValidButtonBlock,
  ValidButton
} from "../PopNewCard/PopNewCard.styled"
import { Topic, TopicColors } from "../../Card/Card.styled"
import { useState, useEffect } from "react"

function PopBrowse({task, onDelete, onSave}) {

  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  const [validationErrors, setValidationErrors] = useState({});
  const [showValidationError, setShowValidationError] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    topic: "",
    date: "",
  });

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

  const validateForm = () => {
    const errors = {};
    
    if (!formData.status) {
      errors.status = "Выберите статус";
    }
    
    if (!formData.description.trim()) {
      errors.description = "Описание задачи обязательно";
    }
    
    if (!formData.date) {
      errors.date = "Укажите срок исполнения";
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

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
          <PopBrowseDeleteConfirm>
            <DeleteQuestion>Удалить задачу?</DeleteQuestion>
            <DeleteOptions>
              <DeleteButtons onClick={handleConfirmDelete} className="btn-browse__delete _btn-bor _hover03">Да, удалить</DeleteButtons>
              <DeleteButtons onClick={handleCancelDelete} className="btn-browse__delete _btn-bor _hover03">Отмена</DeleteButtons>
            </DeleteOptions>
          </PopBrowseDeleteConfirm>
        </div>
      </SPopBrowse>
    );
  }

  const ValidationErrorModal = () => {
    if (!showValidationError) return null;
    
    const errorMessages = Object.values(validationErrors);
    
    return (
      <PopBrowseValidError>
        <ValidErrorTitle>⚠️ Заполните обязательные поля:</ValidErrorTitle>
        <ValidErrorList>
          {errorMessages.map((msg, idx) => (
            <ValidErrorItem key={idx}>{msg}</ValidErrorItem>
          ))}
        </ValidErrorList>
        <ValidButtonBlock>
          <ValidButton 
            onClick={() => setShowValidationError(false)}
          >
            Понятно
          </ValidButton>
        </ValidButtonBlock>
      </PopBrowseValidError>
    );
  };

  if (showDeleteConfirm) {
    return <DeleteConfirmation />;
  }

  const handleEditClick = () => {
    setIsEdit(true);
  }

  const handleCancelEdit = () => {
    setIsEdit(false);
    setValidationErrors({});
    setShowValidationError(false);
  }

  const handleSave = () => {
    if (!validateForm()) {
      setShowValidationError(true);
      return;
    }
    
    const updatedData = {
      title: formData.title,
      topic: formData.topic,
      status: formData.status,
      description: formData.description,
      date: new Date(formData.date).toISOString(),
    };
    
    onSave(updatedData);
    setShowValidationError(false);
  };

  const handleDateChange = (newDate) => {
    setFormData((prev) => ({
      ...prev,
      date: newDate,
    }));
    if (validationErrors.date) {
      setValidationErrors(prev => ({...prev, date: ''}));
    }
  };

  const handleStatusChange = (newStatus) => {
    setFormData(prev => ({...prev, status: newStatus}));
    if (validationErrors.status) {
      setValidationErrors(prev => ({...prev, status: ''}));
    }
  };

    return (
        <SPopBrowse id="popBrowse">
          <ValidationErrorModal />

          {showValidationError && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 999
            }} />
          )}

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
                  {!isEdit &&
                    <div className="status__themes">
                    <div className={`status__theme ${task.status ? '_gray' : '_hide'}`}>
                      <p>{task.status}</p>
                    </div> 
                  </div>
                  }

                  {isEdit && 
                    <>
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
                          onClick={() => handleStatusChange(status)}
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
                    </>
                  }
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
                      {!isEdit &&
                        <textarea
                        className="form-browse__area"
                        name="text"
                        id="textArea01"
                        readOnly
                        placeholder="Введите описание задачи..."
                      ></textarea>
                      }
                 
                      {isEdit &&
                        <>
                          <textarea
                          className="form-browse__area"
                          name="text"
                          id="textArea01"
                          value={formData.description}
                          onChange={(e) => {
                            setFormData({ ...formData, description: e.target.value });
                            if (validationErrors.description) {
                              setValidationErrors(prev => ({...prev, description: ''}));
                            }
                          }}
                          placeholder="Введите описание задачи..."
                        ></textarea>
                        </>
                      }
                    </div>
                  </form>
                  {!isEdit &&
                    <Calendar selectedDate={task.date}
                    onDateChange={() => {}}/>
                  }
               
                  {isEdit &&
                    <>
                      <Calendar
                      selectedDate={formData.date}
                      onDateChange={handleDateChange}
                    />
                    </>
                  }
                </div>
                <HiddenCategories className="theme-down__categories">
                  <p className="categories__p subttl">Категория</p>
                  <div className="categories__theme _orange _active-category">
                    <p className="_orange">{task.topic}</p>
                  </div>
                </HiddenCategories>
                {!isEdit &&
                  <div className="pop-browse__btn-browse ">
                  <div className="btn-group">
                    <button onClick={handleEditClick} className="btn-browse__edit _btn-bor _hover03">
                        Редактировать задачу
                      </button>
                    <button onClick={handleDeleteClick} className="btn-browse__delete _btn-bor _hover03">
                      Удалить задачу
                    </button>
                  </div>
                  <button onClick={handleClose} className="btn-browse__close _btn-bg _hover01">
                    Закрыть
                  </button>
                </div>
                }
                
                {isEdit &&
                  <div className="pop-browse__btn-edit">
                  <div className="btn-group">
                    <button
                      onClick={handleSave}
                      className="btn-edit__edit _btn-bg _hover01"
                    >
                      Сохранить
                    </button>
                    <button onClick={handleCancelEdit} className="btn-edit__edit _btn-bor _hover03">
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
                    onClick={handleCancelEdit}
                    className="btn-edit__close _btn-bg _hover01"
                  >
                    Закрыть
                  </button>
                </div>
                }
              </PopBrowseContent>
            </div>
          </div>
        </SPopBrowse>
    )
  }
  
  export default PopBrowse