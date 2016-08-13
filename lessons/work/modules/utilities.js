import React from 'react'
import $ from '../bower_components/jquery/dist/jquery.js'
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
    dragStart(event) {
        var style = window.getComputedStyle(event.target, null);
        event.dataTransfer.setData("text/plain",
            (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY));
    },
    dragOver(event) {
        event.preventDefault();
        return false;
    },
    drop(event) {
        var offset = event.dataTransfer.getData("text/plain").split(',');
        var dm = event.target;
        dm.style.left = (event.clientX - ($(window).width() - 600) / 2) + 'px';
        dm.style.top = (event.clientY ) + 'px';
        event.preventDefault();
        return false;
    }
};
obj.extendJquery();
export default obj;