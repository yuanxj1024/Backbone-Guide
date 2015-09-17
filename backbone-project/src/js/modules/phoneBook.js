/**
 * @description: phoneBook
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
    require('pagination');
    require('gxdialog');

    //现实数据的状态， 所有，删除的
    var displayStatus = 0;

    var PhoneBookView = Backbone.View.extend({
        el: $('.MessageView'),
        events: {
            'click .menu-hover': function() {
                $('.menu-layer').show();
                return false;
            },
            'mouseleave .menu-layer': function(){
                $('.menu-layer').hide();
            },
            'click .hover-menu-area': function(e){
                var tar = $(e.target).next('div');
                tar.show();
                return false;
            },
            //'mouseleave .hover-menu-item': function(e){
            //    $(e.target).parents('.hover-menu-item').hide();
            //},
            'click .add-contact':function(e){
                this.form[0].reset();
                $(e.target).parents('.hover-menu-item').hide();
                $('.contact-form-wrap').show();
                $('#edit-contact-id').val('');
                return false;
            },
            'click .btn-cancel': function(){
                this.form[0].reset();
                $('.contact-form-wrap').hide();
                return false;
            },
            'click .btn-save': 'saveContact',
            'click .drop-list-area': function(e){
                $(e.target).nextAll('.drop-list').show();
                return false;
            },
            'click .drop-list li': function(e){
                var tar = $(e.target),
                  block = tar.parents('.drop-list');
                block.hide();
                block.prevAll('span').text(tar.text());

                if(tar.attr('tag')){
                    $('.'+tar.attr('tag')).hide();
                    $('.'+ tar.attr('for')).show();
                }
            },
            'click .contact-item-detail': 'editContactHandler',
            'click .cloud-container':function(){
                $('.float-menu').hide();
            },
            'click .btn-contact-delete': 'deleteContactHanler',
            'click #btn-search': 'searchHandler',
            'click .btn-change-status': function(e){
                var el = $(e.target);
                displayStatus = el.attr('data-status');
                this.renderList();

                return false;
            }
        },
        initialize: function() {
            this.user = auth.getUser();
            this.contactItems = [];
            this.render();
        },
        register:function(e){
            e.preventDefault();
            return this;
        },
        render: function(){
            var self = this;
            doT.static('/templates/phoneBook.html', function(html) {
                self.$el.html(html);
                self.$el.show();
                header.render();
                self.initForm();
                self.renderList();
            });
            return self;
        },
        //渲染联系人列表
        renderList: function(arg){
            var self = this;
            arg = $.extend({
                deleteStatus:0,
                currentPage:1,
                pageSize:15
            }, arg);

            $.ajax({
                url: appapi.phoneBook.list,
                method: 'GET',
                data: arg || {},
                success:function(result){
                    if(typeof result == 'string'){
                        result = JSON.parse(result);
                    }
                    if(result){
                        var tpl = $('#contact-list-tpl').html();
                        var tplFun = doT.template(tpl);
                        $('#all-total').text(result.totalCount);
                        self.initPaginaton({
                            pageCount: Math.ceil(result.totalCount *1.0 / arg.pageSize * 1.0),
                            current: arg.currentPage
                        });
                        self.contactItems = result.data || [];
                        $('.contact-list-data').html(tplFun(self.contactItems));
                    }
                }
            });
        },
        //初始化验证表单
        initForm: function(){
            this.form = $('.contact-form');
            this.form.validate({
                rules:{
                    name:{
                        required: true,
                        minlength: 1
                    },
                    phone:{
                        required: function(el){
                            var val = $(el).val();
                            return !val.match(/^\d{11}$/g);
                        },
                        minlength: 11,
                        maxlength: 11
                    },
                    homeEmail: {
                        email: true
                    },
                    unitEmail: {
                        email: true
                    }
                }
            });

            $('#creatorId').val(auth.getUser().id);

        } ,
        //添加联系人
        saveContact: function() {
            $('input[name="creatorId"]').val(this.user.id);
            var isValid = this.form.valid();
            var isUpdate = !!$('#edit-contact-id').val();
            if(isValid){
                $.when($.ajax({
                    url: isUpdate ? appapi.phoneBook.update: appapi.phoneBook.add,
                    method: 'POST',
                    data: this.form.serialize()
                })).done(function(result){
                    if(typeof result == 'string'){
                        result = JSON.parse(result);
                    }
                    var msg = '';
                    if(result && result.code ==0){
                        $('#edit-contact-id').val('');
                        msg= '保存成功！';
                    }else {
                        msg = '数据保存失败，稍后再试!';
                    }
                    if(msg){
                        showAlert(msg);
                    }
                }).fail(function(err){
                    showAlert('数据保存失败，稍后再试!');
                });
            }
        },
        //编辑联系人
        editContactHandler: function(e){
            var el = $(e.target),
              id = el.attr('data-id');

            var current = _.find(this.contactItems, function(item){
                return item.id == id;
            });
            if(current){
                this.bindFormForEdit(current);
            }
        },
        bindFormForEdit: function(item){
            this.form[0].reset();
            $('.contact-form-wrap').show();
            $('#edit-contact-id').val(item.id);
            $('#contact-name').val(item.name);
            $('[name="phone"]').val(item.phone);
            $('#contact-nickname').val(item.appellation);
            $('[name="homeEmail"]').val(item.homeEmail);
            $('[name="company"]').val(item.company);
            $('[name="position"]').val(item.position);

        },
        deleteContactHanler: function(){
            var id = $('#edit-contact-id').val();
            if(!!id){
                $.when($.ajax({
                    url: appapi.phoneBook.remove,
                    method: 'POST',
                    data: {
                        id: id,
                        isTrue:2
                    }
                })).done(function(result){
                      if(result && typeof result == 'string'){
                          result = JSON.parse(result);
                      }
                      if(result && result.code == 0) {
                          showAlert('联系人删除成功!');
                          $('li[data-id="'+id+'"]').remove();
                          $('.contact-form-wrap').hide();
                      }else {
                          showAlert('联系人删除失败,请稍后重试!');
                      }
                  }).fail(function(err){
                      showAlert('联系人删除失败,请稍后重试!');
                  });

            }else {
                this.form[0].reset();
            }
        },
        searchHandler: function(){
            var val = $('#input-contact-search');
            console.log(val);
            //TODO search
            this.renderList({
                name: val
            });
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

    module.exports = PhoneBookView;
});
