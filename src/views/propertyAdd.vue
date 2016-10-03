<style>
    .propertyadd-box {
        padding: 50px 250px 20px;
        width: 1200px;
        margin: 0 auto;
    }
    
    .propertyadd-box button {
        margin-right: 10px;
        width: 150px;
    }
    
    .propertyadd-box .propertyadd-info .info-item {
        overflow: hidden;
        padding: 20px;
    }
    .propertyadd-box .propertyadd-info .info-item.wg-item{
        padding-top: 10px;
    }
    
    .propertyadd-box .propertyadd-info .info-item>div {
        padding-right: 15px;
    }
    
    .propertyadd-box .propertyadd-info .info-item .pass-link>div:first-child {
        padding-bottom: 10px;
    }
    
    .propertyadd-box .propertyadd-info .info-item .name-title {
        height: 34px;
        line-height: 34px;
    }
    .propertyadd-box .propertyadd-info .info-item .name-title.wg-title{
        line-height: 65px;
    }
    
    .propertyadd-box .propertyadd-info .item-title {
        margin-right: 30px;
    }
    
    .propertyadd-box .propertyadd-info .add-wg {
        width: 100%;
    }
    
    .propertyadd-box .propertyadd-info .add-wg-btn {
        width: 180px;
        border: 1px dashed #e5e5e5;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 2px;
        color: #0275d8;
        background: #f5f9fc url("../images/addPass.png") 35px no-repeat;
        padding-left: 6px;
    }
    
    .propertyadd-box .propertyadd-info .item-address {
        width: 600px;
    }
    
    .propertyadd-box .propertyadd-info .wg-options {
        width: 800px;
    }
    
    .propertyadd-box .propertyadd-info .wg-option {
        display: inline-block;
        height: 40px;
        width: 180px;
        margin-top: 10px;
        margin-right: 25px;
        margin-bottom: 15px;
    }
    
</style>
<template>
    <nav-list></nav-list>
    <div class="propertyadd-box">
        <div class="row info-head">
            <div class="col-md-8">
                <h1 class="head-title fl">
                    添加房产
                </h1>
            </div>
        </div>
        <div class="propertyadd-info">
            <div class="info-item">
                <div class="fl item-title name-title">房产名称：</div>
                <div class="fl"><input type="text" class="form-control" id="name"></div>
            </div>
            <div class="info-item">
                <div class="fl item-title">房产图片：</div>
                <div class="fl"><input type="file" accept="image/*" /></div>
            </div>
            <div class="info-item">
                <div class="fl item-title name-title">房产地址：</div>
                <div class="fl"><input type="text" class="form-control item-address" id="name"></div>
            </div>
            <div class="info-item wg-item">
                <div class="fl item-title name-title wg-title">网关绑定：</div>
                <div class="fl">
                    <div class="wg-options">
                        <select class="form-control wg-option">
                            <option>test1</option>
                            <option>test2</option>
                            <option>test3</option>
                        </select>
                        <select class="form-control wg-option">
                            <option>test1</option>
                            <option>test2</option>
                            <option>test3</option>
                        </select>
                        <select class="form-control wg-option">
                            <option>test1</option>
                            <option>test2</option>
                            <option>test3</option>
                        </select>
                        <select class="form-control wg-option">
                            <option>test1</option>
                            <option>test2</option>
                            <option>test3</option>
                        </select>
                        <select class="form-control wg-option">
                            <option>test1</option>
                            <option>test2</option>
                            <option>test3</option>
                        </select>
                        <div class="add-wg wg-option">
                            <div class="add-wg-btn">添加网关</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-item">
                <div class="fl item-title name-title">备　　注：</div>
                <div class="fl">
                    <textarea class="form-control" cols="80" rows="3"></textarea>
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