require('./styles/four.scss')
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
        this.getJson('modules/data/4.json');

    },
    generateNodes (classVar) {

    },
    render() {
        return (
            <div id='four' className='container'>


                {this.getElementsNodes()}
                {this.getCommonControl()}

            </div>
        )
    }
})