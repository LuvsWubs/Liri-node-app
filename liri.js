const fs = require('fs');
// we need our keys!
const keys = require('./key');
// grab our awesome twitter object
const Tweeterpated = require('./app/twitter');
const Spotifeed = require('./app/spotify');
const omdb = require('./app/omdb');
// create a new instance of the Tweeterpated Object which is equal to our twitter
// object that we exported from our twitter.js
// myTwitter is now our awesome twitter object we created and now enjoys
// access to our sweet getMyTweets method
let myTwitter = new Tweeterpated(keys.twitterKeys);
let mySpotify = new Spotifeed(keys.spotifyKey);
let myOmdb = new omdb(keys.OMDBkey);

let command = process.argv[2];
let commandValue = process.argv[3];
// console.log('AI butler fetch me info from', myTwitter);
// console.log(command, commandValue);

function retrieve(command) {
  switch (command) {
    case 'my-tweets': {
      myTwitter.getMyTweets();
      };
      break;
    case 'spotify-this-song': {
      mySpotify.findMySong(commandValue);
    };
    case 'movie-this': {
      myOmdb.findMyMovie(commandValue);
    }
    break;
      default:
        return
    };
  };

retrieve(command);
