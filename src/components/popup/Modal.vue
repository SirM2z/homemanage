<style>
	.modal-box {
		position: fixed;
		z-index: 1000;
		top: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .3);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	/* 必需 */
	
	.expand-transition {
		transition: all .3s ease;
	}
	/* .expand-enter 定义进入的开始状态 */
	/* .expand-leave 定义离开的结束状态 */
	
	.expand-enter,
	.expand-leave {
		opacity: 0;
	}
	/* 必需 */
	
	.zoom-transition {
		transition: all .2s ease;
	}
	/* .expand-enter 定义进入的开始状态 */
	/* .expand-leave 定义离开的结束状态 */
	
	.zoom-enter,
	.zoom-leave {
		transform: scale(0);
	}
</style>
<template>
	<div class="modal-box" v-show="show" @touchmove="prevent" @mousewheel="prevent" @click="hideModal" transition="expand">
		<div class="modal-content" @click="prevent" v-show="show" transition="zoom">
			<slot></slot>
		</div>
	</div>
</template>
<script>
import {hideModal} from '../../vuex/actions/popupActions'
export default {
	vuex:{
		actions: {
			hideModal
		},
		getters:{
			show: ({Modal}) => Modal.show
		}
	},
	methods: {
		prevent: function(e){
			e.preventDefault();
			e.stopPropagation();
		}
	}
}	
</script>