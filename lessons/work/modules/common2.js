import React from 'react'
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
                let exec = /\/#\/(.+)\?.+/.exec(location.href);
                let val = exec[1]
                let index = this.list.indexOf(val);
                let nextInd = (index == this.list.length - 1) ? 0 : (index + 1)
                this.context.router.push('/' + this.list[nextInd])
            }
        return num
    },

    list: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven'],

    componentDidUpdate(){
        this.sentences = $('#animateContainer img');
    }
};
