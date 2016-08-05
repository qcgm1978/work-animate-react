import React from 'react'
import Redux from './redux'

import CommonMixin2 from './common2'

export default   {
    mixins: [CommonMixin2],
    componentDidMount: function () {
        Redux.dispatch({type: 'INCREMENT'})
        let classlet = "none animated";
        this.generateNodesFromJson(classlet)
        let that = this, num = -1
        $('#right').on('click', (evt)=> {
            num = this.setPageState(num);
            that.setArrowsUi.call(that, num);
        }).hover(()=> {
            $('#right').css('background', "url('./images/common/right-hover.png')")
        }, ()=> {
            that.setArrowsUi.call(that, num);
        }).mousedown(()=> {
            $('#right').css('background', "url('./images/common/right-active.png')")
        })
        $('#left').on('click', (i, n)=> {
            num = this.leftClickEvt(num, that);
        }).hover(()=> {
            $('#left').css('background', "url('./images/common/left-hover.png')")
        }, ()=> {
            that.setArrowsUi.call(that, num);
        }).mousedown(()=> {
            $('#left').css('background', "url('./images/common/left-active.png')")
        })
    },
    sentences: [],
    getInitialState(){
        return {
            eles: [],
            animateEles: []
        }
    },
    setArrowsUi: function (i) {
        if (i > -1) {
            $('#left').css('background', 'url(./images/common/left.png)')
        } else {
            $('#left').css('background', 'url(./images/common/left-gray.png)')
        }
        if (i < this.sentences.length - 1) {
            $('#right').css('background', 'url(./images/common/right.png)')
        } else {
            $('#right').css('background', 'url(./images/common/right-gray.png)')
        }
    },
    componentDidUpdate(){
    },
    getJson: function (url) {
        $.getJSON(url).done((data)=> {
            let eles = [], eles1 = [];
            eles = this.getEles(data.scenes[0].SceneStaticNodes, false, data.strict);
            eles1 = this.getEles(data.scenes[0].SceneAnimateNodes, true, data.strict);
            this.setState({
                eles: eles,
                animateEles: eles1
            })
        })
    },
    getElementsNodes(){
        let contents = <div>
            {this.state.eles.map(function (item, i) {
                return item
            })}
            <div id='animateContainer'>
                {
                    this.state.animateEles.map(function (item, i) {
                        return item
                    })
                }
            </div>
            <div id='left'></div>
            <div id='right'></div>
        </div>
        return contents
    },
};
