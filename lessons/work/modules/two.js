require('./styles/two.scss')
import React from 'react'
import CommonMixin from './common'

export default React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
    },
    componentDidMount () {
    },
    componentDidUpdate(){
        this.num = this.setPageState(this.num);
        this.setArrowsUi(this.num);
    },
    generateNodesFromJson(){
        this.getJson('modules/data/2.json');
    },
    render() {
        return (
            <div id='two' className='container'>
                {this.getElementsNodes()}
                {this.getCommonControl()}

            </div>
        )
    }
})