import React, { useContext, useEffect } from "react";
import { MyContext } from "../MyContext";

export default function Result({ data }) {
  const { question } = useContext(MyContext);

  const arr = Object.entries(data);

  const newArr = arr.map((item) => item);

  return (
    <div className="result">
      {newArr.slice(0, 3).map((item) => (
        <div className="single_result" key={Math.random()}>
          <h2> {item[0]} </h2>
          <p className="feedback">
            {" "}
            <span>Feedback:</span> {item[1].feedback}{" "}
          </p>
          <p className="score">
            {" "}
            <span>Score: </span> {item[1].score}{" "}
          </p>
        </div>
      ))}

      {newArr.slice(4, 6).map((item) => (
        <div className="single_result" key={Math.random()}>
          <h2> {item[0]} </h2>
          <p className="feedback">
            {" "}
            <span>Feedback:</span> {item[1].feedback}{" "}
          </p>
          <p className="score">
            {" "}
            <span>Score: </span> {item[1].score}{" "}
          </p>
        </div>
      ))}

      {newArr.slice(3, 4).map((item) => (
        <div className="single_result" key={Math.random()}>
          <h2 style={{ color: "#f8fafc" }}> {item[0]} </h2>
          <p className="feedback">
            {" "}
            <span>Feedback:</span> {item[1].feedback}{" "}
          </p>
          <p className="score">
            {" "}
            <span>Score: </span> {item[1].score}{" "}
          </p>
        </div>
      ))}

      {newArr.slice(6, 7).map((item) => (
        <div key={Math.random()}>
          <h2> {item[0]} </h2>
          <p className="feedback">{item[1]}</p>
        </div>
      ))}
    </div>
  );
}
