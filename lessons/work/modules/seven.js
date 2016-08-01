require('./styles/seven.scss')
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
        this.getJson('modules/data/7.json');

    },
    generateNodes (classVar) {

    },
    render() {
        return (
            <div id='seven' className='container'>


                {this.getElementsNodes()}
            </div>
        )
    }
})