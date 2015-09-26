/**
 * Created by AaronYuan on 9/4/15.
 */

define(function(require,exports,module){

  var $ = require('jquery'),
      auth = require('mod/auth'),
      Backbone = require('backbone'),
      doT = require('doT');


  var pageHeader = Backbone.View.extend({
    initialize: function() {
      this.render();
    },
    render: function(){
      var self = this;
      doT.exec('/templates/inner-page-header.html', function(templateFun) {
        $('.inner-hd').html(templateFun(auth.getUser()));

      });
    }
  });
  exports.instance = new pageHeader();

});
