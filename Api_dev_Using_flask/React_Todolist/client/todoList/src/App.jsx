import React, { useState } from "react";
import Create from "./Create";
import Todolist from "./Todolist";


const App = () => {
  const [tasks, setTasks] = useState([]); 

  const handleTaskAdded = (newTodo) => {
    setTasks((prevTasks) => [...prevTasks, newTodo]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <Create onTaskAdded={handleTaskAdded} />
      <Todolist tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
