var nock = require('nock');
Future = require('future');
var ShopSense = require("../lib/shopsense.js").ShopSense;

module.exports = {
    setUp: function (callback) {
        callback();
    },
    tearDown: function (callback) {
        // clean up
        callback();
    },
    'Testing ShopSense constructor' : function(test) {
        
        var pid = 'uid4384-22459372-1';
        var apiVersion = 'v2';
        var ss = new ShopSense(pid, apiVersion);
    
        test.equal(ss.pid, pid, "_partnerID set");
        test.equal(ss.ver, apiVersion, "_apiVersion set");
        test.done();
    },
    'Testing ShopSense brands' : function(test){
        var pid = 'uid4384-22459372-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
       
        var future = ss.brands();
        var host = 'http://api.shopstyle.com';
        var path = '/api/v2/brands?pid=uid4384-22459372-1&';
        future.when (function (options, data) {
            test.equal(options.host, host, "brands host ok");
            test.equal(options.path, path, "brands path ok");
            test.equal(data, testData, "brands data ok");
            test.done();
        });
    },
    'Testing ShopSense categories' : function(test){
        var pid = 'uid4384-22459372-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
    
        var cat = 2, depth = 1;
        var future = ss.categories(cat, depth);
        var host = 'http://api.shopstyle.com';
        var path = '/api/v2/categories?pid=uid4384-22459372-1&cat=2&depth=1&';
        future.when (function (options, data) {
            test.equal(options.host, host, "categories host ok");
            test.equal(options.path, path, "categories path ok");
            test.equal(data, testData, "categories data ok");
            test.done();
        });
    },
    'Testing ShopSense colors' : function(test){
        var pid = 'uid4384-22459372-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
       
        var future = ss.colors();
        var host = 'http://api.shopstyle.com';
        var path = '/api/v2/colors?pid=uid4384-22459372-1&';
        future.when (function (options, data) {
            test.equal(options.host, host, "colors host ok");
            test.equal(options.path, path, "colors path ok");
            test.equal(data, testData, "colors data ok");
            test.done();
        });
    },
    'Testing ShopSense products' : function(test){
        var pid = 'uid4384-22459372-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        var testId = "12345";
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
       
        var future = ss.product(testId);
        var host = 'http://api.shopstyle.com';
        var path = '/api/v2/products/12345?pid=uid4384-22459372-1&';
        future.when (function (options, data) {
            test.equal(options.host, host, "product host ok");
            test.equal(options.path, path, "product path ok");
            test.equal(data, testData, "product data ok");
            test.done();
        });
    },
    'Testing ShopSense productsSearch' : function(test){
        var pid = 'uid4384-22459372-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        var fts = "red dress";
        var offset = "0";
        var limit = "10";
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
       
        var future = ss.productSearch(fts, offset, limit);
        var host = 'http://api.shopstyle.com';
        var path = '/api/v2/products?pid=uid4384-22459372-1&fts=red%20dress&offset=0&limit=10&';
        future.when (function (options, data) {
            test.equal(options.host, host, "productSearch host ok");
            test.equal(options.path, path, "productSearch path ok");
            test.equal(data, testData, "productSearch data ok");
            test.done();
        });
    },
    'Testing ShopSense productsHistogram' : function(test){
        var pid = 'uid4384-22459372-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        var filters = "red dress";
        var flr = "0";
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
       
        var future = ss.productsHistogram(filters, flr);
        var host = 'http://api.shopstyle.com';
        var path = '/api/v2/products/histogram?pid=uid4384-22459372-1&filters=red%20dress&floor=0&';
        future.when (function (options, data) {
            test.equal(options.host, host, "productsHistogram host ok");
            test.equal(options.path, path, "productsHistogram path ok");
            test.equal(data, testData, "productsHistogram data ok");
            test.done();
        });
    },
    'Testing ShopSense retailers' : function(test){
        var pid = 'uid4384-22459372-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
       
        var future = ss.retailers();
        var host = 'http://api.shopstyle.com';
        var path = '/api/v2/retailers?pid=uid4384-22459372-1&';
        future.when (function (options, data) {
            test.equal(options.host, host, "retailers host ok");
            test.equal(options.path, path, "retailers path ok");
            test.equal(data, testData, "retailers data ok");
            test.done();
        });
    }
};
