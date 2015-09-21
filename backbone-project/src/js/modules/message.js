/**
 * @description: message
 * @author: GX-F2E
 * @version: V1
 * @update: 15/8/31
 */

define(function (require, exports, module) {
    var $ = jQuery = require('jquery');
    var _ = require('underscore');
    var Backbone = require("backbone");
    var doT = require("doT");
    var validate = require("jquery/jquery-validate");
    var appapi = require("mod/api-config");
    var header = require('mod/inner-page-header').instance;
    require('gxdialog');

    var MessageView = Backbone.View.extend({
        el: $('.MessageView'),
        events: {
            'mouseover .menu-hover': function() {
                $('.menu-layer').show();
            },
            'mouseleave .menu-layer': function(){
                $('.menu-layer').hide();
            },
            'click .message-item': 'msgItemClickHandler',
        },
        initialize: function() {
            this.render();
        },
        render: function(){
            var _this = this;
            doT.static('/templates/message.html', function(html) {
                _this.$el.html(html);
                _this.$el.show();
                header.render();
                _this.loadData();
            });

            return _this;
        },

        loadData: function() {
            $.ajax({
                method: 'GET',
                url: appapi.message.group,
                data: {
                    //passportId: 1
                },
                success: function(result){
                    result = [
                        {
                            id: 0,
                            name: '10086',
                            message: '温馨提示：您的话费余额不足，请尽快充值。如已经充值如已经充值请如已经充值请',
                            time: new Date()
                        },
                        {
                            id: 0,
                            name: 'aaron',
                            message: '温馨提示：您的话费余额不足，请尽快充值。如已经充值如已经充值请如已经充值请',
                            time: new Date()
                        }
                    ];
                    var tpl = $('#msg-list-tpl').html();
                    var tplFun = doT.template(tpl);
                    $('.message-listbox').html(tplFun(result));
                },
                error: function(err){
                    $('.message-listbox').html(tplFun([]));
                }
            });

        },
        showMenu: function() {
            $('.menu-layer').show();
        },
        msgItemClickHandler: function(e){
            var el = $(e.target).parents('.message-item');
            this.showDialogList({
                id: el.attr('data-id'),
                name: el.attr('data-name')
            });
        },
        //显示来往短信
        showDialogList: function(user) {
            var self = this;
            var tpl = $('#msg-record-tpl').html();
            var tplFun = doT.template(tpl);

            $.when($.ajax({
                url: appapi.message.dialog,
                data: {
                    id: user.id
                }
            })).done(function(result){
                if(result && typeof result == 'string'){
                    result = JSON.parse(result);
                }
                if(result && result.data.length > 0){
                    $('#msg-dialog-container').html(tplFun({
                        to: user,
                        list: result.data
                    }));
                }else {
                    $('#msg-dialog-container').html(tplFun({
                        to: user,
                        list: []
                    }));
                }
            }).fail(function(err){
                //showAlert('数据加载失败，请稍后重试!');
                var html = tplFun({
                    to: user,
                    list: []
                });
                $('#msg-dialog-container').html(html);
            });
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

    module.exports = MessageView;
});
