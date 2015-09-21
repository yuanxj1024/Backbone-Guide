/**
 * @description: register.js
 * @author: GX-F2E
 * @version: V1
 * @update: 15/8/27
 */

define(function (require, exports, module) {
    var $ = jQuery = require("jquery"),
        _ = require('underscore'),
        validate = require("jquery/jquery-validate"),
        Backbone = require("backbone"),
        doT = require("doT"),
        gxdialog = require("gxdialog"),
        appapi = require("mod/api-config");

    // 设置弹出层颜色
    $.gxDialog.defaults.background = '#000';

    var RegisterView = Backbone.View.extend({
        el: $('.RegisterView'),
        events: {
            "click #btn-register": "SignUp",
            "click .send-code": "sendCode",
            "click .code-image": "refreshCode"
        },
        initialize: function(){
            var _this = this;
            this.render();
        },
        render: function(){
            var _this = this;

            doT.static('/templates/register.html', function(html) {
                _this.$el.html(html);
                _this.$el.show();
                _this.loadData();
                _this.regValidate();
            });

            return _this;
        },
        loadData:function(){
            var securityQuestionsUrl = AppApi.register.securityQuestions;
            $.ajax({
                url: securityQuestionsUrl,
                type: 'POST',
                cache: false,
                dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                timeout: 8000,
                data: {
                    Status: 0
                },
                success: function(res) {
                    if(res.code == 0 ){
                        console.log(res.msg);
                        var tpl = $('#qa-tmpl').html();
                        var tplFun = doT.template(tpl);
                        $('#qa-view').html(tplFun(res));

                    }else if(res.code != 0){
                        console.log("失败");
                    }
                },
                error: function(err) {
                    console.log("error");
                }
            });

        },
        sendCode:function(){
            var _this = this,
                phoneVal = $('#userPhone').val(),
                codeLength = 6,
                time = 100,
                code = "",
                msgType = 1,
                phoneUrl = AppApi.register.sendCode;

            if (lock) {
                $.gxDialog({
                    title: '',
                    width: 400,
                    timeout: 3000,
                    info: '亲，手机已注册不能发送！'
                });
                return false;
            }

            if (phoneVal.length == 11) {
                // 生产验证码
                //for(var i = 0; i < codeLength; i++ ){
                //    code += parseInt(Math.random() * 9).toString();
                //}
                $('.send-code').attr("disabled", "true").val( time + "s输入验证码");

                // 倒计时
                var InterValObj = setInterval(function () {
                    if (time == 0) {
                        window.clearInterval(InterValObj);
                        $('.send-code').removeAttr("disabled").val("重新发送验证码");
                        //code = ""

                    } else{
                        time--;
                        $('.send-code').val( time + "s内输入验证码");
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
                            console.log(res.msg);

                        }else if(code != 0){
                            console.log(res.msg);
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
        regValidate: function(){
            var _this = this;
            _this.form = _this.$('#registerForm');

            //必须为邮箱或者手机号验证规则
            $.validator.addMethod("isEmailPhone", function(value, element) {
                if(value == null || '' == value) return false;
                value = $.trim(value);
                var length = value.length;
                var mobile = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                //var email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
                return this.optional(element) || (length == 11 && mobile.test(value));
            }, "请输入正确的手机号码");
            //注册一个密码验证规则
            $.validator.addMethod("isPassWord",function(value,element){
                var pwd_simple = /^(?=.*?[0-9])(?=.*?[a-zA-Z])[0-9A-Za-z\_\.\~\@\#\$\%\^\&\*\!]{8,16}$/;
                return this.optional(element) || pwd_simple.test(value);
            },"密码不能有空格,长度在8-16个字符之间");

            // 验证手机是否注册
            $.validator.addMethod("isCheckPhone",function(value,element){
                var ok = true,
                    checkPhoneUrl = AppApi.register.checkPhone;

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

            },"手机号已被注册");

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

                if( flag == 0 ) {
                    return false;
                } else {
                    return true;
                }

            },"图片验证码错误");

            _this.form.validate({
                //onkeyup  : false,
                //onfocusout : false,
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
                    pwd: {
                        required: true,
                        isPassWord: true
                    },
                    surePwd: {
                        required: true,
                        isPassWord: true,
                        equalTo: "#userPwd"
                    },
                    imgCode: {
                        required: true,
                        isCheckCode: true
                    },
                    userAnswers1: {
                        required: true
                    },
                    userAnswers2: {
                        required: true
                    },
                    userAnswers3: {
                        required: true
                    },
                    userQuestion1: {
                        required: true
                    },
                    userQuestion2: {
                        required: true
                    },
                    userQuestion3: {
                        required: true
                    }
                },
                messages: {
                    Phone: {
                        required: "请输入手机号码",
                        isEmailPhone: "请输入正确的手机号码",
                        isCheckPhone: "手机号已被注册"
                    },
                    phoneCode: {
                        required: "请输入正确的验证码",
                        digits: "请输入数字验证码"
                    },
                    pwd: {
                        required: "请输入正确的密码！",
                        isPassWord: "密码长度8~16位，数字、字母、字符至少包含两种"
                    },
                    surePwd:{
                        required: "请输入正确的密码！",
                        isPassWord: "密码长度8~16位，数字、字母、字符至少包含两种",
                        equalTo: "您两次输入的密码不一致"
                    },
                    imgCode:{
                        required: "图片验证码错误",
                        isCheckCode: "图片验证码错误"
                    },
                    userAnswers1:{
                        required: "请输入答案"
                    },
                    userAnswers2:{
                        required: "请输入答案"
                    },
                    userAnswers3:{
                        required: "请输入答案"
                    },
                    userQuestion1:{
                        required: "请选择问题"
                    },
                    userQuestion2:{
                        required: "请选择问题"
                    },
                    userQuestion3:{
                        required: "请选择问题"
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
        SignUp:function(){
            var _this = this,
            rgUrl = AppApi.register.register,
            result = _this.form.valid();

            if (result === true) {

                function QA(id,q,a){
                    this.id = id;
                    this.question = q;
                    this.answer = a;
                }
                var qa1 = new QA(
                    _this.$('#userQuestion1').val(),
                    _this.$('#userQuestion1').find("option:selected").text(),
                    _this.$('#userAnswers1').val()
                );
                var qa2 = new QA(
                    _this.$('#userQuestion2').val(),
                    _this.$('#userQuestion2').find("option:selected").text(),
                    _this.$('#userAnswers2').val()
                );
                var qa3 = new QA(
                    _this.$('#userQuestion3').val(),
                    _this.$('#userQuestion3').find("option:selected").text(),
                    _this.$('#userAnswers3').val()
                );
                var QAResult = [ qa1, qa2, qa3 ];
                var formDate = {
                    phone: _this.$('#userPhone').val(),
                    pwd: _this.$('#surePwd').val(),
                    phoneCode: _this.$('#phoneCode').val(),
                    answers: JSON.stringify(QAResult)
                };

                $.ajax({
                    url: rgUrl,
                    type: 'POST',
                    cache: false,
                    dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                    timeout:8000,
                    data: formDate,
                    success: function(res) {
                        if (res.code == 0) {
                            console.log(res.msg);
                            window.App.Views.go('/');
                        }else{
                            $.gxDialog({
                                title: '',
                                width: 300,
                                info: res.msg
                            });
                        }
                    },
                    error: function(err) {
                        console.log("error");
                    }
                });
            }
        }

    });

    module.exports = RegisterView;
});
