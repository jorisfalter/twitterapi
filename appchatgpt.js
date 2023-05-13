require("dotenv").config(); // Load environment variables from .env file
const Twit = require("twit");

// Authenticate with Twitter API using API keys and access tokens loaded from environment variables
const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

// Post a tweet with desired text
T.post(
  "statuses/update",
  { status: "Hello, world! This is a test tweet." },
  function (err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully posted tweet!");
    }
  }
);
