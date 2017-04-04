var request = require('request');

var urlToShorten = process.argv[2];

var data = {'longUrl' : urlToShorten}

var url = 'https://www.googleapis.com/urlshortener/v1/url' + '?key=AIzaSyC8qx_Gk5BQIGloLt6dezSs6QYnAIYcyDU';

var options = {
  uri: url,
  method: 'POST',
  json: data,
}

request(options, function(error, response, body){
  console.log(body);
});
