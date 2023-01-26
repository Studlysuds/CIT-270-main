const express = require ("express");

const app = express();

const port = 3000;

const bodyParser = require ('body-parser');

const Redis = require ('redis');

const redisClient = Redis.createClient({url:"redis://127.0.0.1:6379"});

app.use(bodyParser.json()); //This looks for incoming data

app.get("/", (req, res)=> {
    res.send("Hello Micah");
});

app.post('/login', (req, res) =>{
    const loginUser = req.body.userName;
    console.log('Login username: '+loginUser);
    res.send('Hello '+loginUser);
});

app.listen(port, () =>{
    redisClient.connect();
    console.log("Listening");
});