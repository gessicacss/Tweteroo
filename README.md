# Tweteroo API

## About

This is a back-end project based on Twitter. 
The API has the objective of providing routes that will allow users to log in, view tweets, and create new tweets.

## Technologies
<p align='center'>
<img style='margin: 2px;' src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'/>
<img style='margin: 2px;' src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'/>
<img style='margin: 2px;' src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'/>
<img style='margin: 2px; width:70px' src='https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white/'>
</p>

## Routes

#### <span style='font-weight:bold;'>POST</span> /sign-up
A route to create a new user account. The request body should be:
```
{
    username: "bobesponja",
	avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png"
}
```

#### <span style='font-weight:bold;'>GET</span> /tweets
A route that will retrieve a list of tweets. The response will come like that:
```
[
	{
		username: "bobesponja",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	}
]
```

#### <span style='font-weight:bold;'>POST</span> /tweets
A request to create new tweets. The request body should be:
```
	{
		username: "bobesponja",
		tweet: "Eu amo hambúrguer de siri!"
	}
```

## How to run

1. Clone this repository
2. Install the dependencies
```
npm i
```
3. Run the back-end with
```
npm start
```
4. Access http://localhost:5000 on your browser to run the API.
