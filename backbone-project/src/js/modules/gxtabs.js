/*!
 * @description:gxTabs ---> Global-x Tabs
 * @author:Eilvein
 * @version:V1.0.0
 * @update:2015/5/26
 */

define(['jquery'], function(require, exports, module) {

    var $ = jQuery = require("jquery");
    /*
     *  $('.tab').gxTabs({
     *      tabList:".title>li",       //标题列表
     *      tabContent:".content>div",  //内容列表
     *      tabOn:"active",           // 菜单划过的类名
     *      action:"click",            // click || mouseover
     *      beforeChange:function(){}, // 点击动作发生之前
     *      afterChange:function(){},  // 点击动作发生之后
     *  });
     *
     */

    //如果只是单个的函数在外部是不能调用的  tabs函数在$里继承了所以通过$可以调用
    $.fn.gxTabs = function(options) {

        var settings = {
            tabList: "",               // 标题列表
            tabContent: "",            //内容列表
            tabOn: "",                 //菜单划过的类名
            action: "",                // click || mouseover
            beforeChange:function(){}, // 点击动作发生之前
            afterChange:function(){}   // 点击动作发生之后
        };

        var _this = $(this);
        if (options) $.extend(settings, options);

        _this.find(settings.tabContent).eq(0).show(); //第一栏目显示
        _this.find(settings.tabList).eq(0).addClass(settings.tabOn);
        if (settings.action == "mouseover") {
            _this.find(settings.tabList).each(function(i) {
                $(this).mouseover(function() {
                    var index = $(this).index();// 添加hover时元素的index 2014.10.11
                    settings.beforeChange(index);
                    $(this).addClass(settings.tabOn).siblings().removeClass(settings.tabOn);
                    var _tCon = _this.find(settings.tabContent).eq(i);
                    _tCon.show().siblings().hide();
                    settings.afterChange(index);
                }); //滑过切换

            });
        } else if (settings.action == "click") {
            _this.find(settings.tabList).each(function(i) {
                $(this).click(function() {
                    var index = $(this).index();// 添加hover时元素的index 2014.10.11
                    settings.beforeChange(index);
                    $(this).addClass(settings.tabOn).siblings().removeClass(settings.tabOn);
                    var _tCon = _this.find(settings.tabContent).eq(i);
                    _tCon.show().siblings().hide();
                    settings.afterChange(index);
                }); //点击切换

            });
        };
    };


    ////////////////////////////////////////////////////////////
    if (typeof module != "undefined" && module.exports) {
        module.exports = $;
    }

});

