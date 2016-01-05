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
    $.gxDialog.defaults.background = '#000';
    var PhoneBookView = Backbone.View.extend({
        el: $('.PhoneBookView'),
        events: {
            'mouseover .menu-hover': function() {
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

                //if(tar.attr('tag')){
                //    $('.'+tar.attr('tag')).hide();
                //    $('.'+ tar.attr('for')).show();
                //}
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
                $('.btn-change-status').removeClass('hover');
                el.addClass('hover');
                this.renderList({
                    currentPage: 1
                });
                return false;
            },
            'click .letter-list li': function(e){
                this.firstLetter = $(e.target).text();
                if(this.firstLetter =='#'){
                    this.firstLetter = '';
                }
                this.searchHandler();
                return false;
            },
            'click #load-more': 'nextPageList'
        },
        initialize: function() {
            this.user = auth.getUser();
            this.contactItems = [];
            this.render();
        },
        render: function(){
            var self = this;
            this.currentPage = 1;
            doT.static('/templates/phoneBook.html', function(html) {
                self.$el.html(html);
                self.$el.show();
                header.render();
                self.initForm();
                self.renderList();
                window.dropList();
                window.signOut(self.$('#sign-out'));
                window.scrollHeight(self.$('.contact-form-wrap'), 76);
                window.scrollHeight(self.$('.record-list'), 167);
            });
            return self;
        },
        //渲染联系人列表
        renderList: function(arg){
            var self = this;
            arg = $.extend({
                deleteStatus: displayStatus ||0,
                currentPage:1,
                pageSize:14
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
                        if(displayStatus ==0){
                            $('#all-total').text(result.totalCount);
                        }else if(displayStatus == 1){
                            $('#del-total').text(result.totalCount);
                        }
                        if(result.data){
                            self.contactItems = result.data || [];
                            $('.contact-list-data').append(tplFun(self.contactItems));
                        }else{
                            self.currentPage -= 1;
                            showAlert('没有更多数据了', 1000);
                        }
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
                },
                messages:{
                    name:{
                        required: "请输入正确的名字",
                        minlength: "请输入正确的名字"
                    },
                    phone:{
                        required: "请输入正确的手机号",
                        minlength: "请输入正确的手机号",
                        maxlength: "请输入正确的手机号"
                    },
                    homeEmail: {
                        email: "请输入正确的邮箱地址"
                    },
                    unitEmail: {
                        email: "请输入正确的邮箱地址"
                    }
                }
            });

            $('#creatorId').val(auth.getUser().id);

        },
        //添加联系人
        saveContact: function() {
            var self = this;
            var isValid = this.form.valid();
            var isUpdate = !!$('#edit-contact-id').val();

            $('input[name="creatorId"]').val(this.user.id);

            if(isValid){
                $.when($.ajax({
                    url: isUpdate ? appapi.phoneBook.update: appapi.phoneBook.add,
                    method: 'get',
                    data: this.form.serialize()
                })).done(function(result){
                    if(typeof result == 'string'){
                        result = JSON.parse(result);
                    }
                    var msg = '';
                    if(result && result.code ==0){
                        $('#edit-contact-id').val('');
                        msg= '保存成功！';
                        self.renderList();
                        $('.contact-form-wrap').hide();
                    }else {
                        msg = result.msg || '数据保存失败，稍后再试!';
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
            if(item.phones && typeof item.phones == 'string'){
                item.phones = JSON.parse(item.phones);
            }
            //console.log(item);
            $('.contact-form-wrap').show();
            $('#edit-contact-id').val(item.id);
            $('#contact-name').val(item.name);
            $('[name="phone"]').val(item.phones[0]['phoneNumber']);
            //$('[name="mobile"]').val(item.phones[1]['phoneNumber']);
            if(item.phones.length >1 && item.phones[1]['phoneNumber'] ){
                $('#phone-type').text(item.phones[1]['']);
              $('[name="unitMobile"]').val(item.phones[1]['phoneNumber'])
            }

            $('#contact-nickname').val(item.appellation);
            $('[name="email"]').val(item.email);
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
            this.currentPage = 1;
            $('.contact-list-data').children().remove();
            var search  ={
                name: $('#input-contact-search').val(),
                firstLetter: this.firstLetter || '',
                currentPage: this.currentPage
            };

            //TODO search
            this.renderList(search);
        },
        nextPageList: function() {
            this.currentPage += 1;
            var search  ={
                name: $('#input-contact-search').val(),
                firstLetter: this.firstLetter || '',
                currentPage: this.currentPage
            };
            this.renderList(search);

        },
        initPaginaton: function(arg){
            var self = this;
            this.pagination = $('.page-wrap').createPage({
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

    function showAlert(msg,timeout) {
        $.gxDialog({
            title:'提示',
            width: 400,
            info: msg,
            oktext: '确定',
            ok:function(){},
            timeout: timeout
        });
    }

    module.exports = PhoneBookView;
});
