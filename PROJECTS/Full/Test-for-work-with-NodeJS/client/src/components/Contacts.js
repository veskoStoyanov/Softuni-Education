import React, { useContext } from "react";
import { InsuranceContext } from "../context";
import contactImg from "../img/chat.png";

const Contacts = () => {
  let {
    emoticons,
    showEmoticons,
    changeEmoticon,
    emoticon,
    handleMessage,
    handleChangeMessage,
    message,
    isEnglish,
  } = useContext(InsuranceContext);

  return (
    <section className="contacts">
      <div className="contacts-title">
        <div className="contacts-title-img">
          <img src={contactImg} alt="chat" />
        </div>
        <h3>
          {isEnglish ? "Send us a recommendation" : "Изпрати ни препоръка"}
        </h3>
      </div>
      <div className="contacts-input">
        <input
          onChange={handleChangeMessage}
          placeholder={isEnglish ? "write" : "Напишете"}
          value={message}
          type="text"
        />
        <div>
          <i
            onClick={() => showEmoticons()}
            className={`far fa-${emoticon} hide-emoticons`}
          ></i>
          <i
            onClick={() => handleMessage()}
            className="fas fa-location-arrow contacts-submit-btn"
          ></i>
        </div>
      </div>
      <div
        className={`contacts-input emoticons ${
          emoticons ? "show-emoticons" : ""
        }`}
      >
        <i onClick={() => changeEmoticon("smile")} className="far fa-smile"></i>
        <i onClick={() => changeEmoticon("frown")} className="far fa-frown"></i>
        <i onClick={() => changeEmoticon("meh")} className="far fa-meh"></i>
      </div>
    </section>
  );
};

export default Contacts;
