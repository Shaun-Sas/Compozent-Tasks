import React, { useState } from "react";

const Create = ({ onTaskAdded }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      });

      if (response.ok) {
        const newTodo = await response.json();
        console.log(response.body)
        onTaskAdded(newTodo); 
        setTask(""); 
      } else {
        console.error("Error adding task:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Create;
