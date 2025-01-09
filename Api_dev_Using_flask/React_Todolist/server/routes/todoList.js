const express = require("express")
const router = express.Router()


let todoItems = [
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Walk the dog", completed: false },
  ];
  
  
  router.get("/",(req,res)=>{
      res.json(todoItems);
  })
  
  
  router.post("/", (req, res) => {
    const newTodo = {
        id: todoItems.length + 1,
        task: req.body.task,
        completed: false,
    };
    todoItems.push(newTodo);
    res.status(201).json(newTodo);
  });
  
  router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todoItems.find((t) => t.id === id);
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
  });
  
  router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todoItems.find((t) => t.id === id); // Corrected from `todos` to `todoItems`
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    todo.task = req.body.task || todo.task; 
    todo.completed = req.body.completed || todo.completed;
    res.json(todo);
  });
  
  router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = todoItems.findIndex((t) => t.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Todo not found" });
    }
    todoItems.splice(index, 1);
    res.status(204).send();
  });
  


module.exports = router;