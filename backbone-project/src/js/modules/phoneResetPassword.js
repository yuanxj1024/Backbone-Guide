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
        gxdialog = require("gxdialog"),
        appapi = require("mod/api-config");

    // 设置弹出层颜色
    $.gxDialog.defaults.background = '#000';

    var PhoneResetPwdView = Backbone.View.extend({
        el: $('.PhoneResetPwdView'),
        events: {
            "click .J_phone_next": "NextFun",
            "click .J_phone_sure": "SureFun",
            "click .send-code-pwd": "sendCode",
            "click .J_phone_codeImage": "refreshCode"
        },
        initialize: function() {
            this.render();
        },
        render: function(){
            var _this = this;

            doT.static('/templates/phoneResetPassword.html', function(html) {
                _this.$el.html(html);
                _this.$el.show();
                _this.resetPwdValidate();
            });

            return _this;
        },
        resetPwdValidate: function(){
            var _this = this;
            _this.form = _this.$('#phoneResetPwdForm');

            //必须为者手机号验证规则
            $.validator.addMethod("isEmailPhone", function(value, element) {
                if(value == null || '' == value) return false;
                value = $.trim(value);
                var length = value.length;
                var mobile = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                return this.optional(element) || (length == 11 && mobile.test(value));
            }, "请输入正确的手机号码");

            //注册一个密码验证规则
            $.validator.addMethod("isPassWord",function(value,element){
                var pwd_simple = /^(?=.*?[0-9])(?=.*?[a-zA-Z])[0-9A-Za-z\_\.\~\@\#\$\%\^\&\*\!]{8,16}$/;
                return this.optional(element) || pwd_simple.test(value);
            },"密码不能有空格,长度在8-16个字符之间");

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
                                lock = false;

                            }else if(res.code != 0){
                                console.log(res.msg);
                                ok = false;
                                lock = true;
                            }
                        },
                        error: function(err) {
                            console.log("error");
                        }
                    });
                }
                return ok;
            },"手机账户未注册");

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
                    phoneCode: {
                        required: true,
                        digits: true
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
                        isCheckPhone: "手机账户未注册"
                    },
                    phoneCode: {
                        required: "请输入正确的验证码",
                        digits: "请输入数字验证码"
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
                        isPassWord: "密码长度8~16位，数字、字母、字符至少包含两种",
                    },
                    sureNewPwd:{
                        required: "请输入正确的密码",
                        isPassWord: "密码长度8~16位，数字、字母、字符至少包含两种",
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
        sendCode:function(){
            var _this = this,
                phoneVal = _this.$('#userPhone').val(),
                codeLength = 6,
                time = 100,
                code = "",
                msgType = 2,
                phoneUrl = AppApi.resetPwd.sendCode;

            if (lock) {
                $.gxDialog({
                    title: '',
                    width: 400,
                    timeout: 3000,
                    info: '亲，手机未注册不能发送！'
                });
                return false;
            }

            if (phoneVal.length == 11) {
                // 生产验证码
                //for(var i = 0; i < codeLength; i++ ){
                //    code += parseInt(Math.random() * 9).toString();
                //}
                $('.send-code-pwd').attr("disabled", "true").val( time + "s输入验证码");

                // 倒计时
                var InterValObj = setInterval(function () {
                    if (time == 0) {
                        window.clearInterval(InterValObj);
                        $('.send-code-pwd').removeAttr("disabled").val("重新发送验证码");
                        //code = ""

                    } else{
                        time--;
                        $('.send-code-pwd').val( time + "s内输入验证码");
                    }
                }, 1000)

                //向后台发送处理数据
                $.ajax({
                    url: phoneUrl,
                    type: 'POST',
                    cache: false,
                    dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                    timeout: 8000,
                    data: {
                        Phone: phoneVal,
                        shortMsgType: msgType
                    },
                    success: function(res) {

                        if(res.code == 0){
                            console.log("短信验证码已发到您的手机,请查收");

                        }else if(code != 0){
                            console.log("短信验证码发送失败，请重新发送");
                        }
                    },
                    error: function(err) {
                        console.log("error");
                    }
                });

            } else{
                _this.$('#userPhone').parents('.form-group').children('.form-tips').text("手机号码不能为空!");
            }

        },
        refreshCode: function(e){
            var _self = $(e.target);
            $('.J_phone_codeImage').attr("src", _self.attr("src") + "?a=" + new Date().getTime());
        },
        NextFun: function(){
            var _this = this,
                checkPhoneCodeUrl = AppApi.resetPwd.checkPhoneCode;

            if (_this.form.valid()) {
                _this.phoneVal = _this.$('#userPhone').val();
                var formDate = {
                    Phone: _this.phoneVal,
                    phoneCode: _this.$('#phoneCode').val()
                };

                $.ajax({
                    url: checkPhoneCodeUrl,
                    type: 'POST',
                    cache: false,
                    dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                    timeout:8000,
                    data: formDate,
                    success: function(res) {
                        if (res.code == 0) {
                            console.log(res.msg);

                            _this.$('.forgetPWD-content').hide();
                            _this.$('.settingPWD-content').show();
                        } else{
                            console.log(res.msg);
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
                    Phone: _this.phoneVal,
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
        }

    });

    module.exports = PhoneResetPwdView;
});
