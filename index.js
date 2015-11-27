var loaderUtils = require("loader-utils");
var glob = require("glob");
var path = require("path");

module.exports = function(content, sourceMap) {
	this.debug && console.log(glob.sync(content.trim()));
	var query =  loaderUtils.parseQuery(this.query);
	return "module.exports = " + JSON.stringify(glob.sync(content.trim()).map(function (item,index) {
				return query.publicPath + "/" + path.relative(query.root,item);
			}));
};
