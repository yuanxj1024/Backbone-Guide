/**
 * @description: note
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
    require('gxdialog');

    console.log(AppApi.login.check);

    var NoteView = Backbone.View.extend({
        el: $('.MessageView'),
        events: {
            'mouseover .menu-hover': function() {
                $('.menu-layer').show();
            },
            'mouseleave .menu-layer': function(){
                $('.menu-layer').hide();
            },
            'click .cloud-container': function(){
                $('.float-menu').hide();
            },
            'click #add-note': 'addNoteClickHandler',
            'click .remove-item': 'removeNoteClickHandler',
            'click .note-detail': 'detailClickHandler'
        },
        initialize: function() {
            this.render();
        },
        render: function(){
            var self = this;
            doT.static('/templates/note.html', function(html) {
                self.$el.html(html);
                self.$el.show();
                header.render();
                self.renderNodeList();
            });
            return self;
        },
        renderNodeList: function(args){
            var self = this;
            $.when($.ajax({
                url: appapi.note.list,
                method:'GET',
                data: args || {}
            })).done(function(result){
                //TODO
                result = {
                    data:[
                        {
                            id: 1,
                            info: 'xxxxx'
                        }
                    ]
                };
                if(result && typeof result == 'string'){
                    result = JSON.parse(result);
                }
                if(result && result.data){
                    self.bindTpl(result.data);
                }
            }).fail(function(err){
                self.bindTpl([]);
            });
        },
        bindTpl: function(data){
            var tplFun = doT.template($('#note-item-tpl').html());
            $('#note-list-container').html(tplFun(data));
        },
        addNoteClickHandler: function(){


        },
        removeNoteClickHandler: function(e){
            var id = $(e.target).attr('data-id'),
              self = this;
            console.log(id);
            $.gxDialog({
                title: '确认删除',
                width: 400,
                info: '确定删除该便签吗？',
                ok: function(){
                    self.removeNoteItem(id, function(){
                        $(e.target).parents('.note-list-col').remove();
                    });
                },
                no: function(){

                }
            });
        },
        removeNoteItem: function(id, callback){
            $.when($.ajax({
                url: ''
            })).done(function(result){
                //TODO
                result = {
                    code: 0
                };
                if(typeof result == 'string'){
                    result = JSON.parse(result);
                }
                var msg = '';
                if(result && result.code == 0){
                    msg = '删除成功';
                    callback && callback();
                }else {
                    msg = '删除失败，稍后重试!';
                }
                $.gxDialog({
                    title: '提示',
                    info: msg,
                    timeout: 1000
                });

            }).fail(function(err){

            })
        },
        detailClickHandler: function(e) {
            var id = $(e.target).attr('data-id');
            $.when($.ajax({
                url: appapi.note.detail,
                method: 'GET',
                data:{
                    id: id
                }
            })).done(function(result){
                //TODO
                result = {
                    data:{
                        id: 1,
                        info: 'xxx'
                    }
                };
                if(typeof result == 'string'){
                    result = JSON.parse(result);
                }
                if(result && result.data){
                    var tplFun =  doT.template($('#note-detail-tpl').html());
                    $.gxDialog({
                       title: '便签详情',
                        width: 520,
                        info: tplFun(result.data),
                        ok:function(){}
                    });
                }

            }).fail(function(err){

            });
        }

    });


    module.exports = NoteView;
});
