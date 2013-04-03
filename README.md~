# shopsense-nodejs - A nodejs interface for the ShopSense API

### Description

This package provides an easy to use interface for the
[ShopStyle API](https://shopsense.shopstyle.com/page/ShopSenseHome) commonly known as ShopSense.
shopsense-nodejs makes it convenient to access the [ShopStyle API](https://shopsense.shopstyle.com/page/ShopSenseHome) from your nodejs application.

## Installation

Install the nodejs package:

    $ npm install shopsense-nodejs

Include it in you nodejs application:

    var ss = require("shopsense");

## Examples

    var ShopSense = require("shopsense");
    var request = require('request');
    
    var httpClient = function(url, future){
        request.get({url:url, json:true}, function (e, r, d) {
            future.deliver(d);
        });
    };

    var pid = 'uid4384-22459372-1';
    var apiVersion = 'v2';
    var ss = new ShopSense(pid, apiVersion, httpClient);

    console.log(" ");
    console.log("brands");
    ss.brands().when(function(d){
        console.log(d.brands[0]);
    });

    console.log(" ");
    console.log("categories");
    ss.categories({
        cat: "mens-clothes",
        depth: "3"
    }).when(function(d){
        console.log(d.categories[0]);
    });

    console.log(" ");
    console.log("colors");
    ss.colors().when(function(d){
        console.log(d.colors[0]);
    });

    console.log(" ");
    console.log("product");
    ss.product(359131344).when(function(d){
        console.log(d);
    });

    console.log(" ");
    console.log("productSearch");
    ss.productSearch({
        fts: "red dress",
        offset: "0",
        limit: "10"
    }).when(function(d){
        console.log(d.products[0]);
    });

    console.log(" ");
    console.log("productsHistogram");
    ss.productsHistogram({
        filters: "Brand",
        floor: "0"
    }).when(function(d){
        console.log(d.brandHistogram[0]);
    });

    console.log(" ");
    console.log("retailers");
    ss.retailers().when(function(d){
        console.log(d.retailers[0]);
    });

## Documentation
Will update this section or add some wiki pages when the package has been completed.

## Bugs

Please report any bugs found in sopsense-nodejs [here](https://github.com/jschell12/shopsense-nodejs/issues). I appreciate your help improving shopsense-nodejs


### Suggestions
If you have suggestions please contact me at jschell12@gmail.com.
