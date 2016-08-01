require('./styles/two.scss')
import React from 'react'

export default React.createClass({
    sentences: [],
    getInitialState(){
        return {
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
    setArrowsUi: function (i) {
        if (i > -1) {
            $('#left').css('background', 'url(./images/common/left.png)')
        } else {
            $('#left').css('background', 'url(./images/common/left-gray.png)')
        }
        if (i < this.sentences.length - 1) {
            $('#right').css('background', 'url(./images/common/right.png)')
        } else {
            $('#right').css('background', 'url(./images/common/right-gray.png)')
        }
    },
    componentDidMount () {
        let classVar = "none animated";
        this.generateNodesFromJson(classVar)
        var that = this, num = -1;
        //this.animate(this.state.frameId);
        $('#right').on('click', (evt)=> {
            var $hiddenEle = that.sentences;
            if (num + 1 < this.sentences.length) {
                $hiddenEle.eq(num + 1)
                    .removeClass('none bounceIn bounceOut')
                    .addClass('bounceIn')
                if (num + 1 < this.sentences.length) {
                    num++
                }
            }
            that.setArrowsUi.call(that, num);
        }).hover(()=> {
            $('#right').css('background', "url('./images/common/right-hover.png')")
        }, ()=> {
            that.setArrowsUi.call(that, num);
        }).mousedown(()=>{
            $('#right').css('background', "url('./images/common/right-active.png')")

        })
        $('#left').on('click', (i, n)=> {
            if (num > -1) {
                that.sentences.eq(num)
                    //.removeClass('none')
                    .addClass('bounceOut')
            }
            num == -1 ? null : num--
        }).hover(()=> {
            $('#left').css('background', "url('./images/common/left-hover.png')")
        }, ()=> {
            that.setArrowsUi.call(that, num);
        }).mousedown(()=>{
            $('#left').css('background', "url('./images/common/left-active.png')")

        })
    },
    componentDidUpdate(){
        this.sentences = $('#animateContainer img');
    },
    getEles: function (data, isHidden) {
        let eles = []
        for (let i = 0; i < data.length; i++) {
            let item = data[i]
            var left = item.nodeProperties.left;
            var top = item.nodeProperties.top;
            var animate = data[i].animate;
            eles.push(
                <img src={item.imageSrc} key={i}
                     className={(isHidden?'none':'')+' animated '+ (animate?animate:'')}
                     style={{position:'absolute', left:left+(left.endsWith('%')?'':'px'), top:top+(top.endsWith('%')?'':'px')
                     }}/>
            )
        }
        return eles
    },
    generateNodesFromJson(){
        $.getJSON('modules/data/2.json').done((data)=> {
            let eles = [], eles1 = [];
            eles = this.getEles(data.scenes[0].SceneStaticNodes);
            eles1 = this.getEles(data.scenes[0].SceneAnimateNodes, true);
            this.setState({
                eles: eles,
                animateEles: eles1
            })
        })
    },
    generateNodes (classVar) {
        return <div id='one' className='container'>
            <img id='cat' src='./images/1/cat.png'/>
            <img id='ball' className='animated bounceInRight' src='./images/1/ball.png'/>
            <img id='music' src='./images/1/music.png'/>

            <div>
                <img id='sentence-a' className={classVar} src='./images/1/sentence-a.png'/>
                <img id='sentence-b' className={classVar} src='./images/1/sentence-b.png'/>
                <img id='sentence-c' className={classVar} src='./images/1/sentence-c.png'/>
            </div>
            <img id='left' src='./images/common/left-gray.png'/>
            <img id='right' src='./images/common/right.png'/>


        </div>;
    },
    render() {
        return (
            <div id='two' className='container'>
                {this.state.eles.map(function (item, i) {
                    return item
                })}
                <div id='animateContainer'>
                    {
                        this.state.animateEles.map(function (item, i) {
                            return item
                        })
                    }
                </div>
                <div id='left'></div>
                <div id='right'></div>
            </div>
        )
    }
})