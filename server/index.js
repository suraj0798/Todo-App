const express = require('express');
const connectDB = require('./database');
const todoRoute = require('./routes/todoRoute');
const cors = require('cors');

require ('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000

app.use(express.json({extended: false}));
app.get("/", (req,res) => res.send("Server up and running"))
connectDB();

app.use(cors({origin: true, credentials: true}));


app.use("/api/todo",todoRoute);


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})

