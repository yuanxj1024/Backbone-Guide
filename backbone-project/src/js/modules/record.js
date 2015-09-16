/**
 * @description: record
 * @author: GX-F2E
 * @version: V1
 * @update: 15/8/31
 */

define(function (require, exports, module) {
    var $ = jQuery = require("jquery");
    var _ = require('underscore');
    var Backbone = require("backbone");
    var doT = require("doT");
    var validate = require("jquery/jquery-validate");
    var appapi = require("mod/api-config");
    var header = require('mod/inner-page-header').instance;

    console.log(AppApi.login.check);

    var RecordView = Backbone.View.extend({
        el: $('.MessageView'),
        events: {
            'mouseover .menu-hover': function() {
                $('.menu-layer').show();
            },
            'mouseleave .menu-layer': function(){
                $('.menu-layer').hide();
            }

        },
        initialize: function() {
            this.render();
        },
        register:function(e){
            e.preventDefault();
            console.log("api");
            return this;
        },
        render: function(){
            var _this = this;

            doT.static('/templates/record.html', function(html) {
                _this.$el.html(html);
                _this.$el.show();
                header.render();
            });

            return _this;
        }

    });


    module.exports = RecordView;
});
