import React from 'react'
export default   {
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    setTxtHover (selector) {
        $(selector).hover(function () {
            $(this).removeClass().addClass('animated pulse')
        }, function () {
            $(this).removeClass('animated pulse')
        })
    }
};
