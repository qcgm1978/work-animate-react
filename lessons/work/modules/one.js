require('./styles/one.scss')
import React from 'react'
import CommonMixin from './common'

export default React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
    },
    componentDidMount () {
        this.setMouseOver();
    },
    componentDidUpdate(){
        for (let i = 0; i < this.sentences.length; i++) {
            this.num = this.setPageState(this.num);
            this.setArrowsUi(this.num);
        }
    },
    generateNodesFromJson(){
        this.getJson('modules/data/1.json');
    },
    render() {
        return (
            <div id='one' className='container one'>
                {this.getElementsNodes()}
                <div>
                    <div id='a'>
                        <img className='apple ' src="./images/9/a.png"/>

                        <p className=''>is for apple, a a apple</p></div>

                    <div id='b'>

                        <img className='ball ' src="./images/9/b.png"/>

                        <p className=''>is for ball, b b ball</p></div>

                    <div id='c'>

                        <img className='cat ' src="./images/9/c.png"/>

                        <p className=''>is for cat, c c cat</p></div>

                </div>

                {this.getPublicControl(false, {
                    ordinal: 2,
                    left: 271,
                    top: 100
                }, [
                    'say"let\'s sing the song',
                    '(pause after each sentence)sing the song and guide the student to repeat',
                    'sing the song with the studentnd guide the student to repeat',
                    'sing the song with the student'
                ])}

            </div>
        )
    }
})