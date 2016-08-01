require('./styles/eight.scss')
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
        this.getJson('modules/data/8.json');

    },
    generateNodes (classVar) {

    },
    render() {
        return (
            <div id='eight' className='container'>


                {this.getElementsNodes()}
            </div>
        )
    }
})