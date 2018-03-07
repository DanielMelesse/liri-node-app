const request = require('request');
const apiKeys = require('./keys.js')
const Twitter = require('twitter');
const cmdRequest = process.argv[2];

// console.log(apiKeys);

// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('body:', body); // Print the HTML for the Google homepage.
// });
var client = new Twitter(apiKeys);
// var myTweets = require("./myTweets.js");

// my get the last tweets.
function myTweets(){
    var params = {screen_name: 'zoin_kid'};
    client.get('lists/show', params, function(error, tweets, response) {
        console.log("respond statuscode: ", response);
      if (!error) {
        console.log("am tweets: ", tweets);
      }
    });
}
// myTweets();



var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "1f6acf51e4554e4ea03c890ebf85667b",
  secret: "6294fdd14a314ced8f778c2a96907673"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
