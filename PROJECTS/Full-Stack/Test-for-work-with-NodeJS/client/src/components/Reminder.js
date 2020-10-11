import React from "react";

const Reminder = ({ type, reminderData, isEnglish, enType }) => {
  return (
    <li>
      <p>{isEnglish ? enType : type}</p>
      <p>{reminderData}</p>
    </li>
  );
};

export default Reminder;
