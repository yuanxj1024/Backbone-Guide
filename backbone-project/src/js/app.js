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

    String.prototype.format = function(args) {
        var result = this;
        if (arguments.length > 0) {
            if (arguments.length == 1 && typeof (args) == "object") {
                for (var key in args) {
                    if(args[key]!=undefined){
                        var reg = new RegExp("({" + key + "})", "g");
                        result = result.replace(reg, args[key]);
                    }
                }
            }
            else {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] != undefined) {
                        //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                        var reg= new RegExp("({)" + i + "(})", "g");
                        result = result.replace(reg, arguments[i]);
                    }
                }
            }
        }
        return result;
    };
    var num = window.num = 1;
    var lock = window.lock = false;
    window.dropList = function(){
        $('.yun-user').hover(function() {
            $('.hd-drop-list').show();
        }, function() {
            $('.hd-drop-list').hide();

        });
    };
    window.signOut = function($elem){
        $elem.on('click', function(e) {
            e.preventDefault();
            $.gxDialog({
                title: '确认注销',
                width: 400,
                info: '确定注销云服务吗？',
                ok: function(){
                    $.when($.ajax({
                        url: AppApi.account.logout
                    })).then(function(){
                        auth.setUser({});
                        window.App.Views.go('login');
                    }).fail(function(){
                        auth.setUser({});
                        window.App.Views.go('login');
                    });
                },
                no: function(){
                }

            });
        });
    };

});
