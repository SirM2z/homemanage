<style>
	.nav-box .navbar-default {
		background-color: #0275d8;
	}
	.nav-box .container-fluid {
		padding-right: 200px;
		padding-left: 200px;
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
		background-color: #fff;
		background-image: none;
		border: 1px solid #ccc;
		border-radius: 4px;
		-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
		box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
		-webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
		-o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
		transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	}
</style>
<template>
	<div class="nav-box">
		<navbar placement="top" type="default">
			<a slot="brand" href="/" title="Home" class="navbar-brand">LOGO</a>
			<li class="dropdown">
				<a href="#" class="dropdown-toggle">房产管理</a>
			</li>
			<li slot="right" class="nav-input">
				<input type="text" placeholder="输入要搜索的关键词">
			</li>
			<dropdown slot="right" text="张伟">
				<li><a href="link">个人中心</a></li>
				<li><a href="link">退出登录</a></li>
			</dropdown>
		</navbar>
	</div>
</template>
<script>
	import { navbar,dropdown } from 'vue-strap'
	export default {
		vuex:{
			actions: {
			},
			getters:{
			}
		},
		components: {
			navbar,
			dropdown
		},
        data: function(){
			return {

			}
        },
		methods: {
		}
	}	
</script>