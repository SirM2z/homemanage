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
		overflow: hidden;
	}

	.navhead-box .nav-body .body-logo{
		cursor: pointer;
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
		cursor: pointer;
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

	.navhead-box .nav-body .body-bottom>li{
		color: #fff;
		display: inline-block;
	    height: 50px;
	    line-height: 50px;
	    padding: 0 20px;
	    width: 147px;
	    cursor: pointer;;
	}

	.navhead-box .nav-body .body-bottom>li:active{
		background-color: #0169C1;
	}

	.navhead-box .nav-body .body-bottom>li .des{
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
			<div @click="goIndex" class="body-logo fl"><img src="../../images/logo_1.png" alt=""></div>
			<div class="body-title fl">房产管理</div>
			<div class="body-content fr" @click="showBottom">
				<div class="content-img fl"><img src="../../images/tx.png" alt=""></div>
				<div class="content-name fl">{{user_name?user_name:name}}<span></span></div>
			</div>
			<div class="body-search fr">
				<input type="text" v-model="searchFind" placeholder="输入要搜索的关键词">
				<div @click="searchHome" class="search-img text-center"><img src="../../images/search.png" alt=""></div>
				<ul v-show="show_search" class="search-list">
					<li v-for="item in searchlist" @click="goHomeList(item.estate_id)" class="list-item">item.name</li>
				</ul>
			</div>
			<ul v-show="show_bottom" class="body-bottom">
				<li class="bottom-item" @click="goPersonal">
					<img src="../../images/personal.png" alt="">
					<div class="des fr">个人中心</div>
				</li>
				<li class="bottom-item" @click="goLogin">
					<img src="../../images/signOut.png" alt="">
					<div class="des fr">退出登录</div>
				</li>
			</ul>
			<div v-show="show_search || show_bottom" @click="hideShow" class="body-cover"></div>
		</div>
	</div>
</template>
<script>
import {base_url} from '../../common.js'
import {showModal, hideModal, showLoading, showMsg} from '../../vuex/actions/popupActions'
export default {
    vuex: {
        getters: {
			user_name:({userInfo})=>userInfo.obj.name
        },
        actions: {
            showMsg
        }
    },
	components: {
	},
	data: function(){
		return {
			name: window.localStorage.getItem('homemanage_username'),
			searchFind: '',
			show_bottom: false,
			show_search: false,
			searchlist: []
		}
	},
	created: function(){
		// console.log(this.user_name);
		// this.name=this.user_name?this.user_name:window.localStorage.getItem('homemanage_username');
	},
	ready: function() {
		// console.log(this.name);
	},
	methods: {
		showBottom: function(){
			this.show_bottom=!this.show_bottom;
		},
		hideShow: function(){
			this.show_bottom= false;
			this.show_search= false;
		},
		searchHome: function(){
            let _this = this;
            if(!this.searchFind.trim()){
            	showMsg(this.$store, '请填写搜索内容！', 'warning');
                return;
            }
            this.$http.post(base_url+'/lock/find', {
                find : this.searchFind.trim()
            }).then(function(response) {
                if (!response.ok) {
                    showMsg(this.$store, '请求超时！', 'error');
                    return;
                }
                let resData = response.json();
                //console.log(resData);
                if (resData.code === 0) {
                	if(!resData.data || resData.data.length==0){
                		showMsg(this.$store, '未检索到查询内容！');
                		return;
                	}
					_this.searchlist= resData.data;
					_this.show_search= true;
                }  
                else if(resData.code === 10102 || resData.code === 10010 || resData.code === 10014 ){
                    showMsg(this.$store, '请先登陆！', 'error')
                    _this.$router.go({name: 'login'});
                }
                else {
                    showMsg(this.$store, resData.msg, 'error')
                }
            }, function(response) {
                showMsg(this.$store, '请求超时！', 'error')
            })
		},
		goIndex: function(){
			this.$router.go({name: 'index'})
		},
		goPersonal: function(){
			this.show_bottom= false;
			this.$router.go({name: 'personal'})
		},
		goLogin: function(){
			this.show_bottom= false;
			this.$router.go({name: 'login'})
		},
		goHomeList: function(id){
			this.show_search= false;
            this.$router.go({
                name: 'homeList',
                query: {
                    id: id
                }
            })
		}
	}
}	
</script>