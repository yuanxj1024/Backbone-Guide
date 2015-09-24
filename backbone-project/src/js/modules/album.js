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
        lazyload = require("jquery/lazyload"),
        videojs = require("video");

    // 设置弹出层颜色
    $.gxDialog.defaults.background = '#000';

    var AlbumView = Backbone.View.extend({
        el: $('.AlbumView'),
        iType: 1,
        vType: 2,
        pNum: 6,
        events: {
            'mouseover .menu-hover': function() {
                $('.menu-layer').show();
            },
            'mouseleave .menu-layer': function(){
                $('.menu-layer').hide();
            },
            'click .btn-all-i': 'imgAll',
            'click .btn-undo-i': 'undoImgAll',
            'click .btn-all-v': 'videoAll',
            'click .btn-undo-v': 'undoVideoAll',
            'click .out-btn': 'selectItem',
            'click .img-menu': 'showImg',
            'click .video-menu': 'showVideo',
            'click .imgMore a': 'imgMore',
            'click .videoMore a': 'videoMore',
            'click .download-btn': 'download',
            'click .del-btn': 'dele',
            'click .album-del': 'dialogDele',
            'click .ck-box': function(e){
                var _self = $(e.target),
                    _this = this;
                if (_self.hasClass('cked')) {
                    _self.prev().removeAttr("checked");
                    _self.removeClass('cked');
                }else{
                    _self.prev().attr("checked", true);
                    _self.addClass('cked');
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
                _this.loadData(_this.iType,1,_this.pNum);
            });

        },
        selectNum:function($el, $num){
            var _this = this,
            $cked = $el.find('.ck-box');
            $.each($cked, function(idx, val) {
                var self = $(this);
                if (self.hasClass('cked')) {
                    $num.text(self.length);
                }else{
                    $num.text(0);
                }

            });
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
        loadData: function(type, currPage, pageNum){
            var _this = this;
                listUrl = AppApi.album.findFiles;
            _this.loadNum(_this.iType, $('.img-menu'));
            _this.loadNum(_this.vType, $('.video-menu'));

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
                        $('#img-view').html(tplFun(res));
                        _this.photoBox();

                        $('img.lazyload-img').lazyload({
                            effect : "fadeIn",
                            container: $(".album-box-bd")
                        });

                    //}else if(res.code != 0){
                    //    console.log("失败");
                    //}
                },
                error: function(err) {
                    console.log("error");
                }
            });

        },
        imgAll: function(){
            var _this = this;
            var $ck = _this.$('#img-view').find('input[type=checkbox]');
            _this.selectAll($ck);
        },
        videoAll: function(){
            var _this = this;
            var $ck = _this.$('#video-view').find('input[type=checkbox]');
            _this.selectAll($ck);
        },
        selectAll: function($elem){
            var _elem = $elem;
            _elem.attr("checked",true);
            _elem.next().addClass('cked');
        },
        undoImgAll: function(){
            var _this = this;
            var $ck = _this.$('#img-view').find('input[type=checkbox]');
            _this.undoAll($ck);
        },
        undoVideoAll: function(){
            var _this = this;
            var $ck = _this.$('#video-view').find('input[type=checkbox]');
            _this.undoAll($ck);
        },
        undoAll: function($elem){
            var _elem = $elem;
            _elem.removeAttr("checked");
            _elem.next().removeClass('cked');

        },
        selectItem: function(e){
            var _this = this,
                _self = $(e.target),
                _item = _self.parents('.album-time').next('.album-item');

            if (_self.hasClass('cked')) {
                _self.prev().removeAttr("checked");
                _self.removeClass('cked');
                _item.find('.ck-box').removeClass('cked');
                _item.find('input[data-inner=inner]').removeAttr("checked");
            }else{
                _self.prev().attr("checked", true);
                _self.addClass('cked');
                _item.find('.ck-box').addClass('cked');
                _item.find('input[data-inner=inner]').attr("checked", true);
            }

        },
        showImg: function(){
            var _this = this;
            _this.$('.item-iBox').show();
            _this.$('.item-vBox').hide();

            if (_this.$('.img-menu').hasClass('curr')) {
                return false;
            }else{
                _this.$('.video-menu').removeClass('curr');
                _this.$('.img-menu').addClass('curr');
                var $vcked= _this.$('#video-view').find('input[type=checkbox]');
                $vcked.removeAttr("checked");
                $vcked.next().removeClass('cked');
            }
        },
        showVideo: function(){
            var _this = this;
            _this.$('.item-iBox').hide();
            _this.$('.item-vBox').show();

            if (_this.$('.video-menu').hasClass('curr')) {
                return false;
            }else{
                _this.loadVideo(_this.vType, 1, _this.pNum);
                _this.$('.img-menu').removeClass('curr');
                _this.$('.video-menu').addClass('curr');
                var $icked = _this.$('#img-view').find('input[type=checkbox]');
                $icked.removeAttr("checked");
                $icked.next().removeClass('cked');
            }
        },
        loadVideo: function(type, currPage, pageNum){
            var _this = this,
                listUrl = AppApi.album.findFiles;

            $.ajax({
                url: listUrl,
                //type: 'POST',
                dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                timeout: 8000,
                cache: false,
                data: {
                    type: type,
                    currentPage: currPage,
                    pageSize: pageNum
                },
                success: function(res) {
                    //if(res.code == 0 ){

                        var tpl = $('#video-tmpl').html();
                        var tplFun = doT.template(tpl);
                        $('#video-view').html(tplFun(res));
                        _this.videoBox();

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
        photoBox: function (){
            var _this = this;
            _this.$('.colorbox1').colorbox({
                inline:true,
                rel: 'group2',
                transition: "fade",
                opacity: '0.6',
                onLoad: function(){
                    $('.img-more-infor').hide();
                },
                onComplete: function(){
                    $(".album-del").on('click', function(e){
                        e.preventDefault();
                        var currFid = $(this).data('fid');
                        console.log(currFid);
                        var deleCurrItem = function(){
                            $.ajax({
                                url: AppApi.album.dele,
                                type: 'POST',
                                dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                                timeout: 8000,
                                cache: false,
                                data: {
                                    fids: currFid
                                },
                                success: function(res) {
                                    if(res.code == 0 ){
                                        console.log(res.msg);
                                    }else if(res.code != 0){
                                        console.log(res.msg);
                                    }
                                },
                                error: function(err) {
                                    console.log("error");
                                }
                            });

                        };
                        $.gxDialog({
                            title: '提示',
                            width: 400,
                            info: '确定删除该照片吗？',
                            ok: function(){
                                deleCurrItem();
                            },
                            no: function(){

                            }
                        });

                    });
                    var $intro = $('#cboxWrapper').find(".album-intro");
                    $intro.hover(function() {
                        $intro.next().show();
                    }, function() {
                        $intro.next().hide();
                    });
                }
            });
        },
        videoBox: function (){
            $('.videobox1').colorbox({
                inline:true,
                height: "400",
                transition:"fade",
                opacity: '0.6',
                onLoad: function(){
                    $('.img-more-infor').hide();
                },
                onComplete: function(){
                    $(".album-del").on('click', function(e){
                        e.preventDefault();
                        var currFid = $(this).data('fid');
                        console.log(currFid);
                        var deleCurrItem = function(){
                            $.ajax({
                                url: AppApi.album.dele,
                                type: 'POST',
                                dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                                timeout: 8000,
                                cache: false,
                                data: {
                                    fids: currFid
                                },
                                success: function(res) {
                                    if(res.code == 0 ){
                                        console.log(res.msg);
                                    }else if(res.code != 0){
                                        console.log(res.msg);
                                    }
                                },
                                error: function(err) {
                                    console.log("error");
                                }
                            });

                        };
                        $.gxDialog({
                            title: '提示',
                            width: 400,
                            info: '确定删除该视屏吗？',
                            ok: function(){
                                deleCurrItem();
                            },
                            no: function(){

                            }
                        });

                    });
                    var $intro = $('#cboxWrapper').find(".album-intro");
                    $intro.hover(function() {
                        $intro.next().show();
                    }, function() {
                        $intro.next().hide();
                    });
                }
            });
        },
        imgMore: function(e){
            var _self = $(e.target),
                _this= this;
            num++;
            _self.attr('data-num',num);

            var listUrl = AppApi.album.findFiles;
            $.ajax({
                url: listUrl,
                type: 'POST',
                dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                timeout: 8000,
                cache: false,
                data: {
                    type: _this.iType,
                    currentPage: num,
                    pageSize: _this.pNum
                },
                success: function(res) {
                    if (res.code == 8) {
                        $.gxDialog({
                            title: '提示',
                            width: 400,
                            info: res.msg,
                            timeout: 1000
                        });
                        return false;
                    }
                    var _el = $('#img-view').find('.album-time');
                    $.each(_el, function(index, val){
                        var self = $(this);
                        var domTime = self.find('.item-group-time').text();
                        $.each(res, function(idx, v) {
                            var item = v.newFilesModelList;
                            var jsonTime = v.ctime
                            if (jsonTime == domTime) {
                                var tpl = $('#imgMore-tmpl').html();
                                var tplFun = doT.template(tpl);
                                self.next('.album-item').find('ul').append(tplFun(item));
                                _this.photoBox();
                            }
                        });
                    });
                },
                error: function(err) {
                    console.log("error");
                }
            });

        },
        videoMore: function(e){
            var _self = $(e.target),
                _this= this;
            num++;
            _self.attr('data-num',num);

            var listUrl = AppApi.album.findFiles;
            $.ajax({
                url: listUrl,
                //type: 'POST',
                dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                timeout: 8000,
                cache: false,
                data: {
                    type: _this.vType,
                    currentPage: num,
                    pageSize: _this.pNum
                },
                success: function(res) {
                    if (res.code == 8) {
                        $.gxDialog({
                            title: '提示',
                            width: 400,
                            info: res.msg,
                            timeout: 1000
                        });
                        return false;
                    }
                    var _el = $('#video-view').find('.album-time');
                    var item, domTime, jsonTime;

                    $.each(_el, function(index, val){
                        var self = $(this);
                        domTime = Date.parse(self.find('.item-group-time').text());
                        $.each(res, function(idx, v) {
                            item = v.newFilesModelList;
                            jsonTime = v.ctime;
console.log(domTime);
                            console.log('aaaaaaaa');
console.log(jsonTime);
                            if (jsonTime == domTime) {
                                var tpl = $('#videoMore-tmpl').html();
                                var tplFun = doT.template(tpl);
                                self.next('.album-item').find('ul').append(tplFun(item));
                                _this.videoBox();
                            }else{
                                var _tpl = $('#video-tmpl').html();
                                var _tplFun = doT.template(_tpl);
                                $('#video-view').append(_tplFun(res));
                                _this.videoBox();
                            }
                        });
                    });

                },
                error: function(err) {
                    console.log("error");
                }
            });

        },
        download: function(e){
            var _this = this,
                $etg = $(e.target),
                downloadUrl = AppApi.album.download,
                _ck = _this.$('.ck-box'),
                imgName = '',
                srcData = '',
                ckArr = [];

            $.each(_ck, function(idx, val) {
                var self = $(this);
                if (self.hasClass('cked')) {
                    ckArr.push(self.data('fid'));
                    srcData = self.parents('li').find('img').data('src');
                    imgName = self.parents('li').find('img').data('name');
                }
            });
            var dowloadData ={
                fid:ckArr.join("")
            };
            var msg = '';
            var downloadItem = function(){

                $.ajax({
                    url: downloadUrl,
                    type: 'POST',
                    dataType: 'text',
                    timeout: 8000,
                    cache: false,
                    data: dowloadData,
                    success: function(res) {
                        _this.downloadFile(imgName, srcData);
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
                    info: '请选择单个要下载的文件！'
                });
            } else{
                $.gxDialog({
                    title: '提示',
                    width: 400,
                    info: '确定下载该文件吗？',
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
                _ck = _this.$('.ck-box'),
                ckArr = [];

            $.each(_ck, function(idx, val) {
                var self = $(this);
                if (self.hasClass('cked')) {
                    ckArr.push(self.data('fid'));
                }

            });

            var deleData = {
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
                    type: 'POST',
                    dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                    timeout: 8000,
                    cache: false,
                    data: deleData,
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
                            width: 400,
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
                    info: '请选择要删除的文件！'
                });
            } else{
                $.gxDialog({
                    title: '提示',
                    width: 400,
                    info: '确定删除该文件吗？',
                    ok: function(){
                        deleItem();
                    },
                    no: function(){

                    }
                });
            }
        },
        downloadFile: function(fileName, content){ //TODO
            var aLink = document.createElement('a'),
                //blob = new Blob([content]),
                evt = document.createEvent("MouseEvents");
                //evt = document.createEvent("HTMLEvents");

            evt.initEvent("click",true,true);
            dispatchEvent(evt);
            aLink.download = fileName;
            //aLink.href = URL.createObjectURL(blob);
            aLink.href = content;
            aLink.dispatchEvent(evt);
        }

});

    module.exports = AlbumView;
});


