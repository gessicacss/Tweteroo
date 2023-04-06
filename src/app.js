import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
  const {username, avatar} = req.body;
  if (!username || !avatar){
    return res.status(400).send('Todos os campos são obrigatórios!')
  }
  if (typeof username !== "string" || typeof avatar !== 'string'){
    return res.status(400).send('Os campos precisam ser uma string!')
  }

  const newUser = {username, avatar};
  users.push(newUser);
  res.status(201).send('OK');
})


server.post('/tweets', (req, res) => {
  const {username, tweet} = req.body;
  const findUser = users.find((u) => u.username === username);
  if (!findUser){
    return res.status(401).send('UNAUTHORIZED');
  }

  if (!tweet || !username){
    return res.status(400).send('Todos os campos são obrigatórios!')
  }

  if (typeof tweet !== 'string'){
    return res.status(400).send('Os campos precisam ser uma string!')
  }

  const newTweet = {username, tweet};
  tweets.push(newTweet);
  res.status(201).send('OK');
})

server.get("/tweets", (req, res) => {
  const latestTweets = tweets.slice(-10);
  latestTweets.forEach((tweet) => {
    const findUser = users.find((u) => u.username === tweet.username);
    tweet.avatar = findUser.avatar;
  })
  res.send(latestTweets);
});

server.get('/tweets/:username', (req, res) => {
  const {username} = req.params;
  const findTweets = tweets.filter((u) => u.username === username);
  res.send(findTweets);
})

const port = 5000;
server.listen(port, () => console.log(`running on port ${port}`));
