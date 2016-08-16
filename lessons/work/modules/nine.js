require('./styles/nine.scss')
import React from 'react'
import CommonMixin from './common'

export default React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
    },
    componentDidMount () {
    },
    componentDidUpdate(){
        $('#a,#b,#c').find(':first').click(function func() {
            $(this).nextAll().animateCss('flipInX', true)
        })
    },
    generateNodesFromJson(){
        this.getJson('modules/data/9.json');
    },
    generateNodes (classVar) {
    },
    render() {
        return (
            <div id='nine' className='container'>
                {this.getElementsNodes(true)}
                <div>
                    <div id='a'>
                        <img src="./images/9/apple.png"/>
                        <img className='apple none' src="./images/9/a.png"/>

                        <p className='none'>is for apple, a a</p></div>

                    <div id='b'>
                        <img src="./images/9/ball.png"/>

                        <img className='ball none' src="./images/9/b.png"/>

                        <p className='none'>is for ball, b b</p></div>

                    <div id='c'>
                        <img src="./images/9/cat.png"/>

                        <img className='cat none' src="./images/9/c.png"/>

                        <p className='none'>is for cat, c c</p></div>

                </div>
                {this.getPublicControl(false,{},[
                    'ask student click the apple and answer the question',
                    'ask studentclick the ball and answer the question',
                    'ask studentclick the cat and answer the question'
                ])}

            </div>
        )
    }
})