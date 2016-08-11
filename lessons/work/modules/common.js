import React from 'react'
import Redux from './redux'
import Utilities from './utilities'

import CommonMixin2 from './common2'

export default   {
    mixins: [CommonMixin2,Utilities],
    num:-1,
    flyEles (num, that) {
        for (let i = 0; i < this.sentences.length; i++) {
            num = this.setPageState(num);
            that.setArrowsUi.call(that, num);
        }
        return num;
    },
    componentDidMount: function () {
        Redux.dispatch({type: 'INCREMENT'})
        let classlet = "none animated";
        this.generateNodesFromJson(classlet)
        let that = this
        //this.num = this.flyEles(this.num, that);
        $('#right').on('click', (evt)=> {
            this.num = this.setPageState(this.num);
            that.setArrowsUi.call(that, this.num);
        })
        $('#left').on('click', (i, n)=> {
            this.num = this.leftClickEvt(this.num, that);
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
            $('#left').css('opacity', 1)
        } else {
            $('#left').css('opacity', 0.5)
        }
        if (i < this.sentences.length - 1) {
            $('#right').css('opacity', 1)

        } else {
            $('#right').css('opacity', 0.5)

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
        </div>
        return contents
    },
};
