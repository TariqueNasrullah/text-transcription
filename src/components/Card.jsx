import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ForwardIcon from "../../src/img/arrow_forward.svg";
import { MyContext } from "../MyContext";

export default function Card(props) {
  const { setQuestion } = useContext(MyContext);

  return (
    <Link
      onClick={() => setQuestion(props.data.title)}
      to="/record"
      className="mt_24 card"
    >
      <h2>{props.data.title}</h2>
      <div className="card-bottom">
        <div className="link">Click here</div>
        <img src={ForwardIcon} alt="Forward Icon" />
      </div>
    </Link>
  );
}
