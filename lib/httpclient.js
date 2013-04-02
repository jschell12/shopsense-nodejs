var http = require('http');
module.exports = function(future){
    http.request(httpOptions, function(response) {
        var str = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            future.deliver(data);
        });
    }).end();
} 
