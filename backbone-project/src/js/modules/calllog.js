/**
 * @description: calllog
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
    var auth = require('mod/auth');
    require('gxdialog');


    var CalllogView = Backbone.View.extend({
        el: $('.MessageView'),
        events: {
            'mouseover .menu-hover': function() {
                $('.menu-layer').show();
            },
            'mouseleave .menu-layer': function(){
                $('.menu-layer').hide();
            },
            //关闭浮动层
            'click .cloud-container':function(){
                $('.float-menu').hide();
            },
            'click .group-item': 'groupItemClickHandler'

        },
        initialize: function() {
            this.groupIndex = 0;
            this.render();
        },
        render: function(){
            var _this = this;
            doT.static('/templates/calllog.html', function(html) {
                _this.$el.html(html);
                _this.$el.show();
                header.render();
                _this.showList();
            });
            return _this;
        },
        showList: function(index) {
            this.groupIndex = index || this.groupIndex;
            $.when($.ajax({
                url: appapi.calllog.list,
                data: {
                    passportId: auth.getUser().id
                }
            })).done(function(result){
                var tpl = $('#record-item-tpl').html();
                var tplFun = doT.template(tpl);
                result = result || [];
                $('#record-data-container').html(tplFun(result));
            }).fail(function(err){
                //showAlert('数据加载失败');
            })

        },
        groupItemClickHandler: function(e){
            var el = $(e.target);
            this.showList(el.attr('data-index'));
        }

    });

    function showAlert(msg) {
        $.gxDialog({
            title:'提示',
            width: 200,
            info: msg,
            oktext: '确定',
            ok:function(){}
        });
    }
    module.exports = CalllogView;
});
