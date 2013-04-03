var Future = require('future');
var request = require('request');
module.exports = function(url, future){
    request.get({url:url, json:true}, function (e, r, d) {
        future.deliver(d);
    });
};
