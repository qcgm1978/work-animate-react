require('./styles/test.scss')
import React from 'react'
import Redux from './redux'
//debugger;
export default React.createClass({
    componentDidMount(){
        $('select').change(function () {
            var val = $(this).val();
            $('img')
                .addClass(val)
                .one('transitionend', function () {
                    $(this).removeClass(val)
                })
        })
        $('button').hover(function () {
            $('img').addClass($('select').val())
        }, function () {
            $('img').removeClass($('select').val())
        })
    },
    render() {
        return (
            <div>
                <img src='./images/test/tile_user.png'/>
                <select>
                    <option>Please choose the animation effect</option>
                    <option value='transition1'>transition1</option>
                    <option value='animation1'>animation1</option>
                </select>
                <button>Hover to trigger current animation</button>
            </div>
        )
    }
})

