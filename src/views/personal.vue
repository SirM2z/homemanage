<style>
    .personal-box {
        padding: 50px 250px 20px;
        width: 1200px;
        margin: 0 auto;
    }
    .personal-box button {
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
                <div class="fl"><input type="text" class="form-control" id="name" value="张伟"></div>
            </div>
            <div class="info-item">
                <div class="fl item-title">个人照片：</div>
                <div class="fl"><img src="../images/default.png" class="img-circle"></div>
                <div class="fl"><input type="file" accept="image/*" /></div>
            </div>
            <div class="info-item">
                <div class="fl item-title">登录密码：</div>
                <div class="fl pass-link">
                    <div class=""><a href="#">修改密码</a></div>
                    <div class=""><a href="#">忘记密码？</a></div>
                </div>
            </div>
            <div class="info-item pass-btn">
                <button class="btn btn-primary btn-lg">保存</button>
                <button class="btn btn-default btn-lg">取消</button>
            </div>
        </div>
    </div>
        <foot></foot>
</template>
<script>
    import navList from '../components/comon/navList.vue'
    import foot from '../components/comon/foot.vue'
    export default {
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

        },
        methods: {
            
        }
    }
</script>