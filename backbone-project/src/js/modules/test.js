/**
/**
 * @description: test.js
 * @author: lixinwei
 * @version: V1
 * @update: 15/8/19
 */

define(function (require, exports, module) {
    var $ = jQuery = require("jquery");

    var _ = require('underscore');
    var Backbone = require("backbone");
    var doT = require("doT");

    var Todo = Backbone.Model.extend({

        defaults: {
            title: '',
            completed: false
        },
        url: '/data/book.json',

        initialize: function() {

        }

    });

    var todo = new Todo();

    todo.fetch({
        success: function(model, response){
            console.log(todo.toJSON());

        },
        error: function(){

        }

    });

    var TodoView = Backbone.View.extend({

    });


    var TodosCollection = Backbone.Collection.extend({
        initialize: function(){
            console.log("reset 事件触发");
            this.on("reset")

        }

    });


    var obj = {
        success: true,
        data:[
            {title:'item1',message:11},
            {title:'item1',message:22}
        ]
    };
    var tmpl = $('#j-tmpl').html();
    var doTtmpl = doT.template(tmpl);
    console.log(doTtmpl(obj) );

    $(".gx-wrapper").append(doTtmpl(obj));



})
