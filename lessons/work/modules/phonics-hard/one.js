require('../styles/phonics-hard/one.scss')
import React from 'react'
import CommonMixin from '../common'

export default React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
    },
    componentDidMount () {
        $('p').click(function () {
            $(this).css('font-size', '34px')
        })
    },
    componentDidUpdate(){
        for (let i = 0; i < this.sentences.length; i++) {
            this.num = this.setPageState(this.num);
            this.setArrowsUi(this.num);
        }
        $('[src*="sentence-"]').mouseover(function () {
            $(this).removeClass().animateCss('pulse')
        });
    },
    generateNodesFromJson(){
        this.getJson('modules/data/1.json');
    },
    render() {
        return (
            <div id='one' className='container'>
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
                <img id='tree' src='./images/phonics/hard/1/tree.png'/>
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