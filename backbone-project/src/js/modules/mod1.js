/**
 * description
 * 定义一个业务模块
 */
define(function(require, exports, module) {

    // load jQuery
    var $ = require("jquery"),
        doc = {};

    doc.dom = $("document")

    //console.log(doc)

    if (typeof module != "undefined" && module.exports) {
        module.exports = doc;

    }
});
