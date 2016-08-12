require('./styles/three.scss')
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
        this.getJson('modules/data/3.json');
    },
    generateNodes (classVar) {
    },
    render() {
        return (
            <div id='three' className='container'>


                {this.getElementsNodes()}
            </div>
        )
    }
})