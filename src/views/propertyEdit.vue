<style>
     .propertyedit-box {
        padding: 50px 250px 100px;
        margin: 0 auto;
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
    .propertyedit-box .propertyedit-info .info-item.wg-item{
        padding-top: 10px;
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
    .propertyedit-box .propertyedit-info .info-item .name-title.wg-title{
        line-height: 65px;
    }
    
    .propertyedit-box .propertyedit-info .item-title {
        margin-right: 30px;
    }
    
    .propertyedit-box .propertyedit-info .add-wg {
        width: 100%;
    }
    
    .propertyedit-box .propertyedit-info .add-wg-btn {
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
    
    .propertyedit-box .propertyedit-info .item-address {
        width: 600px;
    }
    
    .propertyedit-box .propertyedit-info .wg-options {
        width: 800px;
    }
    
    .propertyedit-box .propertyedit-info .wg-option {
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
    <div class="propertyedit-box">
        <div class="row info-head">
            <div class="col-md-8">
                <h1 class="head-title fl">
                    房产信息修改
                </h1>
            </div>
        </div>
        <div class="propertyedit-info">
            <div class="info-item">
                <div class="fl item-title name-title">房产名称：</div>
                <div class="fl"><input type="text" v-modal="name" class="form-control" id="name"></div>
            </div>
            <div class="info-item">
                <div class="fl item-title">房产图片：</div>
                <div class="fl"><input type="file" accept="image/*" /></div>
            </div>
            <div class="info-item">
                <div class="fl item-title name-title">房产地址：</div>
                <div class="fl"><input type="text" v-modal="address" class="form-control item-address" id="name"></div>
            </div>
            <div class="info-item wg-item">
                <div class="fl item-title name-title wg-title">网关绑定：</div>
                <div class="fl">
                    <div class="wg-options">
                        <select class="form-control wg-option">
                            <option v-for="item in gatewayList" :value="item.id">{{item.name}}</option>
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
                            <div class="add-wg-btn" @click="addSelect">添加网关</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-item">
                <div class="fl item-title name-title">备　　注：</div>
                <div class="fl">
                    <textarea class="form-control" v-modal="note" cols="80" rows="3"></textarea>
                </div>
            </div>
            <div class="info-item pass-btn">
                <button class="btn btn-primary btn-lg" @click="modifyEstate">保存</button>
                <button class="btn btn-default btn-lg">取消</button>
            </div>
        </div>
    </div>
        <foot></foot>
</template>
<script>
    import navList from '../components/comon/navList.vue'
    import foot from '../components/comon/foot.vue'
    import {base_url} from '../common.js'
    export default {
        data: function() {
            return {
                name: '',
                address: '',
                note: '',
                gatewayList: null,
                gateways: null,
                gatewaysNum: 0
            }
        },
        ready: function() {
            this.getEstate();
            this.getGatewayList();
        },
        components: {
            navList,
            foot
        },
        beforeDestroy: function() {

        },
        methods: {
            getEstate: function(){
                // this.$route.query.id
                console.log(this.$route.query.id);
                this.$http.post(base_url+'/lock/getEstate', {
                    id : this.$route.params.id
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！');
                        return
                    }
                    let resData = response.json();
                    console.log(resData);
                    if (resData.code === 0) {
                        // to do
                    } else {
                        showMsg(this.$store, resData.msg)
                    }
                }, function(response) {
                    showMsg(this.$store, '请求超时！')
                })
            },
            getGatewayList: function(){
                this.$http.post(base_url+'/lock/getGatewayList').then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！');
                        return
                    }
                    let resData = response.json();
                    console.log(resData);
                    if (resData.code === 0) {
                        //TO DO
                        this.gatewayList = resData.data;
                    } else {
                        showMsg(this.$store, resData.msg)
                    }
                }, function(response) {
                    showMsg(this.$store, '请求超时！')
                })
            },
            addSelect: function(){
                this.gatewaysNum++;
            },
            modifyEstate: function(){
                this.$http.post(base_url+'/lock/getEstate', {
                    name : this.$route.params.id,
                    address : this.$route.params.id,
                    note : this.$route.params.id,
                    gateways : this.$route.params.id
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！');
                        return
                    }
                    let resData = response.json();
                    console.log(resData);
                    if (resData.code === 0) {
                        // to do
                    } else {
                        showMsg(this.$store, resData.msg)
                    }
                }, function(response) {
                    showMsg(this.$store, '请求超时！')
                })
            }
        }
    }
</script>