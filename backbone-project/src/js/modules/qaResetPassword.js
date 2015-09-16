/**
 * @description: forget-pwd
 * @author: GX-F2E
 * @version: V1
 * @update: 15/8/31
 */

define(function (require, exports, module) {
    var $ = jQuery = require("jquery"),
        _ = require('underscore'),
        Backbone = require("backbone"),
        doT = require("doT"),
        validate = require("jquery/jquery-validate"),
        appapi = require("mod/api-config"),
        gxdialog = require("mod/gxdialog");

    // 设置弹出层颜色
    $.gxDialog.defaults.background = '#000';

    var QaResetPwdView = Backbone.View.extend({
        el: $('.QaResetPwdView'),
        events: {
            "click .J_next_1": "NextOneFun",
            "click .J_next_2": "NextTwoFun",
            "click .J_back": "BackFun",
            "click .J_sure": "SureFun",
            "click .code-image": "refreshCode"
        },
        initialize: function() {
            this.render();
        },
        render: function(){
            var _this = this;

            doT.static('/templates/qaResetPassword.html', function(html) {
                _this.$el.html(html);
                _this.$el.show();
                _this.resetPwdValidate();
                _this.loadData();
            });

            return _this;
        },
        resetPwdValidate: function(){
            var _this = this;
            _this.form = _this.$('#qaResetPwdForm');

            //必须为手机号验证规则
            $.validator.addMethod("isEmailPhone", function(value, element) {
                if(value == null || '' == value) return false;
                value = $.trim(value);
                var length = value.length;
                var mobile = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                return this.optional(element) || (length == 11 && mobile.test(value));
            }, "请输入正确的手机号码");

            //注册一个密码验证规则
            $.validator.addMethod("isPassWord",function(value,element){
                return this.optional(element) || /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,16}$/.test(value);
            },"密码不能有空格,长度在6-16个字符之间");

            // 验证手机是否注册
            $.validator.addMethod("isCheckPhone",function(value,element){
                var ok = true;
                var checkPhoneUrl = AppApi.resetPwd.checkPhone;

                if (ok) {
                    $.ajax({
                        url: checkPhoneUrl,
                        type: 'POST',
                        cache: false,
                        dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                        timeout: 8000,
                        async: false,
                        data: {
                            Phone: value
                        },
                        success: function(res) {
                            if(res.code == 0 ){
                                console.log(res.msg);
                                ok = true;

                            }else if(res.code != 0){
                                console.log(res.msg);
                                ok = false;
                            }
                        },
                        error: function(err) {
                            console.log("error");
                        }
                    });
                }
                return ok;

            },"账户未注册");

            // 验证图片码
            $.validator.addMethod("isCheckCode",function(value,element){
                var flag = 1,
                    checkCodeUrl = AppApi.register.checkCode;

                $.ajax({
                    url: checkCodeUrl,
                    type: 'POST',
                    dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                    timeout: 8000,
                    cache: false,
                    async:false,
                    data: {
                        Code: value
                    },
                    success: function(res) {
                        if(res.code == 0 ){
                            console.log(res.msg);
                            flag = 2;

                        }else if(res.code != 0){
                            console.log(res.msg);
                            flag = 0;

                        }
                    },
                    error: function(err) {
                        console.log("error");
                    }
                });

                if ( flag == 0 ) {
                    return false;
                } else {
                    return true;
                }

            },"图片验证码错误");

            _this.form.validate({
                rules:{
                    Phone: {
                        required: true,
                        isEmailPhone: true,
                        isCheckPhone: true
                    },
                    imgCode: {
                        required: true,
                        isCheckCode: true
                    }
                },
                messages: {
                    Phone: {
                        required: "请输入手机号码",
                        isEmailPhone: "请输入正确的手机号码",
                        isCheckPhone: "账户未注册"
                    },
                    imgCode:{
                        required: "图片验证码错误",
                        isCheckCode: "图片验证码错误"
                    }
                },
                errorPlacement:function(error,element){
                    var oParent = element.parents(".form-group");
                    oParent.children('.form-tips').html('<i class="x-ok-icon"></i>').append(error);
                },
                success:function(label){
                    var oParent = label.parents(".form-group");
                    oParent.children('.form-tips').html('<i class="ok-icon"></i>');
                },
                ignore: ""
            });

            _this.$('#qaForm').validate({
                rules:{
                    userAnswers1: {
                        required: true
                    },
                    userAnswers2: {
                        required: true
                    }
                },
                messages: {
                    userAnswers1:{
                        required: "请输入答案"
                    },
                    userAnswers2:{
                        required: "请输入答案"
                    }
                },
                errorPlacement:function(error,element){
                    var oParent = element.parents(".form-group");
                    oParent.children('.form-tips').html('<i class="x-ok-icon"></i>').append(error);
                },
                success:function(label){
                    var oParent = label.parents(".form-group");
                    oParent.children('.form-tips').html('<i class="ok-icon"></i>');
                },
                ignore: ""
            });

            _this.$('#settingPwdForm').validate({
                rules:{
                    newPwd: {
                        required: true,
                        isPassWord: true
                    },
                    sureNewPwd: {
                        required: true,
                        isPassWord: true,
                        equalTo: "#newPwd"
                    }
                },
                messages: {
                    newPwd: {
                        required: "请输入正确的密码",
                        isPassWord: "密码不能有空格,长度在6-16个字符之间"
                    },
                    sureNewPwd:{
                        required: "请输入正确的密码",
                        isPassWord: "密码不能有空格,长度在6-16个字符之间",
                        equalTo: "您两次输入的密码不一致"
                    }
                },
                errorPlacement:function(error,element){
                    var oParent = element.parents(".form-group");
                    oParent.children('.form-tips').html('<i class="x-ok-icon"></i>').append(error);
                },
                success:function(label){
                    var oParent = label.parents(".form-group");
                    oParent.children('.form-tips').html('<i class="ok-icon"></i>');
                },
                ignore: ""
            });
        },
        refreshCode: function(e){
            var _self = $(e.target);
            $('.code-image').attr("src", _self.attr("src") + "?a=" + new Date().getTime());
        },
        strDialog:function(str){
            $.gxDialog({
                title: '温馨提示',
                width: 300,
                timeout: 3000,
                info: str
            });
        },
        NextOneFun: function(){
            var _this = this,
                questionsUrl = AppApi.resetPwd.questions;

            if (_this.form.valid()) {
                _this.userPhoneVal = _this.$('#userPhone').val();
                var formDate = { Phone: _this.userPhoneVal };

                $.ajax({
                    url: questionsUrl,
                    type: 'POST',
                    cache: false,
                    dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                    timeout: 8000,
                    data: formDate,
                    success: function(res) {
                        if(res.code == 0 ){
                            console.log(res.msg);
                            var tpl = $('#qa-tmpl').html();
                            var tplFun = doT.template(tpl);
                            $('#qa-view').html(tplFun(res));
                            _this.$('.forgetPWD-content').hide();
                            _this.$('.qa-content').show();

                        }else if(res.code != 0){
                            console.log("失败");
                        }
                    },
                    error: function(err) {
                        console.log("error");
                    }
                });

            }
        },
        loadData: function(){
            var _this = this;
        },
        NextTwoFun: function(){
            var _this = this,
                settingPwdUrl = AppApi.resetPwd.checkAnswers;
            
            if (_this.$('#qaForm').valid()) {

                function Answer(id,a){
                    this.id = id;
                    this.answer = a;
                }
                var answers1 = new Answer(
                    _this.$('#userQuestion1').val(),
                    _this.$('#userAnswers1').val()
                );
                var answers2 = new Answer(
                    _this.$('#userQuestion2').val(),
                    _this.$('#userAnswers2').val()
                );
                var AResult = [ answers1, answers2 ];
                var formDate = {
                    Phone: _this.userPhoneVal,
                    answers: JSON.stringify(AResult)
                };

                $.ajax({
                    url: settingPwdUrl,
                    type: 'POST',
                    cache: false,
                    dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                    timeout:8000,
                    data: formDate,
                    success: function(res) {
                        if (res.code == 0) {
                            console.log(res.msg);
                            _this.$('.qa-content').hide();
                            _this.$('.settingPWD-content').show();
                        } else if(res.code == 1){
                            _this.strDialog(res.msg);

                        } else if(res.code == 2){
                            _this.strDialog(res.msg);

                        } else{
                            _this.strDialog("网路超时");
                        }
                    },
                    error: function(err) {
                        console.log("error");
                    }
                });
            }
        },
        SureFun: function(){
            var _this = this,
                settingPwdUrl = AppApi.resetPwd.settingPwd;

            if (_this.$('#settingPwdForm').valid()) {
                var formDate = {
                    Phone: _this.userPhoneVal,
                    newPwd: _this.$('#sureNewPwd').val()
                };

                $.ajax({
                    url: settingPwdUrl,
                    type: 'POST',
                    cache: false,
                    dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                    timeout:8000,
                    data: formDate,
                    success: function(res) {
                        if (res.code == 0) {
                            console.log(res.msg);

                            _this.$('.settingPWD-content').hide();
                            _this.$('.successPWD-content').show();
                        } else{
                            console.log("dialog");
                        }
                    },
                    error: function(err) {
                        console.log("error");
                    }
                });
            }
        },
        BackFun: function(){
            var _this = this;
            //history.back();
            _this.$('.forgetPWD-content').show();
            _this.$('.qa-content').hide();
        }

    });

    module.exports = QaResetPwdView;
});
