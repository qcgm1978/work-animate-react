require('./styles/six.scss')
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
        this.getJson('modules/data/6.json');

    },
    generateNodes (classVar) {

    },
    render() {
        return (
            <div id='six' className='container'>


                {this.getElementsNodes()}
            </div>
        )
    }
})