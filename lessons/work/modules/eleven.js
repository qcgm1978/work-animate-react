require('./styles/eleven.scss')
import React from 'react'
import Redux from './redux'
import CommonMixin2 from './common2'

export default React.createClass({
    mixins: [CommonMixin2],
    generateNodesFromJson(){
        $.getJSON('modules/data/11.json').done((data)=> {
            let eles = [], animateEles = []
            eles = this.getEles(data.scenes[0].SceneStaticNodes, false, true);
            animateEles = this.getEles(data.scenes[0].SceneAnimateNodes, false, true);
            this.setState({
                eles: eles,
                animateEles: [...Array(10)].map(()=> {
                    animateEles[0]
                    return animateEles
                })
            })
        });
    },
    getInitialState(){
        return {
            i: 0,
            frameId: 0,
            eles: [],
            animateEles: []
        }
    },
    animate: function (frameId, isMouseEvt) {
        if (isMouseEvt) {
            this.state.i = 0;
        }
        this.state.frameId = requestAnimationFrame(()=> {
            let $ele = $('.animated').eq(this.state.i);
            if ($ele.length) {
                $ele.removeClass('bounce')
                setTimeout(()=> {
                    $ele.addClass('bounce')
                    this.setState({
                        i: ++this.state.i
                    })
                }, 10);
            } else {
                cancelAnimationFrame(frameId)
            }
        })
    },
    componentDidMount () {
        //console.log('You have already looked up %d route page.', Redux.getState())
        this.generateNodesFromJson()
        let that = this, num = -1
        $('#right').on('click', (evt)=> {
            num = this.setPageState.call(that, num);
        })
        $('#balloons div').one('click', function () {
            $(this).clone().appendTo('#eleven').addClass('div-fly fly' + $(this).index())
            $(this).addClass('opacity')
            if ($('.opacity').length == 10) {
                that.animateCat();
                that.animateBalloon();
            }
        })
        $('#help-btn').click(()=> {
            $('#help-container').removeClass('none').addClass('bounceInDown')
        })
        $('.help').click((evt)=> {
            if (evt.pageX > 545 && evt.pageX < 564 && evt.pageY < 138 && evt.pageY > 118) {
                $('#help-container').removeClass('bounceInDown').addClass('bounceOutUp')
                setTimeout(()=> {
                    $('#help-container').removeClass('bounceOutUp').addClass('none')
                }, 1000)
            }
        })
    },
    componentDidUpdate(){
        //this.animate(this.state.frameId);
        //$('#balloons div').off().hover((i, n)=> {
        //    this.animate(this.state.frameId, true);
        //})
    },
    animateCat(){
        $('[src$="cat.png"]').animate({
            top: 214
        }, 1000, "linear", function () {
            $(this).attr('src', "./images/11/cat.gif")
        });
    },
    animateBalloon(){
        $('.div-fly,[src$="balloons.png"],[src$="mouse.gif"]')
            .wrapAll('<div>')
            .parent()
            .css({
                position: 'relative'
            })
            .animate({
                top: -400
            }, 1000, 'linear', function () {
            })
    },
    render() {
        let classVar = "animated", balloon = [],
            words = ['bus stop', 'phrase book', 'hand', 'pocket', 'slowly', 'smile', 'speak', 'greet', 'thirsty', 'understand'];
        for (let i = 0; i < 10; i++) {
            balloon.push(
                <div className='div' key={i}>
                    <span className='span'>{words[i]}</span>
                </div>
            )
        }
        return (
            <div id='eleven' className='container'>
                {this.state.eles.map(function (item, i) {
                    return item
                })}
                <div id='balloons'>
                    {balloon}
                </div>
                <div id='help-container' className='animated none'><img src='./images/11/help_detail.png'
                                                                        className='help'/></div>

                {
                    //<div id='right'></div>
                }
                <div id='help-btn'>Help</div>
            </div>
        )
    }
})

