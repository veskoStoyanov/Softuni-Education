import React, { createContext, useState, useEffect } from "react";
import data from "./data.json";

import {
  fetchItems,
  editItem,
  fetchOne,
  deleteItem,
  createProduct,
} from "./infrastructure/remote";

export const InsuranceContext = createContext();

const InsuranceContextProvider = (props) => {
  // FIRST RENDER
  const initial = () => {
    getObjects();
    getPolicies();
    getReminders();
    setMonthsFirst();
  };

  // OBJECTs
  let [objects, setObjects] = useState([]);
  let [countObjects, setCountObjects] = useState(0);

  // POLICIES
  let [policies, setPolicies] = useState([]);
  let [object, setObject] = useState("");
  let [type, setType] = useState("");
  let [edit, setEdit] = useState(false);
  let [idPolicyAlter, setIdPolicyAlter] = useState("");

  // EMOTICONS
  let [emoticons, setEmoticons] = useState(false);
  let [emoticon, setEmoticon] = useState("smile");

  // MONTHS
  let [months, setMonths] = useState([]);
  let [lastMonth, setLastMonth] = useState({
    id: 11,
    expire: true,
    month: "Ноември",
    enMonth: 'November'
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

  //LANGUAGE

  let [isEnglish, setIsEnglish] = useState(false);

  // OBJECTS

  //gets objects from database
  const getObjects = async () => {
    try {
      let items = await fetchItems("objects");
      setObjects(items);
      handleCountOfObjects(items);
    } catch (e) {
      console.log(e);
    }
  };
  //increases count of object
  const increaseObject = async (id) => {
    try {
      await editItem({}, id, "objects/increase");
      await getObjects();
    } catch (e) {
      console.log(e);
    }
  };
  //decreases count of object
  const decreaseObject = async (id) => {
    try {
      await editItem({}, id, "objects/decrease");
      await getObjects();
    } catch (e) {
      console.log(e);
    }
  };
  //sums count of all objects
  const handleCountOfObjects = (items) => {
    let count = items.reduce((acc, curr) => {
      return (acc += curr.count);
    }, 0);

    setCountObjects(count);
  };

  // POLICIES

  //gets policies from database
  const getPolicies = async () => {
    try {
      let items = await fetchItems("policies");
      setPolicies(items);
    } catch (e) {
      console.log(e);
    }
  };

  //edits policy
  const handleAlter = async (id) => {

    
    try {
      let policyForEdit = await fetchOne(id, "policies");
      
      setEdit(true);
      setObject(policyForEdit.object);
      let tempType = policyForEdit.enType + '-' + policyForEdit.type;
      setType(tempType);
      setIdPolicyAlter(id);
      setReminder(false);
    } catch (e) {
      console.log(e);
    }
  };

  //deletes policy
  const deletepolicy = async (id) => {
    try {
      await deleteItem(id, "policies");
    } catch (e) {
      console.log(e);
    }
    await getPolicies();
    setType("");
    setObject("");
  };

  // gets data from input
  const handleObject = (e) => {
    let data = e.target.value;
    setObject(data);
  };
  // gets data from form input
  const handleType = (e) => {
    let data = e.target.value;
    setType(data);
  };

  //REMINDER

  //gets reminders from database
  const getReminders = async () => {
    let items = await fetchItems("reminders");

    setReminders(items);
  };

  // changes the form to work with reminder
  const changeReminder = () => {
    setType("");
    setReminder(true);
    setEdit(false);
  };

  //gets data from form input
  const handleData = (e) => {
    let tempData = e.target.value;
    setReminerData(tempData);
  };

  //MONTHS

  //sets the months from data.json
  const setMonthsFirst = () => {
    setMonths(data.months);
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

  //MESSAGES

  //gets data from contacts input
  const handleChangeMessage = (e) => {
    let tempMessage = e.target.value;
    setMessage(tempMessage);
  };

  //  submits the message
  const handleMessage = () => {
    if (message !== "") {
      setIsMessageSent(true);
      setMessage("");
      setTimeout(() => {
        setIsMessageSent(false);
      }, 5000);
    }
  };

  // EMOTICONS

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

  //LANGUAGE
  const handleLanguage = () => {

    setIsEnglish(!isEnglish);
  }

  //SUBMIT

  const handleSubmit = async (e) => {
    e.preventDefault();
    //create reminder
    if (reminder) {
      if (type !== "" && reminderData !== "" && type !== "choose") {
        let types = type.split('-');
        let singleReminder = {
          type: types[1],
          enType: types[0],
          reminderData,
        };

        try {
          await createProduct(singleReminder, "reminders");
          getReminders();
          setReminder("");
          setType("");
          setReminder(false);
          setReminerData("");
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      if (type !== "" && object !== "" && type !== "choose") {
        // edit policy
        if (edit === true) {         
          let types = type.split('-');
          try {
            await editItem({ type: types[1], enType:types[0], object }, idPolicyAlter, "policies");
            await getPolicies();
            setEdit(false);
            setIdPolicyAlter("");
          } catch (e) {
            console.log(e);
          }
        } else {
          // create policy

          let types = type.split('-');
          
          let policy = {
            company: "Alianz",
            type: types[1] ,
            enType: types[0],
            object,
            start: "12.05.20",
            end: "12.05.22",
          };
          try {
            await createProduct(policy, "policies");
            await getPolicies();
          } catch (e) {
            console.log(e);
          }
        }
      }
      setObject("");
      setType("");
    }
  };

  useEffect(() => {
    initial();
  }, []);

  return (
    <InsuranceContext.Provider
      value={{
        //objects
        objects,
        increaseObject,
        decreaseObject,
        handleObject,
        countObjects,
        //policies
        policies,
        deletepolicy,
        handleType,
        object,
        type,
        handleAlter,
        edit,
        //submit
        handleSubmit,
        //emoticons
        showEmoticons,
        emoticons,
        changeEmoticon,
        emoticon,
        //months
        months,
        lastMonth,
        //expire
        setExpire,
        //reminder
        reminder,
        reminderData,
        handleData,
        changeReminder,
        reminders,
        //message
        isMessageSent,
        handleMessage,
        handleChangeMessage,
        message,
        //navigation
        isExpanded,
        handleNavigation,
        //language
        isEnglish,
        handleLanguage

      }}
    >
      {props.children}
    </InsuranceContext.Provider>
  );
};

export default InsuranceContextProvider;
