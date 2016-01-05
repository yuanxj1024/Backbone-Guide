###
  登陆
###
define (require, exports, module)->
  $ = require 'jquery'
  Backbone = require 'backbone'
  doT = require 'doT'
  validate = require 'jquery/jquery-validate'
  require 'cookie'
  auth = require 'mod/auth'
  appApi = require 'mod/api-config'
  require 'gxdialog'


  exports = Backbone.View.extend
    el: $ '.LoginView'
    events:
      'click #btn-login':'login'
      'keypress #userPWD':  (e)->
        if e.charCode is 13
          this.login()
    initialize: ->
      @render()
      @
    render: ->
      self = @
      doT.static '/templates/login.html', (html)->
        self.$el.html html
        self.bindEvent()
      @$el.show()
      @
    bindEvent: ->
      @form = $ '#defaultForm'
      @form.validate
        rules:
          phone:
            required: true
          pwd:
            required: true
        messages:
          phone:
            required: '请输入铂钰账号／手机号码'
          pwd:
            required: '请输入密码'
      null
    login: ->
      self = @
      result = @form.valid()
      if result is true
        $('#btn-login').text '登陆中'
        $.ajax
          cache: false
          url: appApi.login.login
          data: $('#defaultForm').serialize()
          success:(result)->
            if typeof result is 'string'
              result = JSON.parse result
            if result.code is 0
              auth.setUser result.data
              window.App.Views.go '/'
            else
              $('#btn-login').text '重新登陆'
              $.gxDialog
                width: '200'
                title: '提示'
                info: result.msg
                okText: '确定'
                ok: ->
            true
          error: (err)->
            $('.err-msg').show()

  exports
