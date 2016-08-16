import React from 'react'

import PublicControl from './public-control.js'

export default   {
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    setPageState: function (num) {
        let $hiddenEle = this.sentences;
        if (num + 1 < this.sentences.length) {
            if (num > -1 && $hiddenEle.eq(num).next().length == 0) {
                $hiddenEle.eq(num).parent().addClass('none')
            }
            $hiddenEle.eq(num + 1)
                .removeClass('none bounceIn bounceOut')
                .addClass('bounceIn')
            if (num + 1 < this.sentences.length) {
                num++
            }
        } else {
            clearInterval(this.loopPicsId)
            //num=-1
            //let exec = /#\/(.+)\?.+/.exec(location.href);
            //let val = exec[1]
            //let index = this.list.indexOf(val);
            //if (index == this.list.length - 1) {
            //}else{
            //    let nextInd = (index + 1)
            //    this.context.router.push('/' + this.list[nextInd])
            //
            //}
        }
        return num
    },
    list: ['two', 'three', 'four', 'five', 'six', 'seven'],
    componentDidUpdate(){
        this.sentences = $('#animateContainer img');
    },
    getEles: function (data, isHidden, isStrict) {
        let div = []
        for (let i = 0; i < data.length; i++) {
            let item = data[i]
            if ($.isPlainObject(item)) {
                item = [item]
            }
            let eles = []
            $.each(item, function (i, n) {
                let left = String(n.nodeProperties.left);
                let top = String(n.nodeProperties.top);
                let animate = n.animate;
                let style = {
                    position: 'absolute', left: left + (left.endsWith('%') ? '' : 'px'),
                    top: top + (top.endsWith('%') ? '' : 'px')
                };
                if (isStrict) {
                    style = $.extend(n.nodeProperties, style);
                }
                eles.push(
                    <img src={n.imageSrc} key={i}
                         className={(isHidden?'none':'')+' animated '+ (animate?animate:'')}
                         style={ style}/>
                )
            })
            div.push(eles)
        }
        return div
    },
    leftClickEvt: function (num, that) {
        if (num > -1) {
            that.sentences
                .eq(num)
                .parent()
                .removeClass('none')
                .end()
                .addClass('bounceOut')
        } else {
            clearInterval(this.loopPicsId)
            //let exec = /#\/(.+)\?.+/.exec(location.href);
            //let val = exec[1]
            //let nextInd = this.list.indexOf(val) - 1
            //nextInd = nextInd == -1 ? (0) : nextInd
            //that.context.router.push('/' + this.list[nextInd])
        }
        num == -1 ? null : num--
        return num;
    },
    getPublicControl(toShowControl, arrows){
        var $step = $('.step-show .check-mark');
        var $follow = $('.follow-me .check-mark');
        let btns = {
            stepShow: $step.length ? $step.is(':visible') : true,
            followMe: $follow.length ? $follow.is(':visible') : true,
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
