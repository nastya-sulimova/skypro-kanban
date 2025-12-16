import Calendar from "./Calendar/Calendar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Временный styled-component
const PopNewCardStyled = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  &:target {
    display: block;
  }
`;

function PopNewCard({ error, loading, onCreate }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "",
    date: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [showValidationError, setShowValidationError] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!formData.title.trim()) {
      errors.title = "Название задачи обязательно";
    }

    if (!formData.description.trim()) {
      errors.description = "Описание задачи обязательно";
    }

    if (!formData.topic) {
      errors.topic = "Выберите категорию";
    }

    if (!formData.date) {
      errors.date = "Укажите срок исполнения";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreate = () => {
    if (!validateForm()) {
      setShowValidationError(true);
      return;
    }

    const newTaskData = {
      title: formData.title,
      topic: formData.topic,
      description: formData.description,
      date: formData.date
        ? new Date(formData.date).toISOString()
        : new Date().toISOString(),
      status: "Без статуса",
    };
    onCreate(newTaskData);
    setShowValidationError(false);
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

  const ValidationErrorModal = () => {
    if (!showValidationError) return null;

    const errorMessages = Object.values(validationErrors);

    return (
      <div
        className="pop-new-card__validation-error"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
          zIndex: 1000,
          maxWidth: "400px",
        }}
      >
        <h4 style={{ marginBottom: "15px", color: "#d32f2f" }}>
          ⚠️ Заполните обязательные поля:
        </h4>
        <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
          {errorMessages.map((msg, idx) => (
            <li key={idx} style={{ marginBottom: "5px", color: "#555" }}>
              {msg}
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button
            onClick={() => setShowValidationError(false)}
            style={{
              padding: "8px 20px",
              background: "#565EEF",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Понятно
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <PopNewCardStyled id="popNewCard">
        <div className="pop-new-card__container">
          <div className="pop-new-card__block">
            <div className="pop-new-card__content">
              <div>Загрузка...</div>
            </div>
          </div>
        </div>
      </PopNewCardStyled>
    );
  }

  if (error) {
    return (
      <PopNewCardStyled id="popNewCard">
        <div className="pop-new-card__container">
          <div className="pop-new-card__block">
            <div className="pop-new-card__content">
              <div>
                Ошибка:{" "}
                {`Поля "Название задачи", "Описание задачи", "Категория" и "Срок исполнения" должны быть заполнены`}
              </div>
              <button onClick={handleClose}>Закрыть</button>
            </div>
          </div>
        </div>
      </PopNewCardStyled>
    );
  }

  return (
    <PopNewCardStyled id="popNewCard">
      <ValidationErrorModal />

      {showValidationError && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
        />
      )}

      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to="/" className="pop-new-card__close">
              &#10006;
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={formData.title}
                    onChange={(e) => {
                      setFormData({ ...formData, title: e.target.value });
                      if (validationErrors.title) {
                        setValidationErrors((prev) => ({ ...prev, title: "" }));
                      }
                    }}
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={(e) => {
                      setFormData({ ...formData, description: e.target.value });
                      if (validationErrors.description) {
                        setValidationErrors((prev) => ({
                          ...prev,
                          description: "",
                        }));
                      }
                    }}
                  ></textarea>
                </div>
              </form>
              <Calendar
                selectedDate={formData.date}
                onDateChange={(newDate) => {
                  handleDateChange(newDate);
                  if (validationErrors.date) {
                    setValidationErrors((prev) => ({ ...prev, date: "" }));
                  }
                }}
              />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>

              <div className="categories__themes">
                {[
                  { name: "Web Design", class: "_orange" },
                  { name: "Research", class: "_green" },
                  { name: "Copywriting", class: "_purple" },
                ].map((category) => (
                  <div
                    key={category.name}
                    className={`categories__theme ${category.class} ${
                      formData.topic === category.name ? "_active-category" : ""
                    }`}
                    onClick={() => {
                      setFormData({ ...formData, topic: category.name });
                      if (validationErrors.topic) {
                        setValidationErrors((prev) => ({ ...prev, topic: "" }));
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <p className={category.class}>{category.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleCreate}
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </PopNewCardStyled>
  );
}

export default PopNewCard;
