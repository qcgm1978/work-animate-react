require('./styles/one.scss')
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
        for (let i = 0; i < this.sentences.length; i++) {
            this.num = this.setPageState(this.num);
            this.setArrowsUi(this.num);
        }
        this.setTxtHover('[src*="sentence-"]');
    },
    generateNodesFromJson(){
        this.getJson('modules/data/1.json');
    },
    render() {
        return (
            <div id='one' className='container'>
                {this.getElementsNodes()}
                <PublicControl toShowControl={false} arrows={{
                    ordinal: 2,
                    left: 271,
                    top: 100
                }}/>
            </div>
        )
    }
})