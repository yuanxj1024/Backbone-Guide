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
        iType: 1,
        vType: 2,
        pNum: 12,
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
            'click .imgMore a': 'imgMore',
            'click .videoMore a': 'videoMore',
            'click .download-btn': 'download',
            'click .del-btn': 'dele',
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
                _this.loadData(_this.iType,1,_this.pNum);
                _this.loadVideo(_this.vType, 1, _this.pNum);
                _this.scrollBox();

            });
            return _this;
        },
        loadNum: function(type, el){
            var numUrl = AppApi.album.num;

            $.ajax({
                url: numUrl,
                //type: 'POST',
                cache: false,
                dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                timeout: 8000,
                data: {
                    type:type
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
        loadData:function(type, currPage, pageNum){
            var _this = this;
                listUrl = AppApi.album.findFiles;
            _this.loadNum(_this.iType, $('.img-menu'));

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
                url: listUrl,
                //type: 'POST',
                cache: false,
                dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                timeout: 8000,
                data: {
                    type: type,
                    currentPage: currPage,
                    pageSize: pageNum
                },
                success: function(res) {
                    //if(res.code == 0 ){
                        var tpl = $('#img-tmpl').html();
                        var tplFun = doT.template(tpl);
                        $('.img-list').append(tplFun(res));
                        photoBox();

                    //}else if(res.code != 0){
                    //    console.log("失败");
                    //}
                },
                error: function(err) {
                    console.log("error");
                }
            });
        },
        selectAll:function(e){
            var _this = this;
            _this.$('input[type=checkbox]').attr("checked", true).addClass('cked');

        },
        undoAll:function(){
            var _this = this;
            _this.$('input[type=checkbox]').attr("checked", false).removeClass('cked');
        },
        selectItem: function(e){
            var _this = this,
                _self = $(e.target),
                _item = _self.parents('.album-time').next('.album-item');

            if (_self.hasClass('cked')) {
                _item.find('input[data-inner=inner]').attr("checked", false).removeClass('cked');
            } else{
                _item.find('input[data-inner=inner]').attr("checked", true).addClass('cked');
            }
        },
        showImg: function(){
            var _this = this;
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
            var _this = this;
            _this.$('#img-view').hide();
            _this.$('#video-view').show();

            if (_this.$('.video-menu').hasClass('curr')) {
                return false;
            }else{
                _this.$('.img-menu').removeClass('curr');
                _this.$('.video-menu').addClass('curr');
            }
        },
        loadVideo: function(type, currPage, pageNum){
            var _this = this,
                listUrl = AppApi.album.findFiles;

            _this.loadNum(_this.vType, $('.video-menu'));
            var videoBox = function (){
                $('.videobox1').colorbox({
                    inline:true,
                    height: "400",
                    transition:"fade",
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
                url: listUrl,
                //type: 'POST',
                cache: false,
                dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                timeout: 8000,
                data: {
                    type: type,
                    currentPage: currPage,
                    pageSize: pageNum
                },
                success: function(res) {
                    //if(res.code == 0 ){

                        var tpl = $('#video-tmpl').html();
                        var tplFun = doT.template(tpl);
                        $('.video-list').append(tplFun(res));
                        videoBox();

                    //}else if(res.code != 0){
                    //    console.log("失败");
                    //}
                },
                error: function(err) {
                    console.log("error");
                }
            });

        },
        scrollBox: function(){
            var _this = this,
                wrapH = $(window).height(),
                scrollH = wrapH - (36+36+40);
            _this.$('.album-box-bd').css('height',scrollH);
        },
        imgMore: function(e){
            var _self = $(e.target),
                _this= this;
                num = parseInt(_self.data('num'));
            num++;
            _self.attr('data-num',num);

            _this.loadData(_this.iType, num, _this.pNum);

        },
        videoMore: function(e){
            var _self = $(e.target),
                _this= this;
                num = parseInt(_self.data('num'));
            num++;
            _self.attr('data-num',num);

            _this.loadVideo(_this.vType, num, _this.pNum);

        },
        download: function(e){
            var _this = this,
                $etg = $(e.target),
                downloadUrl = AppApi.album.download,
                _ck = $('input[data-inner=inner]'),
                ckFid = '',
                srcData = '',
                ckArr = [];

            $.each(_ck, function(idx, val) {
                var self = $(this);
                if (self.hasClass('cked')) {
                    ckArr.push(self.data('fid'));
                    srcData = self.parents('li').find('img').attr('src') +'?='+ new Date().getTime();
                }

            });
            var dowloadDate = ckArr.join("");
            var msg = '';
            var downloadItem = function(){

                $.ajax({
                    url: downloadUrl,
                    //type: 'POST',
                    cache: false,
                    dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                    timeout: 8000,
                    data: dowloadDate,
                    success: function(res) {
                        if(res.code == 0 ){
                            console.log(res.msg);
                            _this.downloadFile(srcData);
                            msg = res.msg;
                        }else if(res.code != 0){
                            console.log(res.msg);
                            msg = res.msg;
                        }
                        $.gxDialog({
                            title: '提示',
                            info: msg,
                            timeout: 1000
                        });
                    },
                    error: function(err) {
                        console.log("error");
                    }
                });

            };
            if ( ckArr && ckArr.length != 1 ) {
                $.gxDialog({
                    title: '提示',
                    width: 400,
                    timeout: 3000,
                    info: '请选择单张要下载的照片！'
                });
            } else{
                $.gxDialog({
                    title: '提示',
                    width: 400,
                    info: '确定下载该照片吗？',
                    ok: function(){
                        downloadItem();
                    },
                    no: function(){

                    }
                });
            }
        },
        dele: function(){
            var _this = this,
                delUrl = AppApi.album.dele,
                _ck = $('input[data-inner=inner]'),
                ckArr = [];

            $.each(_ck, function(idx, val) {
                var self = $(this);
                if (self.hasClass('cked')) {
                    ckArr.push(self.data('fid'));
                }

            });

            var deleDate = {
                fids: ckArr.join(",")
            };
            var msg = '';
            var deleItem = function(){
                $.each(_ck, function(idx, val) {
                    var self = $(this);
                    if (self.hasClass('cked')) {
                        self.parents('li').remove();
                    }
                });

                $.ajax({
                    url: delUrl,
                    //type: 'POST',
                    cache: false,
                    dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                    timeout: 8000,
                    data: deleDate,
                    success: function(res) {
                        if(res.code == 0 ){
                            console.log(res.msg);
                            msg = res.msg;
                        }else if(res.code != 0){
                            console.log(res.msg);
                            msg = res.msg;
                        }
                        $.gxDialog({
                            title: '提示',
                            info: msg,
                            timeout: 1000
                        });
                    },
                    error: function(err) {
                        console.log("error");
                    }
                });

            };
            if ( ckArr && ckArr.length <= 0) {
                $.gxDialog({
                    title: '提示',
                    width: 400,
                    timeout: 3000,
                    info: '请选择要删除的照片！'
                });
            } else{
                $.gxDialog({
                    title: '提示',
                    width: 400,
                    info: '确定删除该照片吗？',
                    ok: function(){
                        deleItem();
                    },
                    no: function(){

                    }
                });
            }
        },
        downloadFile: function(fileName, content){
            var aLink = document.createElement('a'),
                blob = new Blob([content]),
                evt = document.createEvent("HTMLEvents");

            evt.initEvent("click");

            aLink.download = fileName;
            aLink.href = URL.createObjectURL(blob);
            aLink.dispatchEvent(evt);
        }



});


    module.exports = AlbumView;
});


