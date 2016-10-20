'use strict'

module.exports = {
    bind: function () {

    },
    update: function (newValue, oldValue) {
        var _this = this;
        var time = 5;
        this.el.innerHTML = '(' + time + ')';
        this.timeout = setInterval(function () {
            if (time == 1) {
                _this.el.innerHTML = '';
                clearInterval(_this.timeout);
                return;
            }
            time--;
            _this.el.innerHTML = '(' + time + ')';
        }, 1000);
    },
    unbind: function () {
        clearInterval(this.timeout);
    }
};