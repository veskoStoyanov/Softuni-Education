import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid/v4";
import data from "./data.json";

export const InsuranceContext = createContext();

const InsuranceContextProvider = (props) => {
  //OBJECTS
  let [objects, setObjects] = useState([]);
  let [object, setObject] = useState("");
  let [countObjects, setCountObjects] = useState(5);

  //POLICIES
  let [policies, setPolicies] = useState([]);
  let [type, setType] = useState("");
  let [edit, setEdit] = useState(false);
  let [idPolicyAlter, setIdPolicyAlter] = useState("");

  //EMOTICONS
  let [emoticons, setEmoticons] = useState(false);
  let [emoticon, setEmoticon] = useState("smile");

  //CALENDAR
  let [months, setMonths] = useState([]);
  let [lastMonth, setLastMonth] = useState({
    id: 11,
    expire: true,
    month: "Ноември",
  });
  //REMINDER
  let [reminder, setReminder] = useState(false);
  let [reminders, setReminders] = useState([]);
  let [reminderData, setReminerData] = useState("");

  //MESSAGES
  let [isMessageSent, setIsMessageSent] = useState(false);
  let [message, setMessage] = useState("");

  //NAVIGATION
  let [isExpanded, setIsExpanded] = useState(false);

  //OBJECTS

  //sums count of the objects
  const handleCountOfObjects = () => {
    let count = objects.reduce((acc, curr) => {
      return (acc += curr.count);
    }, 0);

    setCountObjects(count);
  };
  //increases count of the object
  const increaseObject = (id) => {
    let tempObjects = objects.map((obj) => {
      if (obj.id === id) {
        obj.count += 1;
      }
      return obj;
    });

    setObjects(tempObjects);
    handleCountOfObjects();
  };
  //decreases count of the object
  const decreaseObject = (id) => {
    let tempObjects = objects.map((obj) => {
      if (obj.id === id && obj.count > 0) {
        obj.count -= 1;
      }
      return obj;
    });
    setObjects(tempObjects);
    handleCountOfObjects();
  };

  //POLICIES

  //edits policy
  const handleAlter = (id) => {
    let policyAltered = policies.find((p) => p.id === id);
    setEdit(true);
    setObject(policyAltered.object);
    setType(policyAltered.type);
    setIdPolicyAlter(id);
    setReminder(false);
  };

  //deletes policy
  const deletepolicy = (id) => {
    let tempPolicies = policies.filter((p) => p.id !== id);
    setPolicies(tempPolicies);
    setType("");
    setObject("");
  };

  //gets data from the form input
  const handleObject = (e) => {
    let data = e.target.value;
    setObject(data);
  };

  //gets data from the form input
  const handleType = (e) => {
    let data = e.target.value;
    setType(data);
  };

  //MESSAGES
  //gets data from the form input
  const handleChangeMessage = (e) => {
    let tempMessage = e.target.value;
    setMessage(tempMessage);
  };

  //submits the message
  const handleMessage = () => {
    if (message !== "") {
      setIsMessageSent(true);
      setMessage("");
      setTimeout(() => {
        setIsMessageSent(false);
      }, 5000);
    }
  };

  //REMINDER

  //changes the form to work with reminders
  const changeReminder = () => {
    setType("");
    setReminder(true);
    setEdit(false);
  };

  //gets data from the form input
  const handleData = (e) => {
    let tempData = e.target.value;
    setReminerData(tempData);
  };

  // EXPIRE
  //sets the month which are clicked
  const setExpire = (id) => {
    let tempMonths = months.map((m) => {
      if (m.id === id) {
        m.expire = true;
      }
      return m;
    });

    //sets the last clicked month
    setMonths(tempMonths);
    let tempMonth = months.find((m) => m.id === id);
    setLastMonth(tempMonth);
  };

  //EMOTICONS

  // sets emoticon which is chosen
  const changeEmoticon = (typeEmoticon) => {
    setEmoticon(typeEmoticon);
    showEmoticons();
  };

  //show emoticons to choose from
  const showEmoticons = () => {
    setEmoticons(!emoticons);
  };

  //NAVIGATION

  //check if responsiove navigation is expanded
  const handleNavigation = () => {
    setIsExpanded(!isExpanded);
  };

  //SUBMIT

  const handleSubmit = (e) => {
    e.preventDefault();
    //create reminder
    if (reminder) {
      if (type !== "" && reminderData !== "" && type !== "choose") {
        let singleReminder = {
          type,
          reminderData,
          id: uuid(),
        };

        let tempReminders = [...reminders, singleReminder];

        setReminders(tempReminders);
        setReminder("");
        setType("");
        setReminder(false);
        setReminerData("");
      }
    } else {
      if (type !== "" && object !== "" && type !== "choose") {
        // edit policy
        if (edit === true) {
          let tempPolicies = policies.map((obj) => {
            if (obj.id === idPolicyAlter) {
              obj.type = type;
              obj.object = object;
            }
            return obj;
          });
          setEdit(false);
          setIdPolicyAlter("");
          setPolicies(tempPolicies);
        } else {
          // create policy
          let policy = {
            id: uuid(),
            company: "Alianz",
            type,
            object,
            start: "12.05.20",
            end: "12.05.22",
          };

          let tempPolicies = [...policies, policy];
          setPolicies(tempPolicies);
        }
        setObject("");
        setType("");
      }
    }
  };

  useEffect(
    () => {
      setPolicies(data.policies);
      setObjects(data.objects);
      setMonths(data.months);
    },
    [setPolicies],
    () => {
      handleCountOfObjects();
    }
  );

  return (
    <InsuranceContext.Provider
      value={{
        objects,
        increaseObject,
        decreaseObject,
        policies,
        deletepolicy,
        handleObject,
        handleSubmit,
        handleType,
        object,
        type,
        countObjects,
        handleAlter,
        edit,
        showEmoticons,
        emoticons,
        changeEmoticon,
        emoticon,
        months,
        setExpire,
        lastMonth,
        reminder,
        reminderData,
        handleData,
        changeReminder,
        reminders,
        isMessageSent,
        handleMessage,
        handleChangeMessage,
        message,
        isExpanded,
        handleNavigation,
      }}
    >
      {props.children}
    </InsuranceContext.Provider>
  );
};

export default InsuranceContextProvider;
