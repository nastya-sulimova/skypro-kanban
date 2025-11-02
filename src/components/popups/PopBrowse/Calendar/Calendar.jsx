import { useState, useEffect } from "react";

function Calendar({ selectedDate, onDateChange }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    if (selectedDate) {
      setCurrentDate(new Date(selectedDate));
    }
  }, [selectedDate]);

  const handlePrevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const handleDayClick = (day) => {
    const selected = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    onDateChange(selected.toISOString());
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

    const days = [];

    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDay - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="calendar__cell _other-month">
          {prevMonthLastDay - i}
        </div>
      );
    }

    const today = new Date();
    const selectedDay = selectedDate ? new Date(selectedDate).getDate() : null;
    const selectedMonth = selectedDate
      ? new Date(selectedDate).getMonth()
      : null;

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDay === day && selectedMonth === month;
      const isToday =
        today.getDate() === day &&
        today.getMonth() === month &&
        today.getFullYear() === year;
      const isWeekend = [5, 6].includes((startingDay + day - 1) % 7);

      days.push(
        <div
          key={day}
          className={`calendar__cell _cell-day ${
            isSelected ? "_current" : ""
          } ${isWeekend ? "_weekend" : ""}`}
          onClick={() => handleDayClick(day)}
          style={{ cursor: "pointer" }}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  return (
    <div className="pop-new-card__calendar calendar">
      <p className="calendar__ttl subttl">Даты</p>
      <div className="calendar__block">
        <div className="calendar__nav">
          <div className="calendar__month">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </div>
          <div className="nav__actions">
            <div
              className="nav__action"
              data-action="prev"
              onClick={handlePrevMonth}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </div>
            <div
              className="nav__action"
              data-action="next"
              onClick={handleNextMonth}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="calendar__content" style={{ marginBottom: "30px" }}>
          <div className="calendar__days-names">
            <div className="calendar__day-name">пн</div>
            <div className="calendar__day-name">вт</div>
            <div className="calendar__day-name">ср</div>
            <div className="calendar__day-name">чт</div>
            <div className="calendar__day-name">пт</div>
            <div className="calendar__day-name -weekend-">сб</div>
            <div className="calendar__day-name -weekend-">вс</div>
          </div>
          <div className="calendar__cells">{renderCalendar()}</div>
        </div>
        <div className="calendar__period">
          <p className="calendar__p date-end">
            Срок исполнения{" "}
            <span className="date-control">
              {selectedDate
                ? new Date(selectedDate).toLocaleDateString("ru-RU")
                : "не выбран"}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
