<style>
    .index-box {
        padding: 50px 250px 100px;
        min-height: 100%;
        height: auto !important;
        height: 100%;
    }
    
    .index-box .fc-items {
        display: flex;
        padding: 0 50px;
        margin-top: 20px;
    }
    
    .index-box .fc-item {
        overflow: hidden;
        width: 100%;
    }
    
    .index-box .fc-info {
        flex: 1;
        margin-bottom: 20px;
    }
    
    .index-box .fc-info img {
        width: 90%;
        height: 230px;
        margin-bottom: 20px;
    }
    
    .index-box .fc-info .fc-name {
        font-size: 20px;
        font-weight: 600;
    }
    
    .index-box .add-info {
        position: relative;
        width: 90%;
        height: 230px;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        color: #0275d8;
        border-radius: 5px;
        background-color: #f5f9fc;
        border: dashed 1px rgba(26, 57, 80, 0.18);
        cursor: pointer;
    }
    
    .index-box .add-info img {
        width: 64px;
        height: 64px;
    }
    .index-box .add-fc {
        position: absolute;
        top: 50%;
        left:50%;
        margin-top: -57px;
        margin-left: -60px;
    }
    
</style>
<template>
    <nav-list></nav-list>
    <div class="index-box">
        <div class="row info-head">
            <div class="col-md-8">
                <h1 class="head-title fl">
                    房产管理
                </h1>
            </div>
        </div>
        <div class="fc-items">
            <div class="fc-info">
                <div class="fc-item">
                    <img src="../images/tmp.png">
                    <p class="fc-name">海创基地</p>
                    <p>共<span>28</span>间房，已入住<span>18</span>间房</p>
                </div>
            </div>
            <div class="fc-info">
                <div class="fc-item">
                    <img src="../images/tmp.png">
                    <p class="fc-name">海创基地</p>
                    <p>共<span>28</span>间房，已入住<span>18</span>间房</p>
                </div>
            </div>
            <div class="fc-info">
                <div class="fc-item">
                    <img src="../images/tmp.png">
                    <p class="fc-name">海创基地</p>
                    <p>共<span>28</span>间房，已入住<span>18</span>间房</p>
                </div>
            </div>
        </div>
        <div class="fc-items">
            <div class="fc-info">
                <div class="fc-item">
                    <img src="../images/tmp.png">
                    <p class="fc-name">海创基地</p>
                    <p>共<span>28</span>间房，已入住<span>18</span>间房</p>
                </div>
            </div>
            <div class="fc-info">
                <div class="fc-item">
                    <img src="../images/tmp.png">
                    <p class="fc-name">海创基地</p>
                    <p>共<span>28</span>间房，已入住<span>18</span>间房</p>
                </div>
            </div>
            <div class="fc-info">
                <div class="fc-item">
                    <img src="../images/tmp.png">
                    <p class="fc-name">海创基地</p>
                    <p>共<span>28</span>间房，已入住<span>18</span>间房</p>
                </div>
            </div>
        </div>
        <div class="fc-items">
            <div class="fc-info">
                <div class="fc-item">
                    <img src="../images/tmp.png">
                    <p class="fc-name">海创基地</p>
                    <p>共<span>28</span>间房，已入住<span>18</span>间房</p>
                </div>
            </div>
            <div class="fc-info">
                <div class="fc-item">
                    <img src="../images/tmp.png">
                    <p class="fc-name">海创基地</p>
                    <p>共<span>28</span>间房，已入住<span>18</span>间房</p>
                </div>
            </div>
            <div class="fc-info">
                <div class="fc-item">
                    <img src="../images/tmp.png">
                    <p class="fc-name">海创基地</p>
                    <p>共<span>28</span>间房，已入住<span>18</span>间房</p>
                </div>
            </div>
        </div>
        <div class="fc-items">
            <div class="fc-info">
                <div class="fc-item">
                    <img src="../images/tmp.png">
                    <p class="fc-name">海创基地</p>
                    <p>共<span>28</span>间房，已入住<span>18</span>间房</p>
                </div>
            </div>
            <div class="fc-info">
                <div class="add-info">
                    <div class="add-fc">
                        <img src="../images/addinfo.png">
                        <p>点击添加房产</p>
                    </div>
                </div>
            </div>
            <div class="fc-info"></div>
        </div>
    </div>
    <foot></foot>
</template>
<script>
    import navList from '../components/comon/navList.vue'
    import foot from '../components/comon/foot.vue'
    import {showMsg, showLoading, hideLoading} from '../vuex/actions/popupActions'
    export default {
        vuex: {
            getters: {
            },
            actions:{
                showLoading,
                showMsg,
                hideLoading
            }
        },
        data: function() {
            return {

            }
        },
        ready: function() {

        },
        components: {
            navList,
            foot
        },
        beforeDestroy: function() {
            getEstateList: function(){
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
                        showMsg(this.$store, resData.msg)//显示接口无法请求到正确数据的提示
                    }
                }, function(response) {//请求出现问题
                    hideLoading(this.$store);//隐藏loading动画
                    showMsg(this.$store, '请求超时！')//显示请求错误提示
                })
            }
        },
        methods: {

        }
    }
</script>