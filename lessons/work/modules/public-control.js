require('./styles/public-control.scss')
import React from 'react'
import Utilities from './utilities'

export default React.createClass({
    mixins: [Utilities],
    getInitialState(){
        return {}
    },
    componentDidMount () {
        $.fn.clickToggle = function (func1, func2) {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function () {
                var data = $(this).data();
                var tc = data.toggleclicked;
                $.proxy(funcs[tc], this)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
        let that = this;

        function randomSteps(evt) {
            if (evt.data.isClicked) {
                $('.step').remove()
            } else {
                for (let i = 0; i < 5; i++) {
                    $('<div>')
                        .addClass('step animated bounceInRight')
                        .css({
                            left: that.randomIntFromInterval(83, 600) - 83,
                            top: that.randomIntFromInterval(61, 500) - 61,
                            'background-image': "url('./images/public-control/follow-me/step-" +
                            (i+1) +
                            ".png')"

                })
                        .appendTo('.container')
                }
            }
            evt.data.isClicked = !evt.data.isClicked;
        }

        $('.step-show')
            .click(function (evt) {
                $(this)
                    .find('.check-mark')
                    .add('.pop-up')
                    .toggle()
            })

        $('.follow-me')
            .click({isClicked: false}, function (evt) {
                $(this).find('.check-mark').toggle()
                randomSteps(evt);

            })

        $('.close')
            .click(function () {
                $('.step-show')
                    .find('.check-mark')
                    .add('.pop-up')
                    .toggle()
            })
        $('.prev,.next,.close')
            .mousedown(function () {
                $(this).addClass('click')
            })
            .mouseup(function () {
                $(this).removeClass('click')
            })



    },
    componentDidUpdate(){
    },
    generateNodesFromJson(){
        this.getJson('modules/data/10.json');
    },
    generateNodes (classVar) {
    },
    render() {
        return (
            <div id='public-control' className='container noselect'>
                <div className='indicate'>
                    <div className='step-show'>
                        <div className='check-mark none'></div>
                    </div>
                    <div className='follow-me'>
                        <div className='check-mark none'></div>

                    </div>
                </div>
                <div className='pop-up none'>
                    <div className='header'>STEP SHOW
                        <div className='close'></div>
                    </div>
                    <dl>
                        <dt>STEP 1</dt>
                        <dd>introduce yourself to the students</dd>
                    </dl>
                </div>
                <div className='control'>
                    <div className='prev'></div>
                    <div className='play'>
                        <img className='center' src='./images/public-control/control/play.png'/>
                    </div>
                    <div className='next'></div>
                </div>
            </div>
        )
    }
})