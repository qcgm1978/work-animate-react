require('./styles/zero.scss')
import React from 'react'

export default React.createClass({
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
    componentDidMount () {
        this.animate(this.state.frameId);
        $('.animated').hover((i, n)=> {
            this.animate(this.state.frameId, true);
        })
    },
    componentDidUpdate(){
        this.animate(this.state.frameId);
    },
    render() {
        let classVar = "animated";
        return ( <div id='zero' className='container'>
                <img id='the' src='../work/images/0/0-img-the.png'/>
                <img id='alphabet' src='../work/images/0/0-img-alphabet.png'/>
                <img id='dog' src='../work/images/0/0-img-dog.png'/>
                <img id='letter' src='../work/images/0/0-img-letter.png'/>
                <img id='cat' src='../work/images/0/0-img-cat.png'/>
                <img id='tree' src='../work/images/0/0-img-tree.png'/>

                <div id='words'>
                    <img id='word1' className={classVar} src='../work/images/0/0-word1.png'/>
                    <img id='word2' className={classVar} src='../work/images/0/0-word2.png'/>
                    <img id='word3' className={classVar} src='../work/images/0/0-word3.png'/>
                    <img id='word4' className={classVar} src='../work/images/0/0-word4.png'/>
                    <img id='word5' className={classVar} src='../work/images/0/0-word5.png'/>

                </div>

            </div>
        )
    }
})