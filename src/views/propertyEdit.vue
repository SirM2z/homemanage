<style>
    .propertyedit-box {
        padding: 50px 250px 100px;
        min-height: 100%;
        height: auto !important;
        height: 100%;
    }
    
    .propertyedit-box button {
        margin-right: 10px;
        width: 150px;
    }
    
    .propertyedit-box .propertyedit-info .info-item {
        overflow: hidden;
        padding: 20px;
    }
    
    .propertyedit-box .propertyedit-info .info-item>div {
        padding-right: 15px;
    }
    
    .propertyedit-box .propertyedit-info .info-item .pass-link>div:first-child {
        padding-bottom: 10px;
    }
    
    .propertyedit-box .propertyedit-info .info-item .name-title {
        height: 34px;
        line-height: 34px;
    }
    
    .propertyedit-box .propertyedit-info .item-title {
        margin-right: 30px;
    }
</style>
<template>
    <nav-list></nav-list>
    <div class="propertyedit-box">
        <div class="row info-head">
            <div class="col-md-8">
                <h1 class="head-title fl">
                    添加房产：
                </h1>
            </div>
        </div>

        <div class="propertyedit-info">
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
                <div class="fl"><input type="text" class="form-control" id="name"></div>
            </div>
            <div class="info-item">
                <div class="fl item-title name-title">网关绑定：</div>
                <div class="fl">
                    <select class="form-control">
                        <option>test1</option>
                        <option>test2</option>
                        <option>test3</option>
                    </select>
                </div>
                <div class="fl">
                    <select class="form-control">
                        <option>test1</option>
                        <option>test2</option>
                        <option>test3</option>
                    </select>
                </div>
                <div class="fl">
                    <select class="form-control">
                        <option>test1</option>
                        <option>test2</option>
                        <option>test3</option>
                    </select>
                </div>
            </div>
            <div class="info-item">
                <div class="fl item-title name-title">备　　注：</div>
                <div class="fl">
                    <textarea class="form-control" cols="60" rows="3"></textarea>
                </div>
            </div>
            <div class="info-item pass-btn">
                <button class="btn btn-primary btn-lg">保存</button>
                <button class="btn btn-default btn-lg">取消</button>
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