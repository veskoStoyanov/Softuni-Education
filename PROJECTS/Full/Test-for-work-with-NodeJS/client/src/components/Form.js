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
  isEnglish,
}) => {
  let textEdit = isEnglish ? "Edit" : "Промени";
  let textReminder = isEnglish ? "Add a reminder" : "Добави напомняне";
  let textPolicy = isEnglish ? "Add a policy" : "Добави полица";

  let submitPolicy = (
    <>
      <label htmlFor="lname">{isEnglish ? "Object" : "Обект"}</label>
      <input
        onChange={handleObject}
        value={object}
        type="text"
        id="lname"
        name="object"
        placeholder={isEnglish ? "Enter object" : "Въведи обект"}
      />
    </>
  );

  let submitReminder = (
    <>
      <label htmlFor="lname">{isEnglish ? "Date" : "Дата"}</label>
      <input
        onChange={handleData}
        value={reminderData}
        type="text"
        id="lname"
        name="data"
        placeholder={isEnglish ? "Enter date" : "Въведи дата"}
      />
    </>
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="type">{isEnglish ? "Type" : "Тип"}</label>
      <select value={type || ""} onChange={handleType} id="type" name="type">
        <option value={type || "choose"}>
          {type ? type : isEnglish ? "Choose" : "Избери"}
        </option>
        <option value="Third party liability insurance-Гражданска отговорност">
          {isEnglish
            ? "Third-party liability insurance"
            : "Гражданска отговорност"}
        </option>
        <option value="Casco insurance-Застраховка автокаско">
          {isEnglish ? "Casco insurance" : "Застраховка автокаско"}
        </option>
        {reminder ? (
          <option value="Third party liability insurance peyment-Вноска гражданска отговорност">
            {isEnglish
              ? "Third-party liability insurance peyment"
              : "Вноска гражданска отговорност"}
          </option>
        ) : null}
      </select>
      {reminder ? submitReminder : submitPolicy}
      <input
        type="submit"
        value={edit ? textEdit : reminder ? textReminder : textPolicy}
      />
    </form>
  );
};

export default Form;
