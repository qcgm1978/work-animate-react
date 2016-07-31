import './modules/styles/common.sass'

import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { render } from 'react-dom'
import App from './modules/App'
//render(<App/>, document.getElementById('app'))
import Zero from './modules/zero'

import One from './modules/one'
import Two from './modules/two'
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        {/* add the routes here */}
        <Route path="/zero" component={Zero}/>

        <Route path="/one" component={One}/>
        <Route path="/two" component={Two}/>
    </Router>
), document.getElementById('app'))