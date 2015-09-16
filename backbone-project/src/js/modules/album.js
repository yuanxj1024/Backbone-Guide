/**
 * @description: album
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
        header = require('mod/inner-page-header').instance,
        colorbox = require("jquery/colorbox"),
        gxdialog = require("gxdialog"),
        videojs = require("video");

    // 设置弹出层颜色
    $.gxDialog.defaults.background = '#000';

    var AlbumView = Backbone.View.extend({
        el: $('.AlbumView'),
        events: {
            'mouseover .menu-hover': function() {
                $('.menu-layer').show();
            },
            'mouseleave .menu-layer': function(){
                $('.menu-layer').hide();
            },
            'click .album-all': 'selectAll',
            'click .album-undo': 'undoAll',
            'click input[data-out=out]': 'selectItem',
            'click .img-menu': 'showImg',
            'click .video-menu': 'showVideo',
            'click input[type=checkbox]': function(e){
                var _self = $(e.target);
                if (_self.hasClass('cked')) {
                    _self.attr("checked", false).removeClass('cked');
                }else{
                    _self.attr("checked", true).addClass('cked');
                }
            }
        },
        initialize: function() {
            this.render();
        },
        render: function(){
            var _this = this;
            doT.static('/templates/album.html', function(html) {
                _this.$el.html(html);
                _this.$el.show();
                header.render();
                _this.scrollBox();
                _this.loadData();
                _this.loadNum(1,'aaa',$('.img-menu'));

            });
            return _this;
        },
        loadNum: function(type,id,el){
            var numUrl = AppApi.album.num;

            $.ajax({
                url: numUrl,
                //type: 'POST',
                cache: false,
                dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                timeout: 8000,
                data: {
                    type:type,
                    passportId:id
                },
                success: function(res) {
                    if(res.code == 0 ){
                        console.log(res.msg);
                        var tpl = $('#num-tmpl').html();
                        var tplFun = doT.template(tpl);
                        el.find('span').html(tplFun(res));

                    }else if(res.code == 1){
                        console.log("账户不存在");
                    }else{
                        console.log("文件类型不存在");
                    }
                },
                error: function(err) {
                    console.log("error");
                }
            });
        },
        loadData:function(){
            var imgListUrl = AppApi.album.imgList;
            var photoBox = function (){
                $('.colorbox1').colorbox({
                    rel: 'group2',
                    transition: "fade",
                    opacity: '0.6',
                    onLoad: function(){
                        var _html = '<div class="album-other">' +
                            '<a href="" class="album-download"><i></i>下载</a>' +
                            '<span class="album-intro"><i></i>信息</span>' +
                            '<span class="album-del"><i></i>删除</span>' +
                            '</div>';
                        $('#cboxContent').append(_html);
                    },
                    onComplete: function(){
                        $('.album-del').on('click', function(){
                            alert("aa")
                        });
                    }
                });
            };
            $.ajax({
                url: imgListUrl,
                //type: 'POST',
                cache: false,
                dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                timeout: 8000,
                data: {},
                success: function(res) {
                    if(res.code == 0 ){
                        console.log(res.msg);
                        var tpl = $('#img-tmpl').html();
                        var tplFun = doT.template(tpl);
                        $('#img-view').html(tplFun(res));
                        photoBox();

                    }else if(res.code != 0){
                        console.log("失败");
                    }
                },
                error: function(err) {
                    console.log("error");
                }
            });
        },
        selectAll:function(e){
            var _this = this;
            _this.$('input[type=checkbox]').attr("checked", true).addClass('cked');
            console.log(_this.$('input[type=checkbox]'));

        },
        undoAll:function(){
            var _this = this;
            _this.$('input[type=checkbox]').attr("checked", false).removeClass('cked');
            console.log(_this.$('input[type=checkbox]'));
        },
        selectItem: function(e){
            var _this = this,
                _self = $(e.target),
                _item = _self.parents('.album-time').next('.album-item');

            console.log(_self.hasClass('cked'));

            if (_self.hasClass('cked')) {
                _item.find('input[data-inner=inner]').attr("checked", false).removeClass('cked');
            } else{
                _item.find('input[data-inner=inner]').attr("checked", true).addClass('cked');
            }
        },
        showImg: function(){
            var _this = this;

            _this.loadNum(1,'aaa',$('.img-menu'));
            _this.$('#img-view').show();
            _this.$('#video-view').hide();

            if (_this.$('.img-menu').hasClass('curr')) {
                return false;
            }else{
                _this.$('.video-menu').removeClass('curr');
                _this.$('.img-menu').addClass('curr');

            }
        },
        showVideo: function(){
            var _this = this,
                imgListUrl = AppApi.album.imgList;

            _this.loadNum(2,'aaa',$('.video-menu'));
            _this.$('#img-view').hide();
            _this.$('#video-view').show();

            if (_this.$('.video-menu').hasClass('curr')) {
                return false;
            }else{
                _this.$('.img-menu').removeClass('curr');
                _this.$('.video-menu').addClass('curr');
                var videoBox = function (){
                    $('.videobox1').colorbox({
                        inline:true,
                        height: "400",
                        transition:"fade",
                        onLoad: function(){
                            var _html = '<div class="album-other">' +
                                '<a href="" class="album-download"><i></i>下载</a>' +
                                '<span class="album-intro"><i></i>信息</span>' +
                                '<span class="album-del"><i></i>删除</span>' +
                                '</div>';
                            $('#cboxContent').append(_html);
                        },
                        onComplete: function(){
                            $('.album-del').on('click', function(){
                                alert("aa")
                            });
                        }
                    });
                };


                $.ajax({
                    url: imgListUrl,
                    //type: 'POST',
                    cache: false,
                    dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                    timeout: 8000,
                    data: {},
                    success: function(res) {
                        if(res.code == 0 ){
                            console.log(res.msg);
                            var tpl = $('#video-tmpl').html();
                            var tplFun = doT.template(tpl);
                            $('#video-view').html(tplFun(res));
                            videoBox();

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
        scrollBox: function(){
            var _this = this,
                wrapH = $(window).height(),
                scrollH = wrapH - (36+36+40);
            _this.$('.album-box-bd').css('height',scrollH);
        }


    });


    module.exports = AlbumView;
});


