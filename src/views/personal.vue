<style>
    .personal-box {
        padding: 50px 250px 100px;
        margin: 0 auto;
        min-height: 100%;
        height: auto !important;
        height: 100%;
    }
    .personal-box .btn-s,.btn-c {
        margin-right: 10px;
        width: 150px;
    }
    .personal-box .personal-info .info-item{
        overflow: hidden;
        padding: 20px;
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
        margin-right: 30px;
    }
    .personal-box .personal-info .user-img {
        width: 80px;
        height: 80px;
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
                <div class="fl"><input type="text" class="form-control" id="name" :value="user_name"></div>
            </div>
            <div class="info-item">
                <div class="fl item-title">个人照片：</div>
                <div v-if="user_img==''" class="fl"><img src="../images/default.png" class="img-circle"></div>
                <div v-else class="fl"><img :src="user_img" class="img-circle user-img"></div>
                <div class="fl"><input type="file" accept="image/*" /></div>
            </div>
            <div class="info-item">
                <div class="fl item-title">登录密码：</div>
                <div class="fl pass-link">
                    <div class=""><a href="#" @click="showModal">修改密码</a></div>
                    <div class=""><a href="#" @click="showModal">忘记密码？</a></div>
                </div>
            </div>
            <div class="info-item pass-btn">
                <button class="btn btn-primary btn-lg btn-s">保存</button>
                <button class="btn btn-default btn-lg btn-c">取消</button>
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
                    <button class="btn btn-primary btn-confirm" @click="hideModal">确认</button>
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
    export default {
        vuex: {
            getters: {
                user_name:({userInfo}) => userInfo.obj.name,
                user_img:({userInfo}) => userInfo.obj.image_add
            },
            actions:{
                showModal,
                hideModal
            }
        },
        data: function() {
            return {

            }
        },
        ready: function() {
            
        },
        components: {
            Modal,
            navList,
            foot
        },
        beforeDestroy: function() {

        },
        methods: {
            
        }
    }
</script>