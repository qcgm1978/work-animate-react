require('./styles/eleven.scss')
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
        this.getJson('modules/data/11.json');

    },
    generateNodes (classVar) {

    },
    render() {
        return (
            <div id='eleven' className='container'>


                {this.getElementsNodes()}
            </div>
        )
    }
})