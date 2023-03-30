import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = (props) => {
  const [question, setQuestion] = useState("");
  const getQuestion = localStorage.getItem("myData");

  if (question) {
    localStorage.setItem("myData", question);
  } else {
    const getData = localStorage.getItem("myData");
    setQuestion(getData);
    localStorage.setItem("myData", getData);
  }

  return (
    <MyContext.Provider value={{ question, setQuestion }}>
      {props.children}
    </MyContext.Provider>
  );
};
