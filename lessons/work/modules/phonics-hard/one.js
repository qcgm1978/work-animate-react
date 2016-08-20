require('../styles/phonics-hard/one.scss')
import React from 'react'
import CommonMixin from '../common'
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
            <div id='hard-one' className='container'>
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
                    <div id='d'>

                        <img className='dog' src="./images/phonics/hard/1/d.png"/>

                        <p className=''>is for dog, d d dog</p></div>

                </div>
                <img id='tree' src='./images/phonics/hard/1/tree.png'/>
                <img id='cat' src='./images/phonics/hard/1/cat.png'/>
                <img id='dog' src='./images/phonics/hard/1/dog.png'/>
                <img id='ball' src='./images/phonics/hard/1/ball.png'/>
                <img id='music' src='./images/phonics/hard/1/music.png'/>
                <img id='title' src='./images/phonics/hard/1/title.png'/>
                <img id='sentence' src='./images/phonics/hard/1/sentence.png'/>
                {
                    this.getPublicControl(false, {
                        ordinal: 2,
                        left: 236,
                        top: 105,
                        big:true
                    }, [
                        'say"let\'s sing the song',
                        '(pause after each sentence)sing the song and guide the student to repeat',
                        'sing the song with the studentnd guide the student to repeat',
                        'sing the song with the student'
                    ])
                }

            </div>
        )
    }
})