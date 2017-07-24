let spotified = require('node-spotify-api');

var spotify = function(keys) {
  var musicClient = new spotified(keys);
  this.findMySong = function(commandValue) {
    var song = commandValue || "The Sign, Ace of Base";
    musicClient.search({ type: 'track', query: song }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        };
        data.tracks.items.map(function(songValue) {
          var responseObj = {};
          responseObj.artist = songValue.artists[0].name;
          responseObj.name = songValue.name;
          responseObj.albums = songValue.album.name;
          responseObj.preview = songValue.preview_url;

          console.log(responseObj);
        });
    });
  }
};

module.exports = spotify;
