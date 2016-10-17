<style>
	.nav-box .navbar-default {
		background-color: #0275d8;
	}
	.nav-box .container-fluid {
		/*padding-right: 200px;
		padding-left: 200px;*/
        width: 998px;
        margin: 0 auto;
	}
	.nav-box .container-fluid>.navbar-header{
		margin-right: 50px;
	}
	.nav-box .navbar-default a{
		color: #fff;
	}
	.nav-box .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {
		color: #fff;
	}
	.nav-box .navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:hover, .navbar-default .navbar-nav>.open>a:focus {
		color: #fff;
		background-color: #0275d8;
	}
	.nav-box .dropdown-menu>li>a:hover, .dropdown-menu>li>a:focus {
		color: #fff;
		background-color: #428bca;
	}
	.nav-box .navbar-default .navbar-nav>li>a {
		color: #fff;
	}
	.nav-box .navbar-nav>li>.dropdown-menu{
		background-color: #0275d8
	}
	.nav-box .nav-input{
		display: inline-block;
		height: 50px;
	}
	.nav-box .nav-input>input{
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
		-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
		box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
		-webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
		-o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
		transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
		background: #fff url("../../images/search.png") 95% center no-repeat;
		padding-right: 40px;
	}
	.nav-box .personal-list .dropdown-toggle{
		background: url("../../images/tx.png") center left no-repeat;
		padding-left: 40px;
	}
	.nav-box .personal-center{
		background: url("../../images/personal.png") center left no-repeat;
		padding-left: 40px;
	}
	.nav-box .sign-out{
		background: url("../../images/signOut.png") center left no-repeat;
		padding-left: 40px;
	}
	.nav-box .dropdown-menu{
		padding: 15px 20px;
	}
	.nav-box .dropdown-menu>li:first-child{
		padding-bottom: 10px;
	}
	.nav-box .navbar {
		margin-bottom: 0;
	}
</style>
<template>
	<div class="nav-box">
		<navbar placement="static" type="default">
			<a slot="brand" v-link="{name: 'index'}" title="Home" class="navbar-brand">LOGO</a>
			<li class="dropdown">
				<a v-link="{name: 'index'}" class="dropdown-toggle">房产管理</a>
			</li>
			<!--<li slot="right" class="nav-input">
				<input type="text" placeholder="输入要搜索的关键词">
			</li>-->
			<dropdown class="personal-list" slot="right" :text="name">
				<li><a class="personal-center"  v-link="{name: 'personal'}">个人中心</a></li>
				<li><a class="sign-out"  v-link="{name: 'login'}">退出登录</a></li>
			</dropdown>
		</navbar>
	</div>
</template>
<script>
	import { navbar,dropdown } from 'vue-strap'
	export default {
		vuex:{
			getters:{
				user_name:({userInfo})=>userInfo.obj.name
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
				name: window.localStorage.getItem('homemanage_username')
			}
        },
        ready: function() {
			// console.log(this.name);
        },
		methods: {
		},
		computed: {
			// user_name: function () {
			// 	return this.$store.state.userInfo.obj.name
			// }
		}
	}	
</script>