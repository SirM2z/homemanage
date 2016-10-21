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
    
    .personal-box .btn-s,
    .btn-c {
        margin-right: 16px;
        width: 100px;
    }
    
    .personal-box .personal-info .info-item {
        overflow: hidden;
        padding: 15px;
    }
    
    .personal-box .personal-info .info-item>div {
        padding-right: 15px;
    }
    
    .personal-box .personal-info .info-item .pass-link>div:first-child {
        padding-bottom: 10px;
    }
    
    .personal-box .personal-info .info-item .name-title {
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

    .personal-box .modal-ne .modal-item .tel-input {
        width: 300px;
    }
    
    .personal-box .modal-ne .modal-item .code-input {
        width: 200px;
    }
    
    .personal-box .btn-verifi {
        margin-top: -5px;
    }
    
    .personal-box .btn-verifi:focus,
    .personal-box .btn-verifi:active:focus {
        outline: none;
        outline-offset: -2px;
    }
    
    .personal-box .verifi_time_down {
        display: inline-block;
        height: 40px;
        line-height: 40px;
    }
</style>
<template>
    <navhead></navhead>
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
                    <div class=""><a href="#" @click="changeModalType('verifi')" class="blue-text">修改密码</a></div>
                    <!--<div class=""><a href="#" @click="showModal">忘记密码？</a></div>-->
                </div>
            </div>
            <div class="info-item pass-btn">
                <button @click="modifyName" class="btn btn-primary btn-lg btn-s blue-btn">保存</button>
                <button @click="cancleModifyName" class="btn btn-default btn-lg btn-c">取消</button>
            </div>
        </div>
        <Modal>
            <!--身份验证-->
            <div class="modal-ne" v-show="modal_type==='verifi'">
                <div class="modal-head">身份验证</div>
                <div class="modal-bottom">
                    <p class="text-muted">为了保障安全，请先验证身份。验证成功后可进行下一步操作。</p>
                    <div class="modal-item">
                        <div class="fl item-title name-title">注册手机号</div>
                        <div class="fl"><input type="text" v-model="verifi_phone" class="form-control tel-input"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入验证码</div>
                        <div class="fl"><input type="text" v-model="verifi_code" class="form-control code-input"></div>
                        <button v-if="verifi_time===0" @click="getVerifiCode" class="btn btn-link btn-verifi blue-text">获取验证码</button>
                        <button v-else class="btn btn-link btn-verifi blue-text">重新获取</button>
                        <span v-if="verifi_time!==0" class="color_999 verifi_time_down">({{verifi_time}})</span>
                    </div>
                    <button @click="cancleVerifi" class="btn btn-default btn-cancle">取消</button>
                    <button @click="sureVerifi" class="btn btn-primary btn-confirm blue-btn">确认</button>
                </div>
            </div>
            <!--修改密码-->
            <div class="modal-ne" v-show="modal_type==='change_pass'">
                <div class="modal-head">修改密码</div>
                <div class="modal-bottom">
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入新密码</div>
                        <div class="fl"><input type="password" v-model="new_password_verifi" class="form-control" placeholder="输入4~16位密码"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">再次输入密码</div>
                        <div class="fl"><input type="password" v-model="new_password" class="form-control" placeholder="输入4~16位密码"></div>
                    </div>
                    <button @click="cancleChangePass" class="btn btn-default btn-cancle">取消</button>
                    <button @click="sureChangePass" class="btn btn-primary btn-confirm blue-btn">确认</button>
                </div>
            </div>
        </Modal>
    </div>
    <foot></foot>
</template>
<script>
import Modal from '../components/popup/Modal.vue'
import {showModal, hideModal, showLoading, showMsg} from '../vuex/actions/popupActions'
import {base_url} from '../common.js'
import navhead from '../components/comon/navhead.vue'
import foot from '../components/comon/foot.vue'
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
            user_name: '',
            modal_type: '',
            verifi_phone: '',
            verifi_time: 0,
            time_down: null,
            verifi_code: '',
            new_password_verifi: '',
            new_password: ''
        }
    },
    ready: function() {
        this.getUserInfo();
    },
    components: {
        Modal,
        navhead,
        foot
    },
    beforeDestroy: function() {
        if(this.time_down){
            window.clearInterval(this.time_down);
        }
    },
    methods: {
        getUserInfo: function(){
            // this.$route.query.id
            let _this = this;
            this.$http.post(base_url+'/user/info',{}, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(response) {
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
        changeModalType:function(type){
            this.modal_type = type;
            // console.log(this.modal_type);
            this.showModal();
        },
        sureVerifi:function(){
            if(this.verifi_phone.trim()==''){
                showMsg(this.$store, '请填写手机号！', 'warning');
                return;
            }
            if(this.verifi_code.trim()==''){
                showMsg(this.$store, '请输入验证码', 'warning')
                return;
            }
            this.hideModal();
            this.modal_type = 'change_pass';
            this.showModal();
        },
        getVerifiCode:function(){
            let _this = this;
            if(this.verifi_phone.trim()==''){
                showMsg(this.$store, '请填写手机号！', 'warning');
                return;
            }
            this.verifi_time = 60;
            this.time_down = setInterval(function() {
                if(_this.verifi_time == 0){
                    clearInterval(_this.time_down);
                    return;
                }
                _this.verifi_time--;
            }, 1000);
            this.$http.post(base_url+'/user/sendCode', {
                phone : this.verifi_phone.trim()
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(response) {
                if (!response.ok) {
                    showMsg(this.$store, '请求超时！', 'error');
                    return
                }
                let resData = response.json();
                // console.log(resData);
                if (resData.code === 0) {
                    // to do
                } else {
                    showMsg(this.$store, resData.msg, 'error')
                }
            }, function(response) {
                showMsg(this.$store, '请求超时！', 'error')
            })
        },
        cancleVerifi:function(){
            this.verifi_time = 0;
            this.verifi_code = '';
            this.hideModal();
        },
        cancleChangePass:function(){
            this.modal_type = 'verifi';
            this.verifi_code = '';
            this.hideModal();
        },
        sureChangePass:function(){
            let _this = this;
            if(!this.verifi_phone.trim() || !this.new_password_verifi.trim() || !this.new_password.trim() || !this.verifi_code.trim()){
                showMsg(this.$store, '请填写完整信息！', 'warning');
                return;
            }
            if(this.new_password_verifi.trim() != this.new_password.trim()){
                showMsg(this.$store, '两次密码输入不一致！', 'warning');
                return;
            }
            this.$http.post(base_url+'/user/modifyPassword', {
                user : this.verifi_phone.trim(),
                newPassword : this.new_password.trim(),
                code : this.verifi_code.trim(),
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(response) {
                if (!response.ok) {
                    showMsg(this.$store, '请求超时！', 'error');
                    return
                }
                let resData = response.json();
                // console.log(resData);
                if (resData.code === 0) {
                    _this.hideModal(_this.$store);
                    showMsg(this.$store, '修改成功！')
                    //this.getUserInfo({},this.$router);
                } else {
                    showMsg(this.$store, resData.msg, 'error')
                }
            }, function(response) {
                showMsg(this.$store, '请求超时！', 'error')
            })
        },
        modifyName: function(){
            let _this = this;
            if(!this.user_name.trim()){
                showMsg(this.$store,"请填写用户名！", 'warning');
                return;
            }
            if(this.user_name.trim().length>10){
                showMsg(this.$store,"请填写十位以内的用户名！", 'warning');
                return;
            }
            this.$http.post(base_url+'/user/modifyName', {
                name : this.user_name
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
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
                    window.location.reload();
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