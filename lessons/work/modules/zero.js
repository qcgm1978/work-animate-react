require('./styles/zero.scss')
import React from 'react'
import Redux from './redux'
import CommonMixin2 from './common2'

export default React.createClass({
    mixins: [CommonMixin2],
    getEles1: function (data, isAnimate) {
        let eles = [], style = {}
        for (let i = 0; i < data.length; i++) {
            let item = data[i]
            var left = item.nodeProperties.left;
            var top = item.nodeProperties.top;
            var animate = data[i].animate;
            if (!isAnimate) {
                style = {
                    position: 'absolute', left: left + (left.endsWith('%') ? '' : 'px'),
                    top: top + (top.endsWith('%') ? '' : 'px')
                };
            }
            eles.push(
                <img src={item.imageSrc} key={i}
                     id={isAnimate?('word'+i):''}
                     className={(isAnimate?' animated ':'')+ (animate?animate:'')}
                     style={ style}/>
            )
        }
        return eles
    },
    generateNodesFromJson(){
        $.getJSON('modules/data/0.json').done((data)=> {
            let eles = [], animateEles = []
            eles = this.getEles1(data.scenes[0].SceneStaticNodes);
            animateEles = this.getEles1(data.scenes[0].SceneAnimateNodes, true);
            this.setState({
                eles: eles,
                animateEles: animateEles
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
            let $ele = $('#words .animated').eq(this.state.i);
            if ($ele.length) {
                $ele.removeClass('none bounce')
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
        $('#left').on('click', (i, n)=> {
            num = this.leftClickEvt(num, that);
        })
    },
    componentDidUpdate(){
        $('#words .animated').attr('id', function (i, n) {
            return 'word' + (i + 1)
        })
        this.animate(this.state.frameId);
        $('.animated').off().hover((i, n)=> {
            this.animate(this.state.frameId, true);
        })
    },
    render() {
        return ( <div id='zero' className='container'>
                {this.state.eles.map(function (item, i) {
                    return item
                })}
                <div id='words'>
                    {
                        this.state.animateEles.map(function (item, i) {
                            return item
                        })
                    }
                </div>

                {this.getPublicControl(false, {
                    //ordinal: 3,
                    //left: 497,
                    //top: 379
                },['introduce yourself to the students', 'ask the student\'s name and greet the student', 'click and say'])}
            </div>
        )
    }
})