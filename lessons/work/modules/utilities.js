import React from 'react'
let obj = {
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    setTxtHover (selector) {
        $(selector).hover(function () {
            $(this).removeClass().addClass('animated pulse')
        }, function () {
            $(this).removeClass('animated pulse')
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
    },
};
obj.extendJquery();
export default obj;