const express = require("express");


const app = express();


const port = 5000;

// importing the userRouter
const UserRouter = require("./routers/UserRouter");
const cors = require('cors')


// to allow react frontend to access the backend
app.use(cors({origin : 'http://localhost:3000' }));


//to parse json data
app.use(express.json());


//middlewares - to intercept the request
app.use('/user', UserRouter);


app.get("/home", (req, res) => {
  res.send("Hello express");
});


// starting the server
app.get(port, () => {
  console.log("the server has started");
});

app.listen(port, () => {
  console.log('server started');
})