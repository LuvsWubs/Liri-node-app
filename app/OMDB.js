let request = require('request');

var movie = function(keys) {
  this.findMyMovie = function(commandValue) {
    var movieSearch = commandValue || "Mr. Nobody";

    request(`http://www.omdbapi.com/?t=${movieSearch}&tomatoes=true&apikey=${keys.apikey}`, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
  };
};
// * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
//   * Rotten Tomatoes URL.

module.exports = movie;
