'use strict'

module.exports = function(routers) {
    routers.map({
        '/': {
            name: 'index',
            title: '天策房屋管理后台',
            component: function(resolve) {
                require(['./views/index.vue'], resolve);
            }
        },
        'login': {
            name: 'login',
            title: '登陆',
            component: function(resolve) {
                require(['./views/login.vue'], resolve);
            }
        },
        'personal': {
            name: 'personal',
            title: '个人中心',
            component: function(resolve) {
                require(['./views/personal.vue'], resolve);
            }
        },
        'homeList': {
            name: 'homelist',
            title: '房间列表',
            component: function(resolve) {
                require(['./views/homeList.vue'], resolve);
            }
        },
        'propertyAdd': {
            name: 'propertyAdd',
            title: '房产增加',
            component: function(resolve) {
                require(['./views/propertyAdd.vue'], resolve);
            }
        },
        'propertyEdit': {
            name: 'propertyEdit',
            title: '房产修改',
            component: function(resolve) {
                require(['./views/propertyEdit.vue'], resolve);
            }
        },
        'homeInfo': {
            name: 'homeInfo',
            title: '房屋信息',
            component: function(resolve) {
                require(['./views/homeInfo.vue'], resolve);
            }
        },
        '*': {
            name: 'index',
            title: '天策房屋管理后台',
            component: function(resolve) {
                require(['./views/index.vue'], resolve);
            }
        },
        'test': {
            name: 'test',
            title: 'test',
            component: function(resolve) {
                require(['./views/test.vue'], resolve);
            }
        }
    })
}