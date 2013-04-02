
var Future = require('future');

var ShopSense = (function () {

    var _partnerID = null;
    var _apiVersion = null;
    var _apiUrlBaseOptions = null;
    var _httpclient = function(){ return null; };

    /**
     * `ShopSense` constructor.
     *
     * @api public
     */
    var ShopSense = function(pid, apiVer, httpclient) {
        var self = this;
        self.shopsense = {};
        _partnerID = pid;
        _apiVersion = apiVer;
        _apiUrlBaseOptions = {
            host: 'http://api.shopstyle.com',
            path: '/api/' + _apiVersion + '/'
        };
        _httpclient = httpclient;
        
        self.shopsense.pid = _partnerID;
        self.shopsense.ver = _apiVersion;
        
        
        self.shopsense.brands = function() {
            return self.brands.call(self);
        };
        self.shopsense.categories = function(cat, depth) {
            return self.categories.call(self, cat, depth);
        };
        self.shopsense.colors = function() {
            return self.colors.call(self);
        };
        self.shopsense.product = function(id) {
            return self.product.call(self, id);
        };
        self.shopsense.productSearch = function(fts, offset, limit) {
            return self.productSearch.call(self, fts, offset, limit);
        };
        self.shopsense.productsHistogram = function(filters, flr) {
            return self.productsHistogram.call(self, filters, flr);
        };
        self.shopsense.retailers = function() {
            return self.retailers.call(self);
        };
        
        return self.shopsense;
    };





    ShopSense.prototype = {
        constructor: ShopSense,
        brands: function() {
            var brandsPath = 'brands?pid=' + _partnerID + '&';
            var urlPath = _apiUrlBaseOptions.path + brandsPath;
            var httpOptions = {
                host: _apiUrlBaseOptions.host,
                path: urlPath
            };
            var future = this._get(httpOptions);
            return future;
        },
        categories: function(cat, depth) {
            var categoriesPath = 'categories?pid=' + _partnerID + '&';
            var urlPath = _apiUrlBaseOptions.path + categoriesPath;
            if(cat){
                urlPath += 'cat=' + cat + '&';
            }    
            if(depth){
                urlPath += 'depth=' + depth + '&';    
            }
            
            var httpOptions = {
                host: _apiUrlBaseOptions.host,
                path: urlPath
            };
            var future = this._get(httpOptions);
            return future;
        },
        colors: function() {
            var colorsPath = 'colors?pid=' + _partnerID + '&';
            var urlPath = _apiUrlBaseOptions.path + colorsPath;
          
            var httpOptions = {
                host: _apiUrlBaseOptions.host,
                path: urlPath
            };
            var future = this._get(httpOptions);
            return future;
        },
        _get: function(httpOptions){
            var future = new Future();
            _httpclient(httpOptions, future);
            return future;
        },
        product: function(id) {
            if(id){
                var productPath = 'products/' + id + '?pid=' + _partnerID + '&';
                var urlPath = _apiUrlBaseOptions.path + productPath;
            }
            
            var httpOptions = {
                host: _apiUrlBaseOptions.host,
                path: urlPath
            };
            var future = this._get(httpOptions);
            return future;
        },
        productSearch: function(fts, offset, limit) {
            var productsPath = 'products?pid=' + _partnerID + '&';
            var urlPath = _apiUrlBaseOptions.path + productsPath;
            if(fts){
                urlPath += 'fts=' + encodeURIComponent(fts) + '&';
            }    
            if(offset){
                urlPath += 'offset=' + offset + '&';    
            }
            if(limit){
                urlPath += 'limit=' + limit + '&';
            }
            
            var httpOptions = {
                host: _apiUrlBaseOptions.host,
                path: urlPath
            };
            var future = this._get(httpOptions);
            return future;
        },
        productsHistogram: function(filters, flr) {
            var productsPath = 'products/histogram?pid=' + _partnerID + '&';
            var urlPath = _apiUrlBaseOptions.path + productsPath;
            if(filters){
                urlPath += 'filters=' + encodeURIComponent(filters) + '&';
            }    
            if(flr){
                urlPath += 'floor=' + flr + '&';    
            }
            
            var httpOptions = {
                host: _apiUrlBaseOptions.host,
                path: urlPath
            };
            var future = this._get(httpOptions);
            return future;
        },
        retailers: function() {
            var retailersPath = 'retailers?pid=' + _partnerID + '&';
            var urlPath = _apiUrlBaseOptions.path + retailersPath;
          
            var httpOptions = {
                host: _apiUrlBaseOptions.host,
                path: urlPath
            };
            var future = this._get(httpOptions);
            return future;
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
