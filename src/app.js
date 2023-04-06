import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
  const {username, avatar} = req.body;
  const newUser = {username, avatar};
  users.push(newUser);
  res.status(201).send('OK');
})

server.get("/tweets", (req, res) => {
  res.send(tweets);
});

const port = 5000;
server.listen(port, () => console.log(`running on port ${port}`));
