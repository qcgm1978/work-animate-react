require('../styles/phonics-hard/three.scss')
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
    checkClick(){
        //$('#words img,#pics img').connections();
        $('#words img:first').connections({to: '#pics img:first', 'class': 'correct-color', borderClasses: {
            top: 'connection-border-top',
            right: 'connection-border-right',
            bottom: 'connection-border-bottom',
            left: 'connection-border-left'
        }});
    },
    render() {
        return (
            <div id='hard-three' className='container'>

                <img id='title' src='./images/phonics/hard/3/title.png'/>
                <div id='words'>
                    <img id='a' src='./images/phonics/hard/3/a.png'/>
                    <img id='b' src='./images/phonics/hard/3/b.png'/>
                    <img id='c' src='./images/phonics/hard/3/c.png'/>
                    <img id='d' src='./images/phonics/hard/3/d.png'/>

                </div>
                <div id='pics'>
                    <img id='title' src='./images/phonics/hard/3/apple.png'/>
                    <img id='title' src='./images/phonics/hard/3/desk.png'/>
                    <img id='title' src='./images/phonics/hard/3/car.png'/>
                    <img id='title' src='./images/phonics/hard/3/ball.png'/>
                </div>
                <div id='check' onClick={this.checkClick}></div>
                {
                    this.getPublicControl(false, {}, [
                        'ask the stundent to connect',
                        'explain the answer'
                    ])
                }

            </div>
        )
    }
})