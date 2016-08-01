import React from 'react'

export default   {
    componentDidMount: function() {
        let classVar = "none animated";
        this.generateNodesFromJson(classVar)
        var that = this, num = -1;
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
    sentences: [],
    getInitialState(){
        return {
            eles: [],
            animateEles: []
        }
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
    getJson: function (url) {
        $.getJSON(url).done((data)=> {
            let eles = [], eles1 = [];
            eles = this.getEles(data.scenes[0].SceneStaticNodes);
            eles1 = this.getEles(data.scenes[0].SceneAnimateNodes, true);
            this.setState({
                eles: eles,
                animateEles: eles1
            })
        })
    },
    getElementsNodes(){
        let contents= <div>
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
        return contents
    },


};
