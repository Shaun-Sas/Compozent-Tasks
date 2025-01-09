import React, { useEffect } from "react";
import axios from "axios";

const Todolist = ({ tasks, setTasks }) => {
  useEffect(() => {

    axios
      .get("http://localhost:3000/todos")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, [setTasks]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      
      setTasks((prevTasks) => prevTasks.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <ul>
      {tasks.map((todo) => (
        <li key={todo.id}>
          {todo.task}
          <button onClick={() => handleDelete(todo.id)} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
