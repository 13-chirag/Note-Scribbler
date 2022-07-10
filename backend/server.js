const notes = require("../frontend/src/data/notes");
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const noteRoutes = require("./routes/noteRoutes")



//server
// to bring in packages
const express = require("express");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

//to create object of express
const app = express()

// creating web server
// app.listen(5000, console.log("server started on port 5000"))

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));






//creating API
// whenever we try to fetch data from database or backend  the api is the route on which data is served

//we are hving request and response variables.
// '/' is the endpoint
// app.get('/', (req, res) => {
//     res.send("API is running...");
// });

//another api endpoint
//this time requesting notes (/api/notes), then it goes to backend and then backend serves data from express to frontend
// app.get('/api/notes', (req, res) => {
//     res.json(notes);
// })
//and also import notes object from notes.js



//creating another endpoint
//to fetch only 1 single node

//params is what we put in url
//if 'id' matches to params.id , then it will return the node inside 'note' variable

/*app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);
})*/



//dotenv

//first import the package
dotenv.config();

//then make changes in port in app.listen



//mongodb
connectDB();

app.use(express.json());  //to accept data from backend

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);



app.use(notFound);
app.use(errorHandler);
//another api endpoint




