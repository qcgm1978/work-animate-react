require('./styles/two.scss')
import React from 'react'
import CommonMixin from './common'
import PublicControl from './public-control.js'

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
                <PublicControl toShowControl={true} arrows={{
                    ordinal: 2,
                    left: 271,
                    top: 100
                }} />
            </div>
        )
    }
})