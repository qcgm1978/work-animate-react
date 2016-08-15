require('./styles/three.scss')
import React from 'react'
//import Store from './redux.js'

import CommonMixin from './common'

export default React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
    },
    componentDidMount () {
        //let that=this
        //    Store.subscribe(() => {
        //            //that.setState({
        //                that.control= Store.getState()
        //            //});
        //        }
        //    )
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
                {this.getCommonControl(this.state.control)}

            </div>
        )
    }
})