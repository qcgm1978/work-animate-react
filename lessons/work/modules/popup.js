require('./styles/popup.scss')
import React from 'react'
//import CommonMixin from './common'
export default React.createClass({
    //mixins: [CommonMixin],
    getInitialState(){
        return {
            popup: 'none',
            face: this.props.face,
            options: this.props.options
        }
    },
    componentWillReceiveProps(){
        this.setState({
            face: this.props.face,
            options: this.props.options,
            popup:'none'
        })
    },
    componentDidMount () {
        $('#question').click(()=> {
            this.setState({
                popup: 'd-i-b',
                options: '',
                face: 'none'
            })
        })
        $('#options div').click(()=> {
            this.setState({
                options: 'none',
                face: ''
            })
        })
    },
    componentDidUpdate(){
    },
    generateNodesFromJson(){
    },
    render() {
        return (
            <div className={this.props.className} id="popup-container">
                <div id='popup' className={this.state.popup} style={this.props.popup}>
                    <div id='options' className={this.state.options}>
                        <div>A. apple</div>
                        <div>B. cat</div>
                        <div>C. jump</div>
                        <div>D. fly</div>
                    </div>
                    <img id='right-face' className={this.state.face} src="./images/phonics/icons/right.png"
                        />
                    <img className={this.state.face} src="./images/phonics/icons/wrong.png"/>
                </div>

                <img id='question' src="./images/8/sentence.png" style={this.props.popup}/>

            </div>

        )
    }
})