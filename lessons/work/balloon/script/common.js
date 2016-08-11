'use strict';
var obj = {
    componentDidUpdate: function componentDidUpdate() {
        this.sentences = $('#animateContainer img');
    },
    getEles: function getEles(data, isHidden, isStrict) {
        var eles = [];
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            var left = String(item.nodeProperties.left);
            var top = String(item.nodeProperties.top);
            var animate = data[i].animate;
            var style = {
                position: 'absolute', left: left + (left.endsWith('%') ? '' : 'px'),
                top: top + (top.endsWith('%') ? '' : 'px')
            };
            if (isStrict) {
                style = $.extend(item.nodeProperties, style);
            }
            var str = '';
            for (var p in style) {
                str += p + ':' + style[p]+';'
            }
            var $img = $('<img>', {
                src: item.imageSrc,
                "class": (isHidden ? 'none' : '') + ' animated ' + (animate ? animate : ''),
                style: str
            })
            $('#eleven').append($img)
        }
        return eles;
    }
};
