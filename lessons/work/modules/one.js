require('./styles/one.scss')
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
        this.getJson('modules/data/1.json');

    },
    render() {
        return (
            <div id='one' className='container'>
                {this.getElementsNodes()}

            </div>
        )
    }
})