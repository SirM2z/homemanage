'use strict'

module.exports = {
    bind: function() {

    },
    update: function() {
        var _this = this;
        this.el.innerHTML = new Date();
        this.timeout = setInterval(function() {
            _this.el.innerHTML = new Date();
        }, 1000);
    },
    unbind: function() {
        clearInterval(this.timeout);
    }
};