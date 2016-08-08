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
        $('.close').click(function () {
            $('.pop-up').hide()
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
            <div id='public-control' className='container'>
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
            </div>
        )
    }
})