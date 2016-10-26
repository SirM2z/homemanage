<style>
    .login-box .login-modal {
        position: absolute;
        width: 520px;
        top: 50%;
        left: 50%;
        margin: -265px 0 0 -260px;
        background-color: #f5f9fc;
        border-radius: 5px;
        z-index: 100;
        padding: 20px 80px 40px;
    }
    
    .login-box .text-input {
        margin-bottom: 20px;
        height: 50px;
    }
    
    .login-box .text-title {
        margin-bottom: 40px;
        font-weight: bold;
    }
    
    .login-box .login-btn {
        margin-top: 40px;
    }
    
    .login-box .modal-ne .modal-item .tel-input {
        width: 300px;
    }
    
    .login-box .modal-ne .modal-item .code-input {
        width: 200px;
    }
    
    .login-box .btn-verifi {
        margin-top: -5px;
    }
    
    .login-box .btn-verifi:focus,
    .login-box .btn-verifi:active:focus {
        outline: none;
        outline-offset: -2px;
    }
    
    .login-box .verifi_time_down {
        display: inline-block;
        height: 40px;
        line-height: 40px;
    }
    
    .login-box .blue-text {
        color: #0275d8;
    }
    
    .login-box .blue-btn {
        border-radius: 6px;
        background-color: #0275d8;
    }
</style>
<template>
    <div id="particles-js" style="background-color: rgb(46, 147, 242); background-size: cover; background-repeat: no-repeat; background-position: 50% 50%;"></div>
    <div class="login-box">
        <div class="login-modal">
            <div class="form-group text-title">
                <h1 class="text-center blue-text">权石科技房屋管理后台</h1>
            </div>
            <div class="text-title">
                <p class="text-center">用户登录</p>
            </div>
            <input type="number" v-model="user_name" maxlength="11" class="form-control text-input" placeholder="输入注册手机号">
            <input type="password" v-model="user_password" maxlength="16" class="form-control text-input" placeholder="输入密码">
            <a href="#" class="text-left blue-text" @click="changeModalType('registere')">申请开通</a>
            <a href="#" class="pull-right blue-text" @click="changeModalType('verifi')">忘记密码</a>
            <div class="login-btn">
                <button class="btn btn-primary btn-lg btn-block blue-btn" @click="loginSystem">登录</button>
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
                        <div class="fl"><input type="text" maxlength="11" v-model="verifi_phone" class="form-control tel-input"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入验证码</div>
                        <div class="fl"><input type="text" v-model="verifi_code" class="form-control code-input"></div>
                        <button v-if="verifi_time===0" @click="getVerifiCode" class="btn btn-link btn-verifi blue-text">获取验证码</button>
                        <button v-else class="btn btn-link btn-verifi color_999">重新获取</button>
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
                        <div class="fl"><input type="password" v-model="new_password_verifi" maxlength="16" class="form-control" placeholder="输入4~16位密码"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">再次输入密码</div>
                        <div class="fl"><input type="password" v-model="new_password" maxlength="16" class="form-control" placeholder="输入4~16位密码"></div>
                    </div>
                    <button @click="cancleChangePass" class="btn btn-default btn-cancle">取消</button>
                    <button @click="sureChangePass" class="btn btn-primary btn-confirm blue-btn">确认</button>
                </div>
            </div>
            <!--申请开通-->
            <div class="modal-ne" v-show="modal_type==='registere'">
                <div class="modal-head">申请开通</div>
                <div class="modal-bottom">
                    <p>目前管理平台仍未开启注册功能，如需使用请联系客服进行开通：</p>
                    <p>热线电话：0571-87717229</p>
                    <p>客服邮箱：adf@pstone.cc</p>
                    <button @click="hideModal" class="btn btn-primary btn-confirm fr blue-btn">确认</button>
                </div>
            </div>
        </Modal>
    </div>
</template>
<script>
import navList from '../components/comon/navList.vue'
import Modal from '../components/popup/Modal.vue'
import {getUserInfo} from '../vuex/actions/userActions'
import {showModal, hideModal, showMsg, showLoading, hideLoading} from '../vuex/actions/popupActions'
import {base_url} from '../common.js'
export default {
    vuex: {
        getters: {
        },
        actions: {
            showModal,
            hideModal,
            showLoading,
            showMsg,
            hideLoading,
            getUserInfo
        }
    },
    ready: function(){
    },
    components: {
        Modal,
        navList
    },
    filters: {
    },
    directives: {
    },
    data: function() {
        return {
            user_name: '18888888881',
            user_password: '123456',
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
        this.particlesApp()
    },
    beforeDestroy: function() {
        if(this.time_down){
            window.clearInterval(this.time_down);
        }
    },
    methods: {
        loginSystem:function(){
            if(!this.user_name.trim() || !this.user_password.trim()){
                showMsg(this.$store, '请填写完整账号密码！', 'warning');
                return;
            }
            showLoading(this.$store);//展示loading动画
            this.$http.post(base_url+'/user/login', {
                user: this.user_name.trim(),
                password: this.user_password.trim()
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(response) {
                if (!response.ok) {//请求出现问题
                    hideLoading(this.$store);//隐藏loading动画
                    showMsg(this.$store, '请求超时！', 'error');//显示请求错误提示
                    return
                }
                let resData = response.json();//对接口返回数据json序列化
                // console.log(resData);
                if (resData.code === 0) {
                    this.getUserInfo({},this.$router);//登陆后调用获取用户信息接口
                } else {
                    hideLoading(this.$store);//隐藏loading动画
                    showMsg(this.$store, resData.msg, 'error')//显示接口无法请求到正确数据的提示
                }
            }, function(response) {//请求出现问题
                hideLoading(this.$store);//隐藏loading动画
                showMsg(this.$store, '请求超时！', 'error')//显示请求错误提示
            })
        },
        changeModalType:function(type){
            this.modal_type = type;
            this.verifi_phone = '';
            this.verifi_code = '';
            this.new_password_verifi= '',
            this.new_password= ''
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
            if(!/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i.test(this.verifi_phone.trim()))
            {
                showMsg(this.$store, '请填写正确手机号！', 'warning');
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
            this.verifi_phone= '';
            this.hideModal();
        },
        cancleChangePass:function(){
            this.modal_type = 'verifi';
            this.verifi_code = '';
            this.verifi_phone= '',
            this.new_password_verifi= '',
            this.new_password= ''
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
            if(this.new_password.trim().length<4 || this.new_password.trim().length>16){
                showMsg(this.$store, '请填写规定长度的密码！', 'warning');
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
                    _this.verifi_phone= '',
                    _this.verifi_code= '',
                    _this.new_password_verifi= '',
                    _this.new_password= ''
                    showMsg(this.$store, '修改成功！')
                    _this.hideModal(_this.$store);
                    //this.getUserInfo({},this.$router);
                } 
                else if(resData.code === 10017){
                    showMsg(this.$store, '请检查验证码！', 'warning')
                    _this.modal_type= 'verifi';
                }
                else {
                    showMsg(this.$store, resData.msg, 'error')
                    _this.hideModal(_this.$store);
                }
            }, function(response) {
                showMsg(this.$store, '请求超时！', 'error')
            })
        },
        particlesApp:function(){
            window.particlesJS('particles-js',
                {
                    "particles": {
                        "number": {
                            "value": 15,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#e6e1e1"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 1,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 5,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 300,
                            "color": "#ffffff",
                            "opacity": 0.7,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 3,
                            "direction": "none",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                             },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }
            );
        }
    }
}
</script>