import React from 'react'

import PublicControl from './public-control.js'

export default   {
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    setPageState: function (num) {
        let $hiddenEle = this.sentences;
        if (num + 1 < this.sentences.length) {
            $hiddenEle.eq(num + 1)
                .removeClass('none bounceIn bounceOut')
                .addClass('bounceIn')
            if (num + 1 < this.sentences.length) {
                num++
            }
        } else {
            let exec = /#\/(.+)\?.+/.exec(location.href);
            let val = exec[1]
            let index = this.list.indexOf(val);
            let nextInd = (index == this.list.length - 1) ? 0 : (index + 1)
            this.context.router.push('/' + this.list[nextInd])
        }
        return num
    },
    list: ['two', 'three', 'four', 'five', 'six', 'seven'],
    componentDidUpdate(){
        this.sentences = $('#animateContainer img');
    },
    getEles: function (data, isHidden, isStrict) {
        let eles = []
        for (let i = 0; i < data.length; i++) {
            let item = data[i]
            let left = String(item.nodeProperties.left);
            let top = String(item.nodeProperties.top);
            let animate = data[i].animate;
            let style = {
                position: 'absolute', left: left + (left.endsWith('%') ? '' : 'px'),
                top: top + (top.endsWith('%') ? '' : 'px')
            };
            if (isStrict) {
                style = $.extend(item.nodeProperties, style);
            }
            eles.push(
                <img src={item.imageSrc} key={i}
                     className={(isHidden?'none':'')+' animated '+ (animate?animate:'')}
                     style={ style}/>
            )
        }
        return eles
    },
    leftClickEvt: function (num, that) {
        if (num > -1) {
            that.sentences.eq(num)
                //.removeClass('none')
                .addClass('bounceOut')
        } else {
            let exec = /#\/(.+)\?.+/.exec(location.href);
            let val = exec[1]
            let nextInd = this.list.indexOf(val) - 1
            nextInd = nextInd == -1 ? (this.list.length - 1) : nextInd
            that.context.router.push('/' + this.list[nextInd])
        }
        num == -1 ? null : num--
        return num;
    },
    getPublicControl(toShowControl, arrows){
        var $step = $('.step-show .check-mark');
        var $follow = $('.follow-me .check-mark');
        let btns = {
            stepShow: $step.length?$step.is(':visible'):true,
            followMe: $follow.length? $follow.is(':visible'):true,
        }
        return <PublicControl toShowControl={ toShowControl} arrows={ arrows} btns={btns}/>
    },
    getCommonControl(){
        return this.getPublicControl(true, [{
            ordinal: 2,
            left: 311,
            top: 400
        }, {
            ordinal: 1,
            left: 390,
            top: 400
        }])
    }
};
