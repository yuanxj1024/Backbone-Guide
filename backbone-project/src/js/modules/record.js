/**
 * @description: record
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
        gxdialog = require("gxdialog");

    // 设置弹出层颜色
    $.gxDialog.defaults.background = '#000';

    var RecordView = Backbone.View.extend({
        el: $('.RecordView'),
        rType: 3,
        pNum: 5,
        events: {
            'mouseover .menu-hover': function() {
                $('.menu-layer').show();
            },
            'mouseleave .menu-layer': function(){
                $('.menu-layer').hide();
            },
            'click .loadingMore': 'loadingMore',
            'click .download-btn': 'download',
            'click .del-btn': 'dele',
            'click .record-item': function(e){
                var _self = $(e.target).parent();

                if (_self.hasClass('curr')) {
                    _self.removeClass('curr');
                }else{
                    _self.addClass('curr');
                }
            }

        },
        initialize: function() {
            this.render();
        },
        render: function(){
            var _this = this;

            doT.static('/templates/record.html', function(html) {
                _this.$el.html(html);
                _this.$el.show();
                header.render();
                _this.loadData(_this.rType, 1, _this.pNum);
                _this.loadNum();
                _this.scrollBox();
            });

            return _this;
        },
        loadData:function(type, currPage, pageNum){
            var _this = this;
            listUrl = AppApi.record.findFiles;


            $.ajax({
                url: listUrl,
                type: 'POST',
                dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                timeout: 8000,
                data: {
                    type: type,
                    currentPage: currPage,
                    pageSize: pageNum
                },
                success: function(res) {
                    //if(res.code == 0 ){
                    var tpl = $('#record-tmpl').html();
                    var tplFun = doT.template(tpl);
                    $('.record-list').append(tplFun(res));

                    //}else if(res.code != 0){
                    //    console.log("失败");
                    //}
                },
                error: function(err) {
                    console.log("error");
                }
            });
        },
        loadNum: function(){
            var _this = this,
                numUrl = AppApi.record.num;

            $.ajax({
                url: numUrl,
                type: 'POST',
                dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                timeout: 8000,
                data: {
                    type: _this.rType
                },
                success: function(res) {

                    if(res.code == 0 ){
                        console.log(res.msg);
                        var tpl = $('#num-tmpl').html();
                        var tplFun = doT.template(tpl);
                        _this.$('#record-num').find('span').html(tplFun(res));

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
        loadingMore: function(e){
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
                    type: _this.rType,
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
                    var _el = $('.record-list').find('.record-time');
                    $.each(_el, function(index, val){
                        var self = $(this);
                        var domTime = self.find('.item-group-time').text();
                        $.each(res, function(idx, v) {
                            var item = v.newFilesModelList;
                            var jsonTime = v.ctime
                            if (jsonTime == domTime) {
                                $.each(item, function(i, iv) {
                                    var _html = '<li class="record-item" data-fid="{%!item[j].fid%}" data-path="{%!item[j].path%}">'
                                            +'<div class="call-record-sound-first">'
                                        +'<i class="call-record-sound-icon"></i>'
                                        +'<span>'+iv.fileName+'</span>'
                                        +'</div>'
                                        +'<div class="call-record-sound-two">'
                                        +'<span class="record-time">'+iv.ctime+'</span>'
                                        +'</div>'
                                        +'</li>';
                                    self.next('.call-record-sound').find('ul').append(_html);
                                });
                            }
                        });
                    });
                },
                error: function(err) {
                    console.log("error");
                }
            });
        },
        scrollBox: function(){
            var _this = this,
                wrapH = $(window).height(),
                scrollH = wrapH - (36+40);
            _this.$('#record-view').css('height',scrollH);
        },
        download: function(e){
            var _this = this,
                $etg = $(e.target),
                downloadUrl = AppApi.album.download,
                $curr = $('.record-item'),
                currName = '',
                srcData = '',
                currArr = [];

            $.each($curr, function(idx, val) {
                var self = $(this);
                if (self.hasClass('curr')) {
                    currArr.push(self.data('fid'));
                    srcData = self.data('path');
                    currName = self.data('name');
                }

            });
            var dowloadDate = currArr.join("");
            var msg = '';
            var downloadItem = function(){

                $.ajax({
                    url: downloadUrl,
                    type: 'POST',
                    dataType: window.DEBUG_TEST_DATA ? 'json':'jsonp',
                    timeout: 8000,
                    data: dowloadDate,
                    success: function(res) {
                        _this.downloadFile(currName, srcData);

                    },
                    error: function(err) {
                        console.log("error");
                    }
                });

            };
            if ( currArr && currArr.length != 1 ) {
                $.gxDialog({
                    title: '提示',
                    width: 400,
                    timeout: 3000,
                    info: '请选择单张要下载的录音！'
                });
            } else{
                $.gxDialog({
                    title: '提示',
                    width: 400,
                    info: '确定下载该录音吗？',
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
                delUrl = AppApi.record.dele,
                $curr = $('.record-item'),
                currArr = [];

            $.each($curr, function(idx, val) {
                var self = $(this);
                if (self.hasClass('curr')) {
                    currArr.push(self.data('fid'));
                }

            });
            var deleDate = {
                fids: currArr.join(",")
            };
            var msg = '';
            var deleItem = function(){
                $.each($curr, function(idx, val) {
                    var self = $(this);
                    if (self.hasClass('curr')) {
                        self.remove();
                    }
                });

                $.ajax({
                    url: delUrl,
                    type: 'POST',
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
            if ( currArr && currArr.length <= 0) {
                $.gxDialog({
                    title: '提示',
                    width: 400,
                    timeout: 3000,
                    info: '请选择要删除的录音！'
                });
            } else{
                $.gxDialog({
                    title: '提示',
                    width: 400,
                    info: '确定删除该录音吗？',
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


    module.exports = RecordView;
});
