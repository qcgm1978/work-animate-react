'use strict';




var balloonObj={
    generateNodesFromJson: function generateNodesFromJson() {
        var _this = this;

        $.getJSON('./11.json',function (data) {
            var eles = [],
                animateEles = [];
            eles = _this.getEles(data.scenes[0].SceneStaticNodes, false, true);
            //animateEles = _this.getEles(data.scenes[0].SceneAnimateNodes, false, true);

        });
    },
    getInitialState: function getInitialState() {
        return {
            i: 0,
            frameId: 0,
            eles: [],
            animateEles: []
        };
    },

    animate: function animate(frameId, isMouseEvt) {
        var _this2 = this;

        if (isMouseEvt) {
            this.state.i = 0;
        }
        this.state.frameId = requestAnimationFrame(function () {
            var $ele = $('.animated').eq(_this2.state.i);
            if ($ele.length) {
                $ele.removeClass('bounce');
                setTimeout(function () {
                    $ele.addClass('bounce');
                    _this2.setState({
                        i: ++_this2.state.i
                    });
                }, 10);
            } else {
                cancelAnimationFrame(frameId);
            }
        });
    },
    componentDidMount: function componentDidMount() {
        var _this3 = this;

        //console.log('You have already looked up %d route page.', Redux.getState())
        this.generateNodesFromJson();
        var that = this,
            num = -1;
        $('#right').on('click', function (evt) {
            num = _this3.setPageState.call(that, num);
        });
        $('#left').on('click', function (i, n) {
            num = _this3.leftClickEvt(num, that);
        });
        $('#balloons div').one('click', function () {
            $(this).clone().addClass('big-balloon').wrap('<div/>').parent().appendTo('#eleven').addClass('div-fly fly' + $(this).index()).addClass('animated pulse');
            $(this).addClass('opacity');
            if ($('.opacity').length == 10) {
                that.animateCat();
                that.animateBalloon();
            }
        });
        $('#help-btn').click(function () {
            $('#help-container').removeClass('none').addClass('bounceInDown');
        });
        $('.help').click(function (evt) {
            if (evt.pageX > 545 && evt.pageX < 564 && evt.pageY < 138 && evt.pageY > 118) {
                $('#help-container').removeClass('bounceInDown').addClass('bounceOutUp');
                setTimeout(function () {
                    $('#help-container').removeClass('bounceOutUp').addClass('none');
                }, 1000);
            }
        });
    },
    componentDidUpdate: function componentDidUpdate() {
        //this.animate(this.state.frameId);
        //$('#balloons div').off().hover((i, n)=> {
        //    this.animate(this.state.frameId, true);
        //})
    },
    animateCat: function animateCat() {
        $('[src$="cat.png"]').animate({
            top: 214
        }, 1000, "linear", function () {
            $(this).attr('src', "./images/11/cat.gif");
        });
    },
    animateBalloon: function animateBalloon() {
        $('.div-fly,[src$="balloons.png"],[src$="mouse.gif"]').wrapAll('<div>').parent().css({
            position: 'relative'
        }).animate({
            top: -400
        }, 1000, 'linear', function () {});
    },
    render: function render() {
        var balloon = [],
            words = ['bus stop', 'phrase book', 'hand', 'pocket', 'slowly', 'smile', 'speak', 'greet', 'thirsty', 'understand'];
        for (var i = 0; i < 10; i++) {
            var $div=$("<div class='div'>").append($('<span>',{
                "class":'span',
                text:words[i]
            }))
            $('#balloons').append($div)
        }

    }
};

$(function(){
    $.extend(balloonObj,obj);
    balloonObj.render()
    //balloonObj.generateNodesFromJson()
    balloonObj.componentDidMount()
})