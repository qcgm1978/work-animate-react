require('./styles/five.scss')
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
        this.getJson('modules/data/5.json');

    },
    generateNodes (classVar) {

    },
    render() {
        return (
            <div id='five' className='container'>


                {this.getElementsNodes()}
            </div>
        )
    }
})