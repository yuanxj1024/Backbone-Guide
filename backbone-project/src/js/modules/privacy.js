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


    var privacyView = Backbone.View.extend({
        el: $('.privacyView'),
        initialize: function() {
            this.render();
        },
        render: function(){
            var _self = this;
            doT.static('/templates/privacy_agreement.html', function(html) {
                _self.$el.html(html);

            });
        }
    });

    module.exports = privacyView;
});
