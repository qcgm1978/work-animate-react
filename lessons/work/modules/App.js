import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><Link to="/zero">Zero</Link></li>

                    <li><Link to="/one">One</Link></li>
                    <li><Link to="/two">Two</Link></li>
                    <li><Link to="/three">Three</Link></li>
                    <li><Link to="/four">Four</Link></li>
                    <li><Link to="/five">Five</Link></li>
                    <li><Link to="/six">Six</Link></li>
                    <li><Link to="/seven">Seven</Link></li>
                    <li><Link to="/eight">Eight</Link></li>
                    <li><Link to="/nine">Nine</Link></li>
                    <li><Link to="/ten">Ten</Link></li>
                    <li><Link to="/eleven">Eleven</Link></li>
                    {
                        //<li><Link to="/redux">Redux</Link></li>
                    }
                </ul>
            </div>
        )
    }
})