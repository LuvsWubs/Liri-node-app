// require the package you need
var Twitter = require('twitter');

// create a variable that is assigned to a function
/**
  @var twitter function that has our awesome methods attached
  @param keys is our keys that we pass in from the liri.js file
*/
var twitter = function (keys) {
  //instansiate a new Twitter Object and assign it to the var client
  var client = new Twitter(keys);

  // attach a method called getMyTweets to "this" so its attached to our object
  // when we export
  this.getMyTweets = function(){

    // our params object we pass to our get method;
    var params = {screen_name: 'iydkwtmiwt'};

    // the get method comes from the Twitter Package from npm.
    // because you instansiated the client with a new Twitter() object
    // client now enjoys all the methods that the Twitter object has
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          // if no error happend go ahead and do some sweet stuff
          // tweets is an array so we have to map or loop over each tweet
          // to get our individual tweet object and can access each property
           tweets.map(function(tweet) {
             console.log("our tweets", tweet.created_at, tweet.text);
           })
        }
    });
  }

};

// export the var you declared up top that has all your sweet methods attached
// to it.

module.exports = twitter;
