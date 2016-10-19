<style>
    .personal-box {
        /*padding: 50px 250px 100px;*/
        width: 998px;
        min-width: 998px;
        margin: 0 auto 150px;
        min-height: 78%;
        height: auto !important;
        height: 100%;
    }
    .personal-box .btn-s,.btn-c {
        margin-right: 16px;
        width: 100px;
    }
    .personal-box .personal-info .info-item{
        overflow: hidden;
        padding: 15px;
    }
    .personal-box .personal-info .info-item>div{
        padding-right: 15px;
    }
    .personal-box .personal-info .info-item .pass-link>div:first-child{
        padding-bottom:10px;
    }
    .personal-box .personal-info .info-item .name-title{
        height: 34px;
        line-height: 34px;
    }
    .personal-box .personal-info .item-title {
        margin-right: 25px;
    }
    .personal-box .personal-info .user-img {
        width: 80px;
        height: 80px;
    }
    .personal-box .info-head {
        margin-bottom: 35px;
    }
    .personal-box .pass-btn {
        margin-top: 20px;
    }
</style>
<template>
    <nav-list></nav-list>
    <div class="personal-box">
        <div class="row info-head">
            <div class="col-md-8">
                <h1 class="head-title fl">
                    个人中心
                </h1>
            </div>
        </div>
        <div class="personal-info">
            <div class="info-item">
                <div class="fl item-title name-title">姓　　名：</div>
                <div class="fl"><input type="text" class="form-control" id="name" v-model="user_name"></div>
            </div>
            <!--<div class="info-item">
                <div class="fl item-title">个人照片：</div>
                <div v-if="user_img==''" class="fl"><img src="../images/default.png" class="img-circle"></div>
                <div v-else class="fl"><img :src="user_img" class="img-circle user-img"></div>
                <div class="fl"><input type="file" accept="image/*" /></div>
            </div>-->
            <div class="info-item">
                <div class="fl item-title">登录密码：</div>
                <div class="fl pass-link">
                    <div class=""><a href="#" @click="showModal" class="blue-text">修改密码</a></div>
                    <!--<div class=""><a href="#" @click="showModal">忘记密码？</a></div>-->
                </div>
            </div>
            <div class="info-item pass-btn">
                <button @click="modifyName" class="btn btn-primary btn-lg btn-s blue-btn">保存</button>
                <button @click="cancleModifyName" class="btn btn-default btn-lg btn-c">取消</button>
            </div>
        </div>
        <Modal>
            <div class="modal-ne">
                <div class="modal-head">修改登录密码</div>
                <div class="modal-bottom">
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入原有密码</div>
                        <div class="fl"><input type="password" class="form-control" placeholder="输入4~16位密码"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入新密码</div>
                        <div class="fl"><input type="password" class="form-control" placeholder="输入4~16位密码"></div>
                    </div>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm blue-btn" @click="hideModal">确认</button>
                </div>
            </div>
        </Modal>
    </div>
        <foot></foot>
</template>
<script>
    import navList from '../components/comon/navList.vue'
    import Modal from '../components/popup/Modal.vue'
    import {showModal, hideModal, showLoading, showMsg} from '../vuex/actions/popupActions'
    import foot from '../components/comon/foot.vue'
    import {base_url} from '../common.js'
    export default {
        vuex: {
            getters: {
            },
            actions:{
                showModal,
                hideModal
            }
        },
        data: function() {
            return {
                user_name: ''
            }
        },
        ready: function() {
            this.getUserInfo();
        },
        components: {
            Modal,
            navList,
            foot
        },
        beforeDestroy: function() {

        },
        methods: {
            getUserInfo: function(){
                // this.$route.query.id
                let _this = this;
                this.$http.post(base_url+'/user/info').then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();
                  //  console.log(resData);
                    if (resData.code === 0) {
                        // to do
                        this.user_name = resData.data.name;
                    }  
                    else if(resData.code === 10102 || resData.code === 10010 || resData.code === 10014){
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
            modifyName: function(){
                let _this = this;
                if(!this.user_name.trim()){
                    showMsg(this.$store,"请填写用户名！", 'error');
                    return;
                }
                this.$http.post(base_url+'/user/modifyName', {
                    name : this.user_name
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData);
                    if (resData.code === 0) {
                        window.localStorage.setItem('homemanage_username',_this.user_name);
                        showMsg(this.$store, "保存成功!");
                    } else {
                        showMsg(this.$store, resData.msg, 'error')
                    }
                }, function(response) {
                    showMsg(this.$store, '请求超时！', 'error')
                })
            },
            cancleModifyName: function(){
                this.$router.go({
                    name: 'index'
                })
            }
        }
    }
</script>