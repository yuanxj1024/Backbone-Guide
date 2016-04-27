define(['backbone', 'jquery'], function (Backbone, $) {


    var BaseView = Backbone.View.extend({

        initialize: function (options) {
            //处理元素
            this.elements && this.initElements();
            //处理时间
            this.defineNotify && this.defineNotify();
            //准备就绪
            this.ready && this.ready(options);

        },

        /**
         * 为延迟dom绑定时间
         * @param options
         * {
         *     'click .clsName': 'functionName'
         * }
         */
        bindElements: function (options) {
            var self = this;
            _.each(options, function (value, item) {
                var args = item.split(/\s+/);
                var eventName = args[0];
                var el = args[1];
                var callback = _.bind(self[options[item]], self);
                $(el).on(eventName, callback);
            });
        },
        /*
         绑定页面元素
         */
        initElements: function () {
            var ele, self;
            self = this;
            for (ele in this.elements) {
                self[self.elements[ele]] = self.$el.find(ele);
            }
            return this;
        },
        jsonp: function (data, success, error) {
            var jsonpXHR = $.ajax({
                url: this.url,
                data: this.data || {},
                dataType: 'jsonp',
                jsonp: 'callback'
            });
            jsonpXHR.done(function (response, state, xhr) {
                success && success(response);
            });
            jsonpXHR.fail(function (xhr, state, errors) {
                error && error(errors);
            });
        },
        trigger: function (name, args) {
            Backbone.trigger(name, args);
        },
        on: function (name, callback) {
            callback = _.bind(callback, this);
            Backbone.on(name, callback);
        },
        go: function (url) {
            if (url) {
                window.location.href = url;
            } else {
                window.history.go(-1);
            }
        }

    });

    return BaseView;

});