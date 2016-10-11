<style>
    .login-box {}
    
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
    .login-box .btn-verifi{
        margin-top: -5px;
    }
    .login-box .btn-verifi:focus, .login-box .btn-verifi:active:focus {
        outline: none;
        outline-offset: -2px;
    }
    .login-box .verifi_time_down{
        display: inline-block;
        height: 40px;
        line-height: 40px;
    }
</style>
<template>
    <div id="particles-js"></div>
    <div class="login-box">
        <div class="login-modal">
            <div class="form-group text-title">
                <h1 class="text-center text-primary">天策房屋管理后台</h1>
            </div>
            <div class="text-title">
                <p class="text-center">用户登录</p>
            </div>
            <input type="text" v-model="user_name" class="form-control text-input" placeholder="输入注册手机号">
            <input type="password" v-model="user_password" class="form-control text-input" placeholder="输入密码">
            <a href="#" class="text-left" @click="changeModalType('registere')">申请开通</a>
            <a href="#" class="pull-right" @click="changeModalType('verifi')">忘记密码</a>
            <div class="login-btn">
                <button class="btn btn-primary btn-lg btn-block" @click="loginSystem">登录</button>
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
                        <button v-if="verifi_time===0" class="btn btn-link btn-verifi" @click="getVerifiCode">获取验证码</button>
                        <button v-else class="btn btn-link btn-verifi">重新获取</button>
                        <span v-if="verifi_time!==0" class="color_999 verifi_time_down">({{verifi_time}})</span>
                    </div>
                    <button class="btn btn-default btn-cancle" @click="cancleVerifi">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="sureVerifi">确认</button>
                </div>
            </div>
            <!--修改密码-->
            <div class="modal-ne" v-show="modal_type==='change_pass'">
                <div class="modal-head">修改密码</div>
                <div class="modal-bottom">
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入新密码</div>
                        <div class="fl"><input type="password" v-model="new_password_verifi" class="form-control tel-input" placeholder="输入4~16位密码"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">再次输入密码</div>
                        <div class="fl"><input type="password" v-model="new_password" class="form-control code-input" placeholder="输入4~16位密码"></div>
                    </div>
                    <button class="btn btn-default btn-cancle" @click="cancleChangePass">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="sureChangePass">确认</button>
                </div>
            </div>
            <!--申请开通-->
            <div class="modal-ne" v-show="modal_type==='registere'">
                <div class="modal-head">申请开通</div>
                <div class="modal-bottom">
                    <p>目前管理平台开启注册，如需使用请联系客服进行开通：</p>
                    <p>热线电话：0571-87654321</p>
                    <p>客服邮箱：service@pstone.cc</p>
                    <button class="btn btn-primary btn-confirm pull-right" @click="hideModal">确认</button>
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
                clearInterval(this.time_down);
            }
        },
        methods: {
            loginSystem:function(){
                showLoading(this.$store);//展示loading动画
                this.$http.post(base_url+'/user/login', {
                    user: this.user_name.trim(),
                    password: this.user_password.trim()
                }).then(function(response) {
                    if (!response.ok) {//请求出现问题
                        hideLoading(this.$store);//隐藏loading动画
                        showMsg(this.$store, '请求超时！');//显示请求错误提示
                        return
                    }
                    let resData = response.json();//对接口返回数据json序列化
                    // console.log(resData);
                    if (resData.code === 0) {
                        this.getUserInfo({},this.$router);//登陆后调用获取用户信息接口
                    } else {
                        hideLoading(this.$store);//隐藏loading动画
                        showMsg(this.$store, resData.msg)//显示接口无法请求到正确数据的提示
                    }
                }, function(response) {//请求出现问题
                    hideLoading(this.$store);//隐藏loading动画
                    showMsg(this.$store, '请求超时！')//显示请求错误提示
                })
            },
            changeModalType:function(type){
                this.modal_type = type;
                console.log(this.modal_type);
                this.showModal();
            },
            sureVerifi:function(){
                if(this.verifi_code.trim()==''){
                    showMsg(this.$store, '请输入验证码')
                    return;
                }
                this.hideModal();
                this.modal_type = 'change_pass';
                this.showModal();
            },
            getVerifiCode:function(){
                let _this = this;
                if(this.verifi_phone.trim()==''){
                    showMsg(this.$store, '请填写手机号！');
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
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！');
                        return
                    }
                    let resData = response.json();
                    // console.log(resData);
                    if (resData.code === 0) {
                        // to do
                    } else {
                        showMsg(this.$store, resData.msg)
                    }
                }, function(response) {
                    showMsg(this.$store, '请求超时！')
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
                this.$http.post(base_url+'/user/modifyPassword', {
                    user : this.verifi_phone.trim(),
                    newPassword : this.verifi_phone.trim(),
                    code : this.verifi_code.trim(),
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！');
                        return
                    }
                    let resData = response.json();
                    // console.log(resData);
                    if (resData.code === 0) {
                        this.getUserInfo({},this.$router);
                    } else {
                        showMsg(this.$store, resData.msg)
                    }
                }, function(response) {
                    showMsg(this.$store, '请求超时！')
                })
            },
            particlesApp:function(){
                window.particlesJS('particles-js',
                    {
                        "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                            "enable": true,
                            "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ffffff"
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
                            "value": 0.5,
                            "random": false,
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
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
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
                            "mode": "repulse"
                            },
                            "onclick": {
                            "enable": true,
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
                            "distance": 200
                            },
                            "push": {
                            "particles_nb": 4
                            },
                            "remove": {
                            "particles_nb": 2
                            }
                        }
                        },
                        "retina_detect": true,
                        "config_demo": {
                        "hide_card": false,
                        "background_color": "#b61924",
                        "background_image": "",
                        "background_position": "50% 50%",
                        "background_repeat": "no-repeat",
                        "background_size": "cover"
                        }
                    }
                );

            }
        }
    }
</script>