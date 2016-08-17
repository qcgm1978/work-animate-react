require('./styles/public-control.scss')
import React from 'react'
import Utilities from './utilities'
import Store from './redux.js'
export default React.createClass({
    order: 0,
    mixins: [Utilities],
    getInitialState(){
        return {
            stepShow: true,
            followMe: true,
        }
    },
    flyArrow (i = 0, left = this.randomIntFromInterval(83, 600) - 83,
              top = 'initial',bottom=0) {
        $('<div>')
            .addClass('step animated bounceInRight')
            .attr('ordinal', i)
            .css({
                left: left,
                top: top,
                bottom:bottom,
                'background-image': "url('./images/public-control/follow-me/step-" +
                i +
                ".png')"
            })
            .appendTo('.public-container')
    },
    generateSteps(arrows) {
        if (!this.state.followMe) {
            $('.step').remove()
        } else {
            if ($.isPlainObject(arrows) && !$.isEmptyObject(this.props.arrows)) {
                this.flyArrow(arrows.ordinal, arrows.left, arrows.top,arrows.bottom);
            } else if ($.isArray(arrows)) {
                if (this.props.order) {
                    this.flyArrow(arrows[this.order].ordinal, arrows[this.order].left, arrows[this.order].top,arrows.bottom);
                } else {
                    $.each(arrows, (i, n)=> {
                        this.flyArrow(n.ordinal, n.left, n.top,n.bottom);
                    })
                }
            }
            else {
                //for (let i = 1; i < 6; i++) {
                //    this.flyArrow(i);
                //}
            }
        }
    },
    componentDidMount () {
        $(".pop-up").draggable()
        let that = this;
        $('.step-show,.close')
            .click(function (evt) {
                that.setState({
                    stepShow: !that.state.stepShow
                })
            })
        $('.follow-me')
            .click({ini: true}, function (evt) {
                that.setState({
                    followMe: !that.state.followMe
                })
                if (evt.data.ini) {
                    that.generateSteps.call(that, that.props.arrows);
                    evt.data.ini = false
                }
            })
        $('.prev,.next,.close')
            .mousedown(function () {
                $(this).addClass('click')
            })
            .mouseup(function () {
                $(this).removeClass('click')
            })
        $('dd').click(function () {
            $(this)
                .parents('dl')
                .find('dd')
                .removeClass('txt-click')
            $(this).addClass('txt-click')
        })
        if (this.state.followMe) {
            this.generateSteps.call(that, that.props.arrows);
        }
        Store.subscribe(function () {
                var order = (++this.order);
                if (order < this.props.arrows.length) {
                    this.flyArrow(this.props.arrows[order].ordinal, this.props.arrows[order].left, this.props.arrows[order].top);
                }
            }.bind(this)
        )
    },
    componentDidUpdate(){
    },
    generateNodesFromJson(){
        this.getJson('modules/data/10.json');
    },
    render() {
        if (this.props.isTeacher) {
            var stepVisible = (this.state.stepShow ? '' : 'none');
            let stepClass = 'check-mark ' + stepVisible,
                followClass = 'check-mark ' + (this.state.followMe ? '' : 'none'),
                popupClass = 'pop-up ' + stepVisible,
                arr = this.props.data;
            return (
                <div className='public-container'>
                    <div id='public-control' className='noselect'>
                        <div className='indicate'>
                            <div className='step-show'>
                                <div className={stepClass}></div>
                            </div>
                            <div className='follow-me'>
                                <div className={followClass}></div>

                            </div>
                        </div>
                        <div className={popupClass}>
                            <div className='header'>STEP SHOW
                                <div className='close'></div>
                            </div>
                            <dl>
                                {
                                    arr.map((item, i)=> {
                                        return (
                                            <div key={i}>
                                                <dt>STEP {i + 1}</dt>
                                                <dd>{item}</dd>
                                            </div>
                                        )
                                    })

                                }
                            </dl>
                        </div>
                        {
                            (()=> {
                                if (this.props.toShowControl) {
                                    return <div className='control'>
                                        <div className='prev' id='left'></div>
                                        <div className='play'>
                                            <img className='center' src='./images/public-control/control/play.png'/>
                                        </div>
                                        <div className='next' id='right'></div>
                                    </div>
                                }
                            })()
                        }
                    </div>
                </div>

            )
        } else {
            return null;
        }
    }
})