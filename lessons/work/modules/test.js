require('./styles/test.scss')
import React from 'react'
import Redux from './redux'
//debugger;
export default React.createClass({
    componentDidMount(){
        var $eles = $('.img-container').add('img');
        $('select').change(function () {
            var val = $(this).val();
            $eles
                .addClass(val)
                .one('transitionend animationend', function () {
                    $(this).removeClass(val)
                })
        })
        $('button').hover(function () {
            $eles.addClass($('select').val())
        }, function () {
            $eles.removeClass($('select').val())
        })
    },
    render() {
        return (
            <div>
                <div className='img-container'>
                    <img src='./images/test/tile_user.png'/>
                    <img src='./images/test/tile_phone.png'/>
                </div>

                <select>
                    <option>Please choose the animation effect</option>
                    <option value='transition1'>transition1</option>
                    <option value='animation1'>animation1</option>
                    <optgroup label='2d geometric transform'>
                        <option value='rotate'>rotate</option>
                        <option value='scale'>scale</option>
                        <option value='skew'>skew</option>

                    </optgroup>
                    <optgroup label='3d geometric transforms'>
                        <option value='d3'>translateZ rotateY</option>
                    </optgroup>
                </select>
                <button>Hover to trigger current animation</button>
            </div>
        )
    }
})

