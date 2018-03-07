// twitter liberry
const Twitter = require('twitter');
// twitter api key
const apiKeys = require('./keys.js')
// instent nwe twitter client with apikey
var client = new Twitter(apiKeys);

// funcation my tweets
function myTweets(){
    var params = {screen_name: 'zoin_kid'};
    client.get('lists/show', params, function(error, tweets, response) {
        console.log("respond statuscode: ", response);
      if (!error) {
        console.log("am tweets: ", tweets);
        return tweets;
      }
    });
}
 module.exports = myTweets();