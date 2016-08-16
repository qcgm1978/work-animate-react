import React from 'react'
import Utilities from './utilities'

import CommonMixin2 from './common2'

export default   {
    mixins: [CommonMixin2, Utilities],
    num: -1,
    triggerCotrol: function ($btn) {
        this.loopPicsId = setInterval(()=> {
            $btn.trigger('click')
        }, 1000)
    },
    playPics () {
        if (this.num + 1 < this.sentences.length) {
            this.triggerCotrol($('#right'));

        } else {
            this.triggerCotrol($('#left'));
        }
    },
    componentDidMount: function () {
        let classlet = "none animated";
        this.generateNodesFromJson(classlet)
        let that = this
        $('#right').on('click', (evt)=> {
            this.num = this.setPageState(this.num);
            this.setArrowsUi.call(that, this.num);
        })
        $('#left').on('click', (i, n)=> {
            this.num = this.leftClickEvt(this.num, that);
            this.setArrowsUi.call(that, this.num);
        })
        $('.play').clickToggle((evt)=> {
            $(evt.currentTarget)
                .find('img')
                .addClass('pause')
                .attr('src', './images/public-control/control/pause.png')
            this.playPics()
        }, (evt)=> {
            $(evt.currentTarget).find('img').attr('src', './images/public-control/control/play.png').removeClass('pause')
            clearInterval(this.loopPicsId)
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
            $('#left').css('opacity', 1)
        } else {
            $('#left').css('opacity', 0.5)
        }
        if (i < this.sentences.length - 1) {
            $('#right').css('opacity', 1)
        } else {
            $('#right').css('opacity', 0.5)
        }
        if (i == this.sentences.length - 1||i == -1) {
            $('.play img').attr('src', './images/public-control/control/play.png').removeClass('pause')
        }

    },
    componentDidUpdate(){
    },
    getJson: function (url) {
        $.getJSON(url).done((data)=> {
            let eles = [], eles1 = [];
            eles = this.getEles(data.scenes[0].SceneStaticNodes, false, data.strict);
            eles1 = this.getEles(data.scenes[0].SceneAnimateNodes, true, data.strict);
            this.setState({
                eles: eles,
                animateEles: eles1
            })
        })
    },
    getElementsNodes(){
        let contents = <div>
            {this.state.eles.map(function (item, i) {
                return item
            })}
            <div id='animateContainer'>
                {
                    this.state.animateEles.map(function (item, i) {
                        return (
                            <div key={i}>
                                {
                                    item.map(function (img, i) {
                                        return img
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>

        </div>
        return contents
    },
};
