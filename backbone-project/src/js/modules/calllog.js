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
        el: $('.CalllogView'),
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
            this.groupIndex = 10;
            this.render();
        },
        render: function(){
            var self = this;
            doT.static('/templates/calllog.html', function(html) {
                self.$el.html(html);
                self.$el.show();
                header.render();
                self.groupList();
                self.showList();
                window.dropList();
                window.signOut(self.$('#sign-out'));
                window.scrollHeight(self.$('.call-record-list'), 36);
            });
            return self;
        },
        groupList: function(arg){
            var self = this;
            $.when($.ajax({
                url: appapi.calllog.group
            })).done(function(result){
                if(typeof result == 'string'){
                    result = JSON.parse(result);
                }
                if(result && result.code == 0){
                    $('#tip-total').text(result.data['0']*1 + result.data['1']*1+result.data['2']*1);
                    $('#tip-unsolved').text(result.data['0']);
                    $('#tip-solved').text(result.data['1']);
                    $('#tip-called').text(result.data['2']);
                }
            }).fail(function(){
                //self.bindHtml([]);
            });
        },
        showList: function(arg) {
            var self = this;
            //this.groupIndex = index || this.groupIndex;
            arg = $.extend({
                currentPage: 1,
                pageSize: 20,
                callInOut: self.groupIndex
            },arg);
            $.when($.ajax({
                url: appapi.calllog.list,
                data: arg
            })).done(function(result){
                self.bindHtml(result);
            }).fail(function(err){
                self.bindHtml([]);
            });
        },
        bindHtml: function(result){
            if(typeof result == 'string'){
                result = JSON.parse(result);
            }
            if(result && result.data){
                var tpl = $('#record-item-tpl').html();
                var tplFun = doT.template(tpl);
                $('#record-data-container').html(tplFun(result.data));
            }

        },
        groupItemClickHandler: function(e){
            e.preventDefault();
            $('.group-item').removeClass('hover');
            var el = $(e.target);
            el.addClass('hover');
            this.groupIndex = el.attr('data-index');
            this.showList();
        },
        initPaginaton: function(arg){
            var self = this;
            $('.page-wrap').createPage({
                pageCount: arg.pageCount,
                current: arg.current ||1,
                backFn: function(index){
                    index = index<=0 ? 1: index;
                    index = index>= arg.pageCount? arg.pageCount: index;
                    if(index){
                        self.renderList({
                            currentPage: index
                        });
                    }
                }
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


    function timeFormat(time){
        if(isNaN(time)){
            return '00:00:00';
        }
        var h = parseInt(time/60/60)+'';
        var m = parseInt(time/60)+'';
        var s = parseInt(time%60)+'';
        return '{0}:{1}:{2}'.format(h.length>1?h:'0'+h, m.length>1?m: '0'+m, s.length>1?s:'0'+s);
    }
    window.timeFormat = timeFormat;
    module.exports = CalllogView;
});
