import React, { useContext } from "react";
import { InsuranceContext } from "../context";
import Title from "./Title";
import SingleObject from "./SingleObject";
import SinglePolicy from "./SinglePolicy";
import Form from "./Form";

const Main = () => {
  let context = useContext(InsuranceContext);
  let {
    objects,
    policies,
    increaseObject,
    decreaseObject,
    deletepolicy,
    countObjects,
    handleAlter,
    isEnglish,
  } = context;

  return (
    <main className="main">
      <article className="main-article">
        <Title
          text={isEnglish ? "Insurance objects" : "Застрахователни обекти"}
          count={countObjects}
        />
        <div className="objects-table-title">
          <h5 className="category">{isEnglish ? "TYPE" : "ВИД"}</h5>
          <h5 className="count">{isEnglish ? "amount" : "БРОЙ"}</h5>
        </div>
        <ul className="table-container">
          {objects &&
            objects.map((obj) => {
              return (
                <SingleObject
                  key={obj._id}
                  {...obj}
                  increaseObject={increaseObject}
                  decreaseObject={decreaseObject}
                  isEnglish={isEnglish}
                />
              );
            })}
        </ul>
      </article>
      <article className="main-article policies-table">
        <Title
          text={isEnglish ? "Insurance policies" : "Застрахователни полици"}
          count={policies && policies.length}
        />
        <div className="policies-table-title">
          <h5 className="company">{isEnglish ? "COMPANY" : "КОМПАНИЯ"}</h5>
          <h5 className="type">{isEnglish ? "TYPE" : "ВИД"}</h5>
          <h5 className="object">{isEnglish ? "OBJECT" : "ОБЕКТ"}</h5>
          <h5 className="start">{isEnglish ? "START" : "НАЧАЛО"}</h5>
          <h5 className="end">{isEnglish ? "END" : "КРАЙ"}</h5>
        </div>
        <ul className="table-container">
          {policies &&
            policies.map((p, index) => {
              return (
                <SinglePolicy
                  key={p._id || index}
                  {...p}
                  deletepolicy={deletepolicy}
                  handleAlter={handleAlter}
                  isEnglish={isEnglish}
                />
              );
            })}
        </ul>
      </article>
      <Form {...context} />
    </main>
  );
};

export default Main;
