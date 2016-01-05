/**
 * @description: agreement
 * @author: lixinwei
 * @version: V1
 * @update: 15/9/28
 */

define(function (require, exports, module) {

    var $ = require('jquery'),
        Backbone = require('backbone'),
        doT = require('doT');


    var agreementView = Backbone.View.extend({
        el: $('.agreementView'),
        initialize: function() {
            this.render();
        },
        render: function(){
            var _self = this;
            doT.static('/templates/agreement.html', function(html) {
                _self.$el.html(html);

            });
        }
    });

    module.exports = agreementView;
});
