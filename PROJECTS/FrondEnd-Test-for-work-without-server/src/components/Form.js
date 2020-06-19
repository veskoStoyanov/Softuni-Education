import React from "react";

const Form = ({
  handleSubmit,
  handleType,
  handleObject,
  object,
  type,
  edit,
  reminder,
  reminderData,
  handleData,
}) => {
  let submitPolicy = (
    <>
      <label htmlFor="lname">Обект</label>
      <input
        onChange={handleObject}
        value={object}
        type="text"
        id="lname"
        name="object"
        placeholder="Въведи обект"
      />
    </>
  );

  let submitReminder = (
    <>
      <label htmlFor="lname">Дата</label>
      <input
        onChange={handleData}
        value={reminderData}
        type="text"
        id="lname"
        name="data"
        placeholder="Въведи дата"
      />
    </>
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="type">Тип</label>
      <select value={type || ""} onChange={handleType} id="type" name="type">
        <option value="choose">Избери</option>
        <option value="Гражданска отговорност">Гражданска отговорност</option>
        <option value="Застраховка автокаско">Застраховка автокаско</option>
        {reminder ? (
          <option value="Вноска гражданска отговорност">
            Вноска гражданска отговорност
          </option>
        ) : null}
      </select>
      {reminder ? submitReminder : submitPolicy}
      <input
        type="submit"
        value={
          edit ? "Промени" : reminder ? "Добави напомняне" : "Добави полица"
        }
      />
    </form>
  );
};

export default Form;
