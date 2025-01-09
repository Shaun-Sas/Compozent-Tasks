const express = require("express")
const app = express()
const port = 3000
const cors = require('cors');


const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,POST,PUT,DELETE', 
    allowedHeaders: ['Content-Type', 'Authorization'] 
};


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"));
app.use(cors(corsOptions));


const indexRoutes = require('./routes/todoList');
app.use('/todos', indexRoutes);



app.listen(port,()=>{
    console.log(`SERVER LISTENING AT http://localhost:${port}/todos`)
})









