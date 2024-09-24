import { useState } from "react";
import React from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTaskContentTrimed = newTaskContent.trim();
    if (newTaskContentTrimed === "") {
      return;
    }
    addNewTask(newTaskContentTrimed);
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
