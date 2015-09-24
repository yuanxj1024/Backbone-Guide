/**
 * Created by AaronYuan on 9/4/15.
 */

define(function(require,exports,module){

  var $ = require('jquery'),
      auth = require('mod/auth'),
      Backbone = require('backbone'),
      appapi = require('mod/api-config'),
      doT = require('doT'),
      gxdialog = require('gxdialog');

  var pageHeader = Backbone.View.extend({
    events: {
      //"click .#signOut"        : "signOut",
      //"mouseover .yun-user"  : "dropList"
    },
    initialize: function() {
      this.render();
    },
    render: function(){
      var self = this;
      doT.exec('/templates/inner-page-header.html', function(templateFun) {
        $('.inner-hd').html(templateFun(auth.getUser()));
        self.signOut();
        self.dropList();
      });
    },
    signOut: function(){
      $('#sign-out').on('click', function(e) {
        event.preventDefault();
        $.gxDialog({
          title: '确认注销',
          width: 400,
          info: '确定注销云服务吗？',
          ok: function(){
            $.when($.ajax({
              url: appapi.account.logout
            })).then(function(){
              auth.setUser({});
              window.App.Views.go('login');
            }).fail(function(){
              auth.setUser({});
              window.App.Views.go('login');
            });
          },
          no: function(){
          }

        });
      });
    },
    dropList: function(){
      $('.yun-user').hover(function() {
        $('.drop-list').show();
      }, function() {
        $('.drop-list').hide();

      });

    }
  });
  exports.instance = new pageHeader();

});
