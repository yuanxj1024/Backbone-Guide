/**
 * @description: router
 * @author: GX-F2E
 * @version: V1
 * @update: 15/8/19
 */

define(function (require, exports, module) {
    var $ = jQuery = require("jquery");
    var Backbone = require("backbone");
    var auth = require('mod/auth');

    require('cookie');

    window.App = {
        Models: {},
        Views: {
            go: function(name) {
                window.App.Router.navigate(name, {
                    trigger: true
                });
            }
        },
        Collections: {},
        container: '#container'
    };

    //配置路由
    var AutoRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            '/': 'index',
            'index': 'index',
            'login':'login',
            'user/login': 'login',
            'user/register': 'register',
            'user/pwd/phoneReset': 'phoneResetPwd',
            'user/pwd/qaReset': 'qaResetPwd',
            'message': 'showMessage',
            'album': 'showAlbum',
            'note': 'showNote',
            'phoneBook': 'showPhoneBook',
            'calllog': 'showCalllog',
            'record': 'showRecord',
            'user/service': 'BYService',
            'privacy/service': 'showPrivacy',
            'list/:name': 'list',
            '*router': 'other'
        },
        loadView: function(view){
            this.view && this.view.$el.hide(300);
            this.view = view;
            var self = this;
            setTimeout(function(){
                self.view.$el.show();
                //self.view.render();
            },500);
        },
        index: function() {
            this.authFilter('mod/index');
        },
        login: function() {
            var self = this;
            require.async('mod/login', function(view) {
                self.loadView(new view());
            });
        },
        register: function() {
            var self = this;
            require.async('mod/register', function(view) {
                self.loadView(new view());
            });
        },
        phoneResetPwd: function() {
            var self = this;
            require.async('mod/phoneResetPassword', function(view) {
                self.loadView(new view());
            });
        },
        qaResetPwd: function() {
            var self = this;
            require.async('mod/qaResetPassword', function(view) {
                self.loadView(new view());
            });
        },
        showMessage: function() {
            this.authFilter('mod/message');
        },
        showAlbum: function() {
            this.authFilter('mod/album');
        },
        showNote: function() {
            this.authFilter('mod/note');
        },
        showPhoneBook: function() {
            this.authFilter('mod/phoneBook');
        },
        showCalllog: function() {
            this.authFilter('mod/calllog');
        },
        showRecord: function() {
            this.authFilter('mod/record');
        },
        other: function(){
            window.App.Views.go('/');
        },
        list: function(name) {
        },
        authFilter: function(name) {
            var self = this;
            if(!auth.checkLogin()) {
                window.App.Views.go('login');
            }else
            {
                require.async(name, function(view){
                    self.loadView(new view());
                });
            }
        },
        BYService: function(){
            var self = this;
            require.async('mod/agreement', function(view) {
                self.loadView(new view());
            });
        },
        showPrivacy: function(){
            var self = this;
            require.async('mod/privacy.js', function(view) {
                self.loadView(new view());
            });
        }
    });

    $(function(){
        window.App.container = $(window.App.container);
        window.App.Router = new AutoRouter();
        Backbone.history.start();
    });

});
