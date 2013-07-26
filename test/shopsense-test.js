var ShopSense = require("../src/shopsense.js").ShopSense;


module.exports = {
    setUp: function (callback) {
        callback();
    },
    tearDown: function (callback) {
        callback();
    },
    'Testing ShopSense constructor' : function(test) {
        
        var pid = 'uid1234-12341234-1';
        var apiVersion = 'v2';
        var ss = new ShopSense(pid, apiVersion);
    
        test.equal(ss.pid, pid, "_partnerID set");
        test.equal(ss.ver, apiVersion, "_apiVersion set");
        test.done();
    },
    'Testing ShopSense brands' : function(test){
        var pid = 'uid1234-12341234-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            console.log("\n" + options + "\n");
            future.deliver(options, testData);
        });
       
        var future = ss.brands();
        var urlActual = 'http://api.shopstyle.com/api/v2/brands?pid=uid1234-12341234-1';
        future.when (function (url, data) {
            test.equal(url, urlActual, "brands url ok");
            test.equal(data, testData, "brands data ok");
            test.done();
        });
    },
    'Testing ShopSense categories' : function(test){
        var pid = 'uid1234-12341234-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
    
        var params = {
            cat: 2, 
            depth: 1        
        };
        var future = ss.categories(params);
        var urlActual = 'http://api.shopstyle.com/api/v2/categories?pid=uid1234-12341234-1&cat=2&depth=1';
        future.when (function (url, data) {
            test.equal(url, urlActual, "categories url ok");
            test.equal(data, testData, "categories data ok");
            test.done();
        });
    },
    'Testing ShopSense colors' : function(test){
        var pid = 'uid1234-12341234-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
       
        var future = ss.colors();
        var urlActual = 'http://api.shopstyle.com/api/v2/colors?pid=uid1234-12341234-1';
        future.when (function (url, data) {
            test.equal(url, urlActual, "colors url ok");
            test.equal(data, testData, "colors data ok");
            test.done();
        });
    },
    'Testing ShopSense products' : function(test){
        var pid = 'uid1234-12341234-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        var testId = "12345";
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
       
        var future = ss.product(testId);
        var urlActual = 'http://api.shopstyle.com/api/v2/products/12345?pid=uid1234-12341234-1';
        future.when (function (url, data) {
            test.equal(url, urlActual, "product url ok");
            test.equal(data, testData, "product data ok");
            test.done();
        });
    },
    'Testing ShopSense productsSearch' : function(test){
        var pid = 'uid1234-12341234-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        
        var params = {
            fts: "red dress",
            offset: "0",
            limit: "10"
        };
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
       
        var future = ss.productSearch(params);
        var urlActual = 'http://api.shopstyle.com/api/v2/products?pid=uid1234-12341234-1&fts=red%20dress&offset=0&limit=10';
        future.when (function (url, data) {
            test.equal(url, urlActual, "productSearch url ok");
            test.equal(data, testData, "productSearch data ok");
            test.done();
        });
    },
    'Testing ShopSense productsSearch with one filter' : function(test){
        var pid = 'uid1234-12341234-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        
        var params = {
            fts: "red dress",
            fl: [
                "b123"
            ],
            offset: "0",
            limit: "10"
        };
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
       
        var future = ss.productSearch(params);
        var urlActual = 'http://api.shopstyle.com/api/v2/products?pid=uid1234-12341234-1&fts=red%20dress&fl=b123&offset=0&limit=10';
        future.when (function (url, data) {
            test.equal(url, urlActual, "productSearch url ok");
            test.equal(data, testData, "productSearch data ok");
            test.done();
        });
    },

    'Testing ShopSense productsSearch with multiple filters' : function(test){
        var pid = 'uid1234-12341234-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        
        var params = {
            fts: "red dress",
            fl: [
                "b123",
                "r321"
            ],
            offset: "0",
            limit: "10"
        };
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
       
        var future = ss.productSearch(params);
        var urlActual = 'http://api.shopstyle.com/api/v2/products?pid=uid1234-12341234-1&fts=red%20dress&fl=b123&fl=r321&offset=0&limit=10';
        future.when (function (url, data) {
            test.equal(url, urlActual, "productSearch url ok");
            test.equal(data, testData, "productSearch data ok");
            test.done();
        });
    },
    'Testing ShopSense productsHistogram' : function(test){
        var pid = 'uid1234-12341234-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        var params = {
            filters: "red dress",
            floor: "0"
        };
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
       
        var future = ss.productsHistogram(params);
        var urlActual = 'http://api.shopstyle.com/api/v2/products/histogram?pid=uid1234-12341234-1&filters=red%20dress&floor=0';
        future.when (function (url, data) {
            test.equal(url, urlActual, "productsHistogram url ok");
            test.equal(data, testData, "productsHistogram data ok");
            test.done();
        });
    },
    'Testing ShopSense retailers' : function(test){
        var pid = 'uid1234-12341234-1';
        var apiVersion = 'v2';
        
        var testData = {"test":"test"};
        var ss = new ShopSense(pid, apiVersion, function(options, future){
            future.deliver(options, testData);
        });
       
        var future = ss.retailers();
        var urlActual = 'http://api.shopstyle.com/api/v2/retailers?pid=uid1234-12341234-1';
        future.when (function (url, data) {
            test.equal(url, urlActual, "retailers url ok");
            test.equal(data, testData, "retailers data ok");
            test.done();
        });
    }
};
