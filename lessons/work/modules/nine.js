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
    },
    generateNodesFromJson(){
        this.getJson('modules/data/9.json');

    },
    generateNodes (classVar) {

    },
    render() {
        return (
            <div id='nine' className='container'>


                {this.getElementsNodes()}
            </div>
        )
    }
})