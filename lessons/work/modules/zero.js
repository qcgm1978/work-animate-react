require('./styles/zero.scss')
import React from 'react'
import Redux from './redux'
import CommonMixin2 from './common2'

export default React.createClass({
    mixins: [CommonMixin2],
    //getEles: function (data, isAnimate) {
    //    let eles = [], style = {}
    //    for (let i = 0; i < data.length; i++) {
    //        let item = data[i]
    //        var left = item.nodeProperties.left;
    //        var top = item.nodeProperties.top;
    //        var animate = data[i].animate;
    //        if (!isAnimate) {
    //            style = {
    //                position: 'absolute', left: left + (left.endsWith('%') ? '' : 'px'),
    //                top: top + (top.endsWith('%') ? '' : 'px')
    //            };
    //        }
    //        eles.push(
    //            <img src={item.imageSrc} key={i}
    //                 id={isAnimate?('word'+i):''}
    //                 className={(isAnimate?' animated ':'')+ (animate?animate:'')}
    //                 style={ style}/>
    //        )
    //    }
    //    return eles
    //},
    generateNodesFromJson(){
        $.getJSON('modules/data/0.json').done((data)=> {
            let eles = [], animateEles = []
            eles = this.getEles(data.scenes[0].SceneStaticNodes);
            animateEles = this.getEles(data.scenes[0].SceneAnimateNodes, true);
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
        let that=this,num = -1
        $('#right').on('click', (evt)=> {
            num = this.setPageState.call(that,num);
        })
    },
    componentDidUpdate(){
        this.animate(this.state.frameId);
        $('.animated').off().hover((i, n)=> {
            this.animate(this.state.frameId, true);
        })
    },
    render() {
        let classVar = "animated";
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
                <div id='right'></div>
                {
                    //<div id='left'></div>
                    //<img id='the' src='./images/0/0-img-the.png'/>
                    //< img id='alphabet' src='./images/0/0-img-alphabet.png'/>
                    //<img id='dog' src='./images/0/0-img-dog.png'/>
                    //<img id='letter' src='./images/0/0-img-letter.png'/>
                    //<img id='cat' src='./images/0/0-img-cat.png'/>
                    //<img id='tree' src='./images/0/0-img-tree.png'/>
                    //
                    //<div id='words'>
                    //<img id='word1' className={classVar} src='./images/0/0-word1.png'/>
                    //<img id='word2' className={classVar} src='./images/0/0-word2.png'/>
                    //<img id='word3' className={classVar} src='./images/0/0-word3.png'/>
                    //<img id='word4' className={classVar} src='./images/0/0-word4.png'/>
                    //<img id='word5' className={classVar} src='./images/0/0-word5.png'/>
                    //
                    //</div>
                }
            </div>
        )
    }
})