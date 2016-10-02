'use strict'

/**
* 千位分隔符
* */

module.exports = function(value) {
    return value.toString().replace(/\B(?=(\d{3})+$)/g,',');
};