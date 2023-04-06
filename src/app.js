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


server.post('/tweets', (req, res) => {
  const {username, tweet} = req.body;
  const findUser = users.find((u) => u.username === username);
  if (!findUser){
    res.status(401).send('UNAUTHORIZED');
    return
  }
  const avatar = findUser.avatar;
  const newTweet = {username, tweet, avatar};
  tweets.push(newTweet);
  res.status(201).send('OK');
})

server.get("/tweets", (req, res) => {
  const latestTweets = tweets.slice(-10);
  res.send(latestTweets);
});

const port = 5000;
server.listen(port, () => console.log(`running on port ${port}`));
