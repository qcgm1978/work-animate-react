require('./styles/popup.scss')
import React from 'react'
import Store from './redux.js'
export default React.createClass({
    //mixins: [CommonMixin],
    getInitialState(){
        return {
            popup: 'none',
            faceRight: this.props.face,
            faceWrong: this.props.face,
            options: this.props.options,
            chosen: '',
            toShow: 'none',
            color: 'right-txt',
            toShowNum: ''
        }
    },
    componentWillReceiveProps(){
        this.setState({
            faceRight: this.props.face,
            faceWrong: this.props.face,
            options: this.props.options,
            popup: 'none',
            toShowNum: ''
        })
    },
    componentDidMount () {
        $('#question').click(()=> {
            this.setState({
                popup: 'd-i-b',
                options: '',
                faceRight: 'none',
                faceWrong: 'none',
                toShow: 'none',
                toShowNum: ''
            })
        })

        $('#options div').click((evt)=> {
            let str = '', strWrong = '', color = ''
            if ($(evt.target).text().indexOf(this.props.word) != -1) {
                str = ''
                strWrong = 'none'
                color = 'right-txt'
            } else {
                str = 'none'
                strWrong = ''
                color = 'wrong-txt'
            }
            this.setState({
                options: 'none',
                faceRight: str,
                faceWrong: strWrong,
                chosen: $(evt.target).text(),
                toShow: '',
                toShowNum: 'none',
                color: color
            })
            Store.dispatch({type: 'INCREMENT'})
            setTimeout(()=> {
                this.setState({
                    faceRight: 'none',
                    faceWrong: 'none'
                })
            }, 2000);
        })
    },
    componentDidUpdate(){
    },
    generateNodesFromJson(){
    },
    render() {
        let fillClass = this.state.color + ' fill ' + this.state.toShow,
            popupClass=this.state.popup+' '+this.props.popup;
        return (
            <div className={this.props.className} id="popup-container">
                <div id='popup' className={popupClass} >
                    <div id='options' className={this.state.options}>
                        <div>A. apple</div>
                        <div>B. cat</div>
                        <div>C. ball</div>
                    </div>
                    <img id='right-face' className={this.state.faceRight} src="./images/phonics/icons/right.png"
                        />
                    <img className={this.state.faceWrong} src="./images/phonics/icons/wrong.png"/>
                    <span className={fillClass}>{this.state.chosen}</span>
                </div>

                <div className={this.props.popup} id='question-container'>
                    <img id='question' src="./images/8/sentence.png"/>
                    <img className={this.state.toShowNum} id='num-icon' src={'./images/public-control/judgement/icons/' +
                     this.props.num +
                      '.png'}/>
                </div>


            </div>

        )
    }
})