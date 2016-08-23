import React from 'react'

import PublicControl from './public-control.js'
import isTeacher from './api.js'

export default   {
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    isTeacher: isTeacher,
    setPageState: function (num) {
        let $hiddenEle = this.sentences;
        if (num + 1 < this.sentences.length) {
            var $cur = $hiddenEle.eq(num);
            if ($cur.next().length == 0 && $cur.index() != 0) {
                $cur.prevAll().add($cur).addClass('none')
            }
            $hiddenEle.eq(num + 1)
                .removeClass('none bounceIn bounceOut')
                .addClass('bounceIn')
            if (num + 1 < this.sentences.length) {
                num++
            }
        } else {
            clearInterval(this.loopPicsId)
            this.isFinished = true
            this.isPlaying = false;
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
    setFullScreen() {
        $('.container').css('transform-origin', '50% 0')
        $(window).resize(()=> {
            let scaleX = $(window).width() / 1920, scaleY = $(window).height() / 1080
            $('.container').css('transform', 'scale(' + scaleX + ',' + scaleY + ')')
        }).resize()
    },
    setWidthOrHeightFull() {
        //$('.container').css('transform-origin', '0 0')
        $(window).resize(()=> {
            let width = $(window).width();
            let height = $(window).height()
            let scaleX = width / 1920, scaleY = $(window).height() / 1080
            let minX = 640 / 1920, minY = 360 / 1080
            if (scaleX < minX || scaleY < minY) {
                $('body').css({
                    overflow: 'scroll'
                })
                scaleX = minX
                scaleY = minY
            } else {
                $('body').css({
                    overflow: 'hidden'
                })
            }
            let scale = scaleX < scaleY ? scaleX : scaleY
            var $container = $('.container');
            $container
                .css('transform', 'scale(' + scale + ')' /*+ ' translate(-50%,-50%)'*/)
        }).resize()
        $('.container').on('transitionend', function () {
            let width = $(window).width();
            let height = $(window).height()
            let $containerScale = $('.container');
            let marginLeft = (width - $containerScale.width()) / 2,
                marginTop = (height - $containerScale.height()) / 2
            if (marginLeft>0) {
            $containerScale
                .css('margin-left', marginLeft)
            //.css('margin-top', marginTop)
            }
        });
    },
    componentDidMount(){
        //this.setFullScreen();
        this.setWidthOrHeightFull();
    },
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
            var $cur = that.sentences
                .eq(num);
            $cur
                .prevAll()
                .add($cur)
                .removeClass('none')
            $cur.addClass('bounceOut animated')
        } else {
            clearInterval(this.loopPicsId)
        }
        num == -1 ? null : num--
        return num;
    },
    getPublicControl(toShowControl, arrows, data, order){
        return <PublicControl toShowControl={ toShowControl} arrows={ arrows} data={data} isTeacher={this.isTeacher}
                              order={order}/>
    },
    getCommonControl(){
        return this.getPublicControl(true, [/*{
         ordinal: 2,
         left: 311,
         top: 400
         },*/ {
            ordinal: 1,
            left: '57%',
            bottom: 40
        }], [
            'click next frame to see the next frame',
            //'click all frame to see all frame'
        ])
    },
    setMouseOver () {
        $('p')
            .click(function () {
                $(this).css('font-size', '3.4rem')
            })
            .mouseover(function () {
                $(this).animateCss('pulse')
            });
    },
};