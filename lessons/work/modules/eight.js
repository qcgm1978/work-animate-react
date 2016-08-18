require('./styles/eight.scss')
import React from 'react'
import CommonMixin from './common'
import Popup from './popup.js'

export default React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
        return {
            popup: 'none',
            position: {
                left: 0,
                top: 0
            },
            src: '',
            order: 1
        }
    },
    componentDidMount () {
    },
    componentDidUpdate(){
        let that = this;
        var arr = ['[src$="apple.png"]', '[src$="ball.png"]', '[src$="cat.png"]'];
        $.each(arr, function (i, n) {
            $(this).off().click(function () {
                $('.pulse').removeClass('pulse')
                $(this).addClass('pulse')
                $('[ordinal=' + (i + 1) + ']').remove()
                that.setState({
                    popup: '',
                    position: 'popup-' + i,
                    src: $(this).attr('src')
                })
            })
        });
    },
    generateNodesFromJson(){
        this.getJson('modules/data/8.json');
    },
    render() {
        let exec = /([^/]+)\.png$/.exec(this.state.src), word = '', num = 1;
        if ($.isArray(exec)) {
            word = exec[1]
            if (word == 'apple') {
                num = 1;
            } else if (word == 'ball') {
                num = 2;
            } else {
                num = 3
            }
        }
        return (
            <div id='eight' className='container'>
                {



                    this.getElementsNodes(true)
                }
                <Popup className={this.state.popup} popup={this.state.position} face='none' options={''} word={word}
                       num={num}/>
                {this.getPublicControl(false, [
                        {
                            ordinal: 1,
                            left: 121,
                            top: 180
                        },
                        {
                            ordinal: 2,
                            left: 350,
                            top: 310
                        },
                        {
                            ordinal: 3,
                            left: 440,
                            top: 330
                        }],
                    ['ask student click the apple and answer the question', 'ask student click the ball and answer the question', 'ask student click the cat and answer the question'],
                                        this.state.order
                )

                }
            </div>
        )
    }
})