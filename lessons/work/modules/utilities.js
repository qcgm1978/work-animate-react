import React from 'react'
let obj = {
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    setTxtClick (selector) {
        $(selector).click(function () {
            //$(this).animateCss('pulse')
            $(this).addClass('txt-click')
        })
    },
    extendJquery(){
        $.fn.extend({
            animateCss: function (animationName, isHidden) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                if (isHidden) {
                    $(this).removeClass('none')
                }
                $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });
        $.fn.clickToggle = function (func1, func2) {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function (evt) {
                var data = $(this).data();
                var tc = data.toggleclicked;
                $.proxy(funcs[tc], this,evt)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
    },
};
obj.extendJquery();
export default obj;