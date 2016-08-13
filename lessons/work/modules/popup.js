require('./styles/popup.scss')
import React from 'react'
//import CommonMixin from './common'
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
            color:'right-txt'
        }
    },
    componentWillReceiveProps(){
        this.setState({
            faceRight: this.props.face,
            faceWrong: this.props.face,
            options: this.props.options,
            popup: 'none'
        })
    },
    componentDidMount () {
        $('#question').click(()=> {
            this.setState({
                popup: 'd-i-b',
                options: '',
                faceRight: 'none',
                faceWrong: 'none',
                toShow: 'none'
            })
        })
        $('#options div').click((evt)=> {
            let word = /([^/]+)\.png$/.exec(this.props.src)[1], str = '', strWrong = '',color=''
            if ($(evt.target).text().indexOf(word) != -1) {
                str = ''
                strWrong = 'none'
                color='right-txt'
            } else {
                str = 'none'
                strWrong = ''
                color='wrong-txt'
            }
            debugger;
            this.setState({
                options: 'none',
                faceRight: str,
                faceWrong: strWrong,
                chosen: $(evt.target).text(),
                toShow: '',
                color:color
            })
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
        let fillClass = this.state.color + ' fill ' + this.state.toShow;
        return (
            <div className={this.props.className} id="popup-container">
                <div id='popup' className={this.state.popup} style={this.props.popup}>
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

                <img id='question' src="./images/8/sentence.png" style={this.props.popup}/>

            </div>

        )
    }
})