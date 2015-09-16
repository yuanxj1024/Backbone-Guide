/**
 * @description: photobox
 * @author: lixinwei
 * @version: V1
 * @update: 15/9/1
 */

define(function (require, exports, module) {
    var $ = jQuery = require("jquery");
    var colorbox = require("jquery/colorbox");


    $(".colorbox1").colorbox({
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


    //module.exports = doSomething;
});
