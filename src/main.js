'use strict'

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routerMap from './routers';
import App from 'components/app.vue';
import Env from './config/env';

Vue.use(VueResource);
Vue.use(VueRouter);

// 开启debug模式
Vue.config.debug = true;
// Vue.config.devtools = true;

// HTTP相关
// Vue.http.options.emulateHTTP = true
// Vue.http.options.crossOrigin = true
// Vue.http.options.emulateJSON = true
// Vue.http.headers.common['Content-type'] = 'application/x-www-form-urlencoded';
Vue.http.options.xhr = {
	withCredentials: true
}

Vue.http.interceptors.push((request, next) => {
	request.timeout = 20000; //请求超时20秒
	// console.log(request)
	// if(request.url.indexOf('/lock/upload')>0){
	// request.headers['Content-type'] = 'multipart/form-data';
	// console.log('1111');
	// }
	request.credentials = true;
	next();
})

// 路由配置
var router = new VueRouter({
	// 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
	// history: Env != 'production',
	history: true,
	hashbang: false,
	root: '',
	saveScrollPosition: true,
	transitionOnLoad: true
});

router.beforeEach(function (transition) {
	window.scrollTo(0, 0);
	transition.next();
});

router.afterEach(function (transition) {
	document.title = transition.to.title || '天策房屋管理后台';
	//微信修改title hack
	// var iframe = document.createElement('iframe');
	// iframe.style.opacity = 0;
	// iframe.src = "/favicon.ico"
	// iframe.onload = function() {
	// 	setTimeout(function() {
	// 		iframe.remove();
	// 	}, 0);
	// }
	// document.body.appendChild(iframe);
});

// router.redirect({
//     '*': "/index"
// });

routerMap(router);

router.start(App, '#app');