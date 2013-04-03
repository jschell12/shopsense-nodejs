var ShopSense = require("../lib/shopsense.js").ShopSense;
var httpClient = require("../lib/httpclient.js");

var pid = 'uid4384-22459372-1';
var apiVersion = 'v2';
var ss = new ShopSense(pid, apiVersion, httpClient);
/*
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
*/
