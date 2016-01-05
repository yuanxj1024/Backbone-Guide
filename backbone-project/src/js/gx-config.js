"use strict";

//模块目录
var win = window;
var doc = document;
var base = "";

// 获取url
var GetRoot = function(me) {
    me = this;

    //获取当前网址
    var curWwwPath = win.doc.location.href;

    //获取主机地址之后的目录
    var pathName = win.doc.location.pathname;
    var pos = curWwwPath.indexOf(pathName);

    //获取主机地址
    var localhostPaht = curWwwPath.substring(0,pos);

    //获取带"/"的项目名
    var projectName = pathName.substring(0,pathName.substr(1).indexOf('/')+1);

    //返回主机地址
    me.path = function(){
        return(localhostPaht);
    };

    //返回
    me.project = function(){
        return(localhostPaht + projectName );
    };

}

var getUrl = new GetRoot();
var loaclUrl = getUrl.path() + "/js" || "/js";

seajs.config({

    // Sea.js 的基础路径
    base: "/js",
    //base: loaclUrl,

    // 别名配置
    alias: {
        'jquery': 'lib/jquery.js',
        //'jquery1': 'lib/jquery-1.11.1.js',
        'underscore': 'lib/underscore.js',
        'backbone': 'lib/backbone.js',
        'jquery/jquery-validate':"lib/jquery.validate.js",
        'jquery/transit':"lib/jquery.transit.js",
        'jquery/colorbox':"lib/jquery.colorbox.js",
        'gxdialog':"modules/gxdialog.js",
        'gxtabs':"modules/gxtabs.js",
        'cookie': 'lib/js.cookie.js',
        'doT': 'lib/doT.js',
        'video': 'lib/video.js',
        'seajs-text': 'lib/seajs-text.js',
        'jquery/lazyload': 'lib/jquery.lazyload.js',
        'pagination': 'lib/jquery.page.js'
    },

    //预加载
    preload: ['jquery', 'backbone', './js/modules/router/router'],

    // 路径配置
    paths: {
        'mod':base + 'modules'
    }

});
