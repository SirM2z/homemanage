<style>
    .login-box {}
    
    .login-box .login-modal {
        position: absolute;
        width: 520px;
        top: 50%;
        left: 50%;
        margin: -265px 0 0 -260px;
        background-color: #f5f9fc;
        border-radius: 10px;
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
            <input type="text" v-model="user_password" class="form-control text-input" placeholder="输入密码">
            <a href="" class="text-left">申请开通</a>
            <a href="" class="pull-right">忘记密码</a>
            <div class="login-btn">
                <button class="btn btn-primary btn-lg btn-block" @click="loginSystem">登录</button>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    import {showMsg,showLoading,hideLoading} from '../vuex/actions/popupActions'
    import {getUserInfo} from '../vuex/actions/userActions'
    import {base_url} from '../common.js'
    export default {
        vuex: {
            getters: {
            },
            actions:{
                getUserInfo
            }
        },
        filters: {
        },
        directives: {
        },
        data: function() {
            return {
                user_name: '18888888881',
                user_password: '123456'
            }
        },
        ready: function() {
            this.particlesApp()
        },
        beforeDestroy: function() {
            // window.particlesJS = null;
        },
        methods: {
            loginSystem:function(){
                showLoading(this.$store);
                var self = this;
                this.$http.post(base_url+'/user/login', {
                    user: this.user_name.trim(),
                    password: this.user_password.trim()
                }).then(function(response) {
                    if (!response.ok) {
                        hideLoading(this.$store);
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
                    hideLoading(this.$store);
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