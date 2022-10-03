import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
    //setting tasks to state
    const [tasks, setTasks] = React.useState(TASKS)

    //handling task deletions
    const handleDeleteTasks = (task) => {
      let newTasks = tasks.filter((tsk) => tsk.text !== task);
      setTasks(newTasks);
    };

    //filtering tasks by category
    const handleFilterTasks = (CATEGORIES) => {
      if (CATEGORIES === "All") {
        setTasks(TASKS);
      } else {
        let newTasks = TASKS.filter((task) => task.category === CATEGORIES);
        setTasks(newTasks)
      }
    }

    //handling submission of the task form
    const onTaskFormSubmit = (newTask) => {
      setTasks([...tasks, newTask]);
    }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        handleFilterTasks={handleFilterTasks}
      />
      
      <NewTaskForm 
        onTaskFormSubmit={onTaskFormSubmit}
        categories={CATEGORIES}
      />
      <TaskList 
        tasks={tasks}
        handleDeleteTasks={handleDeleteTasks}
      />
      
    </div>
  );
}

export default App;
