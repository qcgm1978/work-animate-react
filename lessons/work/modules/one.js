require('./styles/one.scss')
import React from 'react'
import CommonMixin from './common'

export default React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
    },
    componentDidMount () {
    },
    componentDidUpdate(){
        for (let i = 0; i < this.sentences.length; i++) {
            this.num = this.setPageState(this.num);
            this.setArrowsUi(this.num);
        }
        this.setTxtHover('[src*="sentence-"]');
    },
    generateNodesFromJson(){
        this.getJson('modules/data/1.json');
    },
    render() {
        return (
            <div id='one' className='container'>
                {this.getElementsNodes()}
                {this.getPublicControl(false, {
                    ordinal: 2,
                    left: 271,
                    top: 100
                },[
                    'say"let\'s sing the song',
                    '(pause after each sentence)sing the song and guide the student to repeat',
                    'sing the song with the student'
                ])}

            </div>
        )
    }
})