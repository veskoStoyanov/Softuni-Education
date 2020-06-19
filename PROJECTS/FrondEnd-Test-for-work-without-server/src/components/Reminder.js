import React from "react";

const Reminder = ({ type, reminderData }) => {
  return (
    <li>
      <p>{type}</p>
      <p>{reminderData}</p>
    </li>
  );
};

export default Reminder;
