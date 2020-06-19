import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import NoPage from "./components/NoPage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/App.css";

import { InsuranceContext } from "./context";

const App = () => {
  let { isMessageSent, isEnglish } = useContext(InsuranceContext);
  let text = isEnglish
    ? "Please wait while the data is being processed!"
    : "Моля, изчакайте докато данните се обработват!";
  toast.info(text);
  return (
    <div className="container">
      {isMessageSent ? <ToastContainer /> : null}
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route component={NoPage} />
      </Switch>
      <Sidebar />
      <Contacts />
      <Footer isEnglish={isEnglish} />
    </div>
  );
};
export default App;
