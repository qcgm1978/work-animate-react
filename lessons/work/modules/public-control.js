require('./styles/public-control.scss')
import React from 'react'
import CommonMixin from './common'

export default React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
    },
    componentDidMount () {
        $.fn.clickToggle = function(func1, func2) {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function() {
                var data = $(this).data();
                var tc = data.toggleclicked;
                $.proxy(funcs[tc], this)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
        $('.step-show').clickToggle(function () {
            $(this).css('background-image','url("./images/public-control/step-show/help-click.png")')
        },function(){
            $(this).css('background-image','url("./images/public-control/step-show/help.png")')

        })
        $('.follow-me').clickToggle(function () {
            $(this).css('background-image','url("./images/public-control/follow-me/follow-click.png")')
        },function(){
            $(this).css('background-image','url("./images/public-control/follow-me/follow.png")')

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

                    </div>
                    <div className='follow-me'>

                    </div>
                </div>

            </div>
        )
    }
})