import React, { useContext } from "react";
import chatImg from "../img/chat@2x.png";
import Title from "./Title";
import { InsuranceContext } from "../context";
import Month from "./Month";
import Reminder from "./Reminder";

const Sidebar = () => {
  let { months, setExpire, lastMonth, changeReminder, reminders } = useContext(
    InsuranceContext
  );
  return (
    <section className="sidebar">
      <header className="sidebar-header">
        <div className="chat-img-container">
          <img src={chatImg} alt="chat" />
        </div>
        <h1>Мария, добре дошла в твоя профил</h1>
        <Title
          text="Напомняния този месец"
          count={reminders && reminders.length + 1}
        />
      </header>
      <article className="sidebar-main">
        <ul className="sidebar-main-container">
          <li>
            <p>Вноска гражданска отговорност</p>
            <p className="danger">днес</p>
          </li>

          {reminders &&
            reminders.map((r) => {
              return <Reminder key={r._id} {...r} />;
            })}
        </ul>
        <div onClick={() => changeReminder()} className="sidebar-btn">
          Добави ново напомняне
          <i className="far fa-bell"></i>
        </div>

        <div className="calendar">
          <div className="calendar-title">
            <h4>Календар 2020</h4>
            <div className="calendar-arrows">
              <i className="fas fa-chevron-left"></i>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="calendar-main">
            {months &&
              months.map((m) => {
                return <Month key={m.id} {...m} setExpire={setExpire} />;
              })}
          </div>
        </div>
        <div className="expire">
          <div>
            <i className="far fa-bell bell-expire primary"></i>
            <span>{lastMonth.month}:</span>
          </div>
          <ul>
            <li>
              <p>Автомобил Форд Фокус</p>
              <p>
                Изтичане на вноска:{" "}
                <span className="expire-data">21.{lastMonth.id}.20</span>
              </p>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Sidebar;
