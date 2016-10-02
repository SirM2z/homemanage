<style>
.top-box{
	position: fixed;
	width: 1.2rem;
	height: 1.2rem;
	text-align: center;
	color: #fff;
	right: .3rem;
	bottom: 2.133rem; 
	background: url(../../images/top.png) center no-repeat;
	background-size:1.2rem;
    z-index: 10;
}		
</style>
<template>
<div v-show="show" @click="totop" class="top-box"></div>	
</template>
<script>
function scrollToTop(scrollTo, time) {
    var scrollFrom = parseInt(document.body.scrollTop),
        i = 0,
        runEvery = 5;
    scrollTo = parseInt(scrollTo);
    time /= runEvery;
    var interval = setInterval(function() {
        i++;
        document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom;
        if (i >= time) {
            clearInterval(interval);
        }
    }, runEvery);
};
export default {
	ready: function(){
		var sHeight = screen.height;
		var that = this;
		window.onscroll = function(){
			if(document.body.scrollTop > sHeight){
				that.show = true;
			}else{
				that.show = false;
			}
		}
	},
	data: function(){
		return {
			show: false
		}
	},
	methods: {
		totop: function(){
		    scrollToTop('0', 300);
		}
	}
}
</script>