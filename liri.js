const fs = require('fs');
const KEYS = require('./key');
console.log('deees arrrr mah keeeeys ', KEYS);

let command = process.argv[2];
let commandValue = process.argv[3];
console.log('AI butler fetch me info from', command);
// console.log(command, commandValue);

function retrieve(command) {
  console.log('time to find some shit from', command);
  switch (command) {
    case 'my-tweets': {
      console.log('twitter is logged as the required FS');
      function twitterFeed(tweet, lastTweets) {
        //get the info from the api
        fs.appendFile('./random', tweet, function(err, twitterData){
          if (err) throw err;
          //need 20 tweets and when they were created
          function checkInput() {
          resultNum = 20;


          console.log('tweeter feeder sez:', tweet);
          return twitterData
          break;
        });
      }
    };


    case 'spotify-this-song': {
      console.log('spotify is logged as the required FS');


    }
    case 'movie-this': {
      request("http://www.omdbapi.com/?t="+movie+"&y=&plot=short&apikey=40e9cece", function(error, response, body) {
    //   console.log('spotify is logged as the required FS');
    //
    // }
    // default: {
    //   console.log('Please enter either twitter, spotify & query or OMDB & query to proceed!');
    // }
  };
};

retrieve(command);
