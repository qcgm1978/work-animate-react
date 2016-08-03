require('./styles/eight.scss')
import React from 'react'
import CommonMixin from './common'
import generateFlashLight from './animation/flashlight'
export default React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
    },
    componentDidMount () {
        if (localStorage.test) {
            //$('<canvas></canvas>')
            //    .attr('id', 'canvas')
            //    //.attr('class', 'container  ')
            //    .width(300)
            //    .height(300)
            //    .appendTo('body')
            setTimeout(()=> {
                generateFlashLight('canvas')
            }, 100)
        }
    },
    componentDidUpdate(){
    },
    generateNodesFromJson(){
        this.getJson('modules/data/8.json');
    },
    generateNodes (classVar) {
    },
    render() {
        return (
            <div id='eight' className='container'>


                if(localStorage.test){

                <canvas id="canvas" width='600' height='500'></canvas>
            }
                {
                    this.getElementsNodes()
                }
            </div>
        )
    }
})