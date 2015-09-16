/**
 * @description: app
 * @author: lixinwei
 * @version: V1
 * @update: 15/8/18
 */

define(function(require, exports, module) {

    var $ = jQuery = require("jquery"),
        Backbone = require("backbone"),
        auth = require('mod/auth');
    require('cookie');

    $(function(){
        window.App.host = 'http://yun252.boyu.com';

    });


    Date.prototype.format = function(format) {
        var date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                    ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    };
    format = window.format;


});
