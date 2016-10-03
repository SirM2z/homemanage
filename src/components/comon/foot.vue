<style>
	.foot-box{
        width: 90%;
		position: relative;
        bottom: 0;
        left: 0;
        margin: -100px 5% 0;
        clear:both;
        padding: 20px 0;
        border-top: 1px solid #e5e5e5;
        text-align: center;
	}
    .foot-box .foot-first{
        width: 100%;
    }
    .foot-box .foot-first .first{
        margin-right: 50px;
    }
    .foot-box .foot-first>div{
        display: inline-block;
    }
    .foot-box .foot-second{
        width: 100%;
        margin-top: 10px;
        text-align: center;
    }
</style>
<template>
	<div class="foot-box">
        <div class="foot-first">
            <div class="first">联系方式：0571-88888888</div>
            <div>客服邮箱：service@pstone.cc</div>
        </div>
        <div class="foot-second">杭州权石科技有限公司 Copyright © 2015 PStone Corporation, All Rights.</div>
	</div>
</template>
<script>
	export default {
		vuex:{
			actions: {
			},
			getters:{
			}
		},
		components: {
		},
        data: function(){
			return {

			}
        },
		methods: {
		}
	}	
</script>