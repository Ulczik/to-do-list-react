import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, togleTaskDone }) => (
  <ul className="list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__item${
          task.done && hideDone ? " list__item--hidden" : ""
        }`}
      >
        <button
          className="list__button list__button--toggleDone"
          onClick={() => togleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </button>
        <span className={`${task.done ? " list__item--done" : ""}`}>
          {task.content}
        </span>
        <button
          className="list__button list__button--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
