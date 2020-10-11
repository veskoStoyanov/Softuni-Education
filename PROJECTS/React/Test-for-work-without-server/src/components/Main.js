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
  } = context;

  return (
    <main className="main">
      <article className="main-article">
        <Title text="Застрахователни обекти" count={countObjects} />
        <div className="objects-table-title">
          <h5 className="category">ВИД</h5>
          <h5 className="count">БРОЙ</h5>
        </div>
        <ul className="table-container">
          {objects &&
            objects.map((obj) => {
              return (
                <SingleObject
                  key={obj.id}
                  {...obj}
                  increaseObject={increaseObject}
                  decreaseObject={decreaseObject}
                />
              );
            })}
        </ul>
      </article>
      <article className="main-article policies-table">
        <Title
          text=" Застрахователни полици"
          count={policies && policies.length}
        />
        <div className="policies-table-title">
          <h5 className="company">КОМПАНИЯ</h5>
          <h5 className="type">ВИД</h5>
          <h5 className="object">ОБЕКТ</h5>
          <h5 className="start">НАЧАЛО</h5>
          <h5 className="end">КРАЙ</h5>
        </div>
        <ul className="table-container">
          {policies &&
            policies.map((p, index) => {
              return (
                <SinglePolicy
                  key={p.id || index}
                  {...p}
                  deletepolicy={deletepolicy}
                  handleAlter={handleAlter}
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
