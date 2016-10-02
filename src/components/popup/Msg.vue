<style>
	.msg-info{
		box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
		min-width: 300px;
		box-sizing: border-box;
		border-radius: 2px;
		position: fixed;
		left: 50%;
		top: 20px;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		background-color: #fff;
		-webkit-transition: opacity .3s,-webkit-transform .4s;
		transition: opacity .3s,-webkit-transform .4s;
		transition: opacity .3s,transform .4s;
		transition: opacity .3s,transform .4s,-webkit-transform .4s;
		overflow: hidden;
		z-index: 2000;
		display: flex;
	}
	.msg-info img{
		width: 40px;
		height: 40px;
		display: block;
	}
	.msg-info .msg-content{
		flex: 1;
		height: 40px;
		line-height: 40px;
		color: #8492a6;
		padding-left: 20px;
	}
	/* 必需 */
	.msgdown-transition {
		transition: all .3s ease-out;
	}

	/* .expand-enter 定义进入的开始状态 */
	/* .expand-leave 定义离开的结束状态 */
	.msgdown-enter, .msgdown-leave {
		top: 0;
		opacity: 0.5;
	}
</style>
<template>
	<div class="msg-info" v-show="msg.show" transition="msgdown">
		<img v-if="msg.type=='info'" src="../../images/info.svg" alt="">
		<img v-if="msg.type=='success'" src="../../images/success.svg" alt="">
		<img v-if="msg.type=='warning'" src="../../images/warning.svg" alt="">
		<img v-if="msg.type=='error'" src="../../images/error.svg" alt="">
		<div class="msg-content">{{msg.content}}</div>
	</div>
</template>
<script>
import { showMsg, hideMsg } from '../../vuex/actions/popupActions'
export default {
	vuex:{
		getters:{
			msg: ({Msg}) => Msg.message
		},
		actions:{
			showMsg,
			hideMsg
		}
	},
    ready: function(){
    },
  	watch: {
  		'msg': {
  			handler: function(val, oldVal){
  				var _this = this;
  				if(val.show){
			       setTimeout(function(){
			       		_this.hideMsg()
			       }, 3000);	
			    }
  			},
  			deep: true
  		}
  	}
}
</script>