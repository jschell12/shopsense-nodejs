var Future = require('future');
var httpClient = require("./httpclient.js");

var ShopSense = (function () {

    var _partnerId = null;
    var _apiVersion = null;
    var _apiUrlBaseOptions = null;
    var _httpClient = function(){ return null; };
    var _isLogging = false;

    /**
     * `ShopSense` constructor.
     *
     * @api public
     */
    var ShopSense = function(pid, apiVer, client) {
        var self = this;
        self.shopsense = {};
        _partnerId = pid;
        _apiVersion = apiVer;
        _apiUrlBaseOptions = {
            host: 'http://api.shopstyle.com',
            path: '/api/' + _apiVersion + '/'
        };
        
        if(client){
            _httpClient = client;
        }else{
            _httpClient = httpClient;
        }
        
        self.shopsense.pid = _partnerId;
        self.shopsense.ver = _apiVersion;        
        
        self.shopsense.brands = function() {
            return self.brands.call(self);
        };
        self.shopsense.categories = function(params) {
            return self.categories.call(self, params);
        };
        self.shopsense.colors = function() {
            return self.colors.call(self);
        };
        self.shopsense.product = function(id) {
            return self.product.call(self, id);
        };
        self.shopsense.productSearch = function(params) {
            return self.productSearch.call(self, params);
        };
        self.shopsense.productsHistogram = function(params) {
            return self.productsHistogram.call(self, params);
        };
        self.shopsense.retailers = function() {
            return self.retailers.call(self);
        };


        self.shopsense.isLogging = function(isLogging) {
            _isLogging = isLogging;
        };
        
        return self.shopsense;
    };

    ShopSense.prototype = {
        constructor: ShopSense,
        brands: function() {
            var brandsPath = 'brands?pid=' + _partnerId;
            var urlPath = _apiUrlBaseOptions.path + brandsPath;
            var url = _apiUrlBaseOptions.host + urlPath;
            var future = this._get(url);
            return future;
        },
        categories: function(params) {
            var categoriesPath = 'categories?pid=' + _partnerId + '&';
            var urlPath = _apiUrlBaseOptions.path + categoriesPath;
            var url = _apiUrlBaseOptions.host + urlPath;
            var future = this._get(url, params);
            return future;
        },
        colors: function() {
            var colorsPath = 'colors?pid=' + _partnerId;
            var urlPath = _apiUrlBaseOptions.path + colorsPath;
          
            var url = _apiUrlBaseOptions.host + urlPath;
            var future = this._get(url);
            return future;
        },
        _get: function(url, params){
            var future = new Future();
            url += this._toURLParams(params);
            this._log(url);
            _httpClient(url, future);
            return future;
        },
        _isArray: function(what){
            return Array.isArray(what);
        },
        _log: function(dataToLog){
            if(_isLogging){
                console.log(dataToLog);
            }
        },
        product: function(id) {
            if(id){
                var productPath = 'products/' + id + '?pid=' + _partnerId;
                var urlPath = _apiUrlBaseOptions.path + productPath;
            }
            
            var url = _apiUrlBaseOptions.host + urlPath;
            var future = this._get(url);
            return future;
        },
        productSearch: function(params) {
            var productsPath = 'products?pid=' + _partnerId + '&';
            var urlPath = _apiUrlBaseOptions.path + productsPath;
            var url = _apiUrlBaseOptions.host + urlPath;
            var future = this._get(url, params);
            return future;
        },
        productsHistogram: function(params) {
            var productsPath = 'products/histogram?pid=' + _partnerId + '&';
            var urlPath = _apiUrlBaseOptions.path + productsPath;
            var url = _apiUrlBaseOptions.host + urlPath;
            var future = this._get(url, params);
            return future;
        },
        retailers: function() {
            var retailersPath = 'retailers?pid=' + _partnerId;
            var urlPath = _apiUrlBaseOptions.path + retailersPath;
          
            var url = _apiUrlBaseOptions.host + urlPath;
            var future = this._get(url);
            return future;
        },
        _toURLParams: function(obj) {
            var parts = [];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var item = obj[key];
                    if (this._isArray(item)) {
                        for (var i = 0; i < item.length; i++) {
                            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(item[i]));
                        }
                    } else {
                        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(item));
                    }
                }
            }
            return parts.join('&');
        }
    };
    
    return ShopSense;
}());

/**
 * Export default singleton.
 *
 * @api public
 */
exports = module.exports = new ShopSense();

/**
 * Expose constructors.
 */
exports.ShopSense = ShopSense;
