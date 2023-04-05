import express from "express";
import cors from "cors";

const server = express();
server.use(cors());

server.get("/tweets", (req, res) => {
  const tweets = [
    {
      username: "bobesponja",
      avatar:
        "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
      tweet: "Eu amo hambúrguer de siri!",
    },
    {
      username: "oi",
      avatar:
        "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
      tweet: "oie!",
    },
  ];
  res.send(tweets);
});

const port = 5000;
server.listen(port, () => console.log(`running on port ${port}`));