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
                <div class="fl"><input type="text" v-model="estate_name" class="form-control" id="name"></div>
            </div>
            <div class="info-item">
                <div class="fl item-title">房产图片：</div>
                <div class="fl"><input type="file" accept="image/*" @change="uploadFile"/></div>
            </div>
            <div class="info-item">
                <div class="fl item-title name-title">房产地址：</div>
                <div class="fl"><input type="text" v-model="estate_address" class="form-control item-address" id="name"></div>
            </div>
            <div class="info-item wg-item">
                <div class="fl item-title name-title wg-title">网关绑定：</div>
                <div class="fl">
                    <div class="wg-options">
                        <select class="form-control wg-option" v-for="n in gatewaysNum" v-model="estate_bindgw_selected[n]">
                            <option value="0">请选择</option>
                            <option v-for="item in gatewayList" :value="item.id">{{item.name}}</option>
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
                    <textarea class="form-control" v-model="estate_note" cols="80" rows="3"></textarea>
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
    import {showModal, hideModal, showLoading, showMsg} from '../vuex/actions/popupActions'
    export default {
        vuex: {
            actions: {
                showModal,
                hideModal,
                showLoading,
                showMsg
            }
        },
        data: function() {
            return {
                estate_name: '',
                estate_address: '',
                estate_bindgw: '',
                estate_note: '',
                estate_image: '',
                gatewayList: null,
                gateways: null,
                gatewaysNum: 1,
                estate_bindgw_selected: null
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
                //console.log(this.$route.query.id);
                this.$http.post(base_url+'/lock/getEstate', {
                    id : this.$route.query.id
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData);
                    if (resData.code === 0) {
                        // to do
                        this.estate_name = resData.data.name;
                        this.estate_address = resData.data.address;
                        // this.estate_bindgw = resData.data.bindgw.split('、');
                        this.estate_bindgw_selected = resData.data.bindgw;
                        this.estate_note = resData.data.note;
                        this.gatewaysNum = resData.data.bindgw.length;
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
                    //console.log(resData);
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
            uploadFile: function(e){
                let formdata = new FormData();  
                this.file = e.target.files[0];
                //console.log(this.file);
                formdata.append("img", this.file);
                //, {
                //   headers: {
                //        'Content-Type': 'multipart/form-data'
                //    }
                //}
                this.$http.post(base_url+'/lock/upload',formdata).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData);
                    if (resData.code === 0) {
                        //TO DO
                        this.estate_image = resData.data;
                    } else {
                        showMsg(this.$store, resData.msg)
                    }
                }, function(response) {
                    showMsg(this.$store, '请求超时！')
                })
            },
            addSelect: function(){
                this.estate_bindgw_selected[this.gatewaysNum]=0;
                this.gatewaysNum++;
            },
            modifyEstate: function(){
                let _this = this;
                this.$http.post(base_url+'/lock/modifyEstate', {
                    id : this.$route.query.id,
                    name : this.estate_name,
                    image : this.estate_image,
                    address : this.estate_address,
                    note : this.estate_note,
                    gateways : this.estate_bindgw_selected
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData);
                    if (resData.code === 0) {
                        // to do
                        showMsg(this.$store, '保存成功！');
                        _this.$router.go({
                            name: 'index'
                        })
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