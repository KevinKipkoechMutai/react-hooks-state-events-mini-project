import React from "react";

function Task({text, category, handleDeleteTasks}) {
  //function to initiate deletion
  function handleClickDelete() {
    handleDeleteTasks(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClickDelete}>X</button>
    </div>
  );
}

export default Task;
