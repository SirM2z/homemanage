<style>
	.navhead-box{
		background-color: #0275d8;
		width: 100%;
		height: 50px;
	}
	
	.navhead-box .nav-body{
		/*padding-right: 200px;
		padding-left: 200px;*/
		width: 998px;
		margin: 0 auto;
		position: relative;
	}

	.navhead-box .nav-body .body-title{
		height: 50px;
		line-height: 50px;
		color: #fff;
	}

	.navhead-box .nav-body .body-title:active{
		background-color: #0169C1;
	}
	
	.navhead-box .nav-body .body-search {
		height: 50px;
		margin-right: 20px;
		position: relative;
	}
	
	.navhead-box .nav-body .body-search>input {
		margin-top: 8px;
		margin-right: 100px;
		display: block;
		width: 300px;
		height: 34px;
		padding: 6px 12px;
		font-size: 14px;
		line-height: 1.42857143;
		color: #555;
		border: 1px solid #ccc;
		border-radius: 4px;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
		-webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
		-o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
		transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
		padding-right: 40px;
	}
	
	.navhead-box .nav-body .body-search .search-img {
		position: absolute;
		width: 40px;
		height: 50px;
		line-height: 50px;
		right: 100px;
    	top: 0;
	}

	.navhead-box .nav-body .body-search .search-list{
		position: absolute;
		background-color: #fff;
		border-right: 1px solid #e0e0e0;
		border-left: 1px solid #e0e0e0;
		border-bottom: 1px solid #e0e0e0;
		z-index: 100;
	}

	.navhead-box .nav-body .body-search .search-list .list-item{
		padding: 3px 5px
	}
	
	.navhead-box .nav-body .body-content {
		height: 50px;
		color: #fff;
	}
	
	.navhead-box .nav-body .body-content:active {
		background-color: #0169C1;
	}
	
	.navhead-box .nav-body .body-content .content-img{
		line-height: 50px;
		margin-right: 10px;
	}
	
	.navhead-box .nav-body .body-content .content-name{
		line-height: 50px;
		margin-top: 3px;
	}
	
	.navhead-box .nav-body .body-content .content-name>span{
		display: inline-block;
	    width: 0;
	    height: 0;
	    margin-left: 5px;
	    vertical-align: middle;
	    border-top: 4px solid;
	    border-right: 4px solid transparent;
	    border-left: 4px solid transparent;
	}

	.navhead-box .nav-body .body-bottom{
	    width: 147px;
		position: absolute;
		top: 51px;
		right: 0;
		background-color: #0275d8;
		z-index: 100;
	}

	.navhead-box .nav-body .body-bottom>li>a{
		color: #fff;
		display: inline-block;
	    height: 50px;
	    line-height: 50px;
	    padding: 0 20px;
	    width: 147px;
	}

	.navhead-box .nav-body .body-bottom>li>a:active{
		background-color: #0169C1;
	}

	.navhead-box .nav-body .body-bottom>li>a .des{
		height: 45px;
		line-height: 45px;
		margin-top: 3px;
	}
	.body-cover{
		z-index: 99;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
<template>
	<div class="navhead-box">
		<div class="nav-body">
			<div class="body-logo fl"><img src="../../images/logo_1.png" alt=""></div>
			<div class="body-title fl">房产管理</div>
			<div class="body-content fr" @click="showBottom">
				<div class="content-img fl"><img src="../../images/tx.png" alt=""></div>
				<div class="content-name fl">{{name}}<span></span></div>
			</div>
			<div class="body-search fr">
				<input type="text" placeholder="输入要搜索的关键词">
				<div class="search-img text-center"><img src="../../images/search.png" alt=""></div>
				<ul v-show="show_search"  @blur="searchBlur" class="search-list">
					<li class="list-item">海创基地</li>
					<li class="list-item">海创基地海创基地</li>
					<li class="list-item">海创基地</li>
					<li class="list-item">海创基地</li>
				</ul>
			</div>
			<ul v-show="show_bottom" class="body-bottom">
				<li>
					<a class="bottom-first" v-link="{name: 'personal'}">
						<img src="../../images/personal.png" alt="">
						<div class="des fr">个人中心</div>
					</a>
				</li>
				<li>
					<a class="bottom-first" v-link="{name: 'login'}">
						<img src="../../images/signOut.png" alt="">
						<div class="des fr">退出登录</div>
					</a>
				</li>
			</ul>
			<div v-show="show_search || show_bottom" @click="hideShow" class="body-cover"></div>
		</div>
	</div>
</template>
<script>
import { navbar,dropdown } from 'vue-strap'
export default {
    vuex: {
        getters: {
        },
        actions: {
        }
    },
	components: {
		navbar,
		dropdown
	},
	data: function(){
		return {
			name: window.localStorage.getItem('homemanage_username'),
			show_bottom: false,
			show_search: false,
			searchlist: []
		}
	},
	ready: function() {
		// console.log(this.name);
	},
	methods: {
		showBottom: function(){
			this.show_bottom=!this.show_bottom;
		},
		searchBlur: function(){
			this.show_bottom=!this.show_bottom;
		},
		hideShow: function(){
			this.show_bottom= false;
			this.show_search= false;
		}
	}
}	
</script>