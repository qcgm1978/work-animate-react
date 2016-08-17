import './node_modules/normalize.css/normalize.css'
import './bower_components/animate.css/animate.css'
import './modules/styles/common.scss'
import './modules/styles/responsive.scss'
import './bower_components/jquery-ui-1.12.0.custom/jquery-ui.js'
import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { render } from 'react-dom'
import App from './modules/App'
import Zero from './modules/zero'
import One from './modules/one'
import Two from './modules/two'
import Three from './modules/three'
import Four from './modules/four'
import Five from './modules/five'
import Six from './modules/six'
import Seven from './modules/seven'
import Eight from './modules/eight'
import Nine from './modules/nine'
import Ten from './modules/ten'
import Eleven from './modules/eleven'
import Test from './modules/test'
import PublicControl from './modules/public-control'
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        {/* add the routes here */}
        <Route path="/zero" component={Zero}/>

        <Route path="/one" component={One}/>
        <Route path="/two" component={Two}/>
        <Route path="/three" component={Three}/>
        <Route path="/four" component={Four}/>
        <Route path="/five" component={Five}/>

        <Route path="/six" component={Six}/>
        <Route path="/seven" component={Seven}/>
        <Route path="/eight" component={Eight}/>
        <Route path="/nine" component={Nine}/>
        <Route path="/ten" component={Ten}/>
        <Route path="/eleven" component={Eleven}/>
        <Route path="/test" component={Test}/>
        <Route path="/public-control" component={PublicControl}/>

    </Router>
), document.getElementById('app'))