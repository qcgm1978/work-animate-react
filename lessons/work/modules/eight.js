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
            src:''
        }
    },
    componentDidMount () {
    },
    componentDidUpdate(){
        let that = this;
        $('[src$="apple.png"],[src$="ball.png"],[src$="cat.png"]').click(function () {
            $('.pulse').removeClass('pulse')
            $(this).addClass('pulse')
            that.setState({
                popup: '',
                position: $(this).position(),
                src:$(this).attr('src')
            })
        });
    },
    generateNodesFromJson(){
        this.getJson('modules/data/8.json');
    },
    render() {
        let exec = /([^/]+)\.png$/.exec(this.state.src),word='',num=1;
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
                <Popup className={this.state.popup} popup={this.state.position} face='none' options={''} word={word} num={num}/>
            </div>
        )
    }
})