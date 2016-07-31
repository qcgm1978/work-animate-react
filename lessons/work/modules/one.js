require('./styles/one.scss')
import React from 'react'

export default React.createClass({
    sentences: [],
    getInitialState(){
        return {
            i: 0,
            frameId: 0
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
            $('#left').attr('src', '../work/images/common/left.png')
        } else {
            $('#left').attr('src', '../work/images/common/left-gray.png')
        }
        if (i < $('[id^="sentence"]').length -1) {
            $('#right').attr('src', '../work/images/common/right.png')
        } else {
            $('#right').attr('src', '../work/images/common/right-gray.png')
        }
    },
    componentDidMount () {
        this.sentences = $('[id^="sentence"]:hidden');
        var that = this, num = -1;
        //this.animate(this.state.frameId);
        $('#right').on('click', (evt)=> {
            var $hiddenEle = that.sentences;
            if (num + 1 < this.sentences.length) {
                //that.sentences.push($hiddenEle)
                $hiddenEle.eq(num + 1)
                    .removeClass('none bounceIn bounceOut')
                    .addClass('bounceIn')
                if (num + 1 < this.sentences.length) {
                    num++
                }
            }
            that.setArrowsUi.call(that, num);
        })
        $('#left').on('click', (i, n)=> {
            if (num > -1) {
                that.sentences.eq(num)
                    //.removeClass('none')
                    .addClass('bounceOut')
            }
            num == -1 ? null : num--
            that.setArrowsUi.call(that, num);
        })
    },
    componentDidUpdate(){
        this.animate(this.state.frameId);
    },
    render() {
        let classVar = "none animated";
        return ( <div id='one' className='container'>
                <img id='cat' src='../work/images/1/cat.png'/>
                <img id='ball' className='animated bounceInRight' src='../work/images/1/ball.png'/>
                <img id='music' src='../work/images/1/music.png'/>

                <div>
                    <img id='sentence-a' className={classVar} src='../work/images/1/sentence-a.png'/>
                    <img id='sentence-b' className={classVar} src='../work/images/1/sentence-b.png'/>
                    <img id='sentence-c' className={classVar} src='../work/images/1/sentence-c.png'/>
                </div>
                <img id='left' src='../work/images/common/left-gray.png'/>
                <img id='right' src='../work/images/common/right.png'/>


            </div>
        )
    }
})