require('./styles/public-control.scss')
import React from 'react'
import CommonMixin from './common'

export default React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
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
        $('.step-show')
            .click(function () {
                $(this)
                    .find('.check-mark')
                    .add('.pop-up')
                    .toggle()
            })
            .hover(function () {
                $(this).css('background-image', 'url("./images/public-control/step-show/help-hover.png")')
            }, function () {
                $(this).css('background-image', 'url("./images/public-control/step-show/help.png")')
            })
        $('.follow-me')
            .click(function () {
                $(this).find('.check-mark').toggle()
            })
            .hover(function () {
                $(this).css('background-image', 'url("./images/public-control/follow-me/follow-me-hover.png")')
            }, function () {
                $(this).css('background-image', 'url("./images/public-control/follow-me/follow.png")')
            })
        $('.close')
            .mousedown(function(){
                $(this).css('background-image', 'url("./images/public-control/close-click.png")')

            })
            .click(function () {
                $('.pop-up').hide()
            }).hover(function () {
                $(this).css('background-image', 'url("./images/public-control/close-hover.png")')
            }, function () {
                $(this).css('background-image', 'url("./images/public-control/close.png")')
            })
        $('.prev')
            .mousedown(function () {
                $(this).css('background-image', 'url("./images/public-control/control/prev-click.png")')
            })
            .hover(function () {
                $(this).css('background-image', 'url("./images/public-control/control/prev-hover.png")')
            }, function () {
                $(this).css('background-image', 'url("./images/public-control/control/prev.png")')
            })
        $('.next')
            .mousedown(function () {
                $(this).css('background-image', 'url("./images/public-control/control/next-click.png")')
            })
            .hover(function () {
                $(this).css('background-image', 'url("./images/public-control/control/next-hover.png")')
            }, function () {
                $(this).css('background-image', 'url("./images/public-control/control/next.png")')
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