var request = require('request');
require('dotenv').config()


var urlToShorten = process.argv[2];

var data = {'longUrl' : urlToShorten}

var url = 'https://www.googleapis.com/urlshortener/v1/url' + '?key=' + process.env.API_KEY;

var options = {
  uri: url,
  method: 'POST',
  json: data,
}

request(options, function(error, response, body){
  console.log(body);
});
