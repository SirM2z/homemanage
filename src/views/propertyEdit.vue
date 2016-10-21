<style>
    .propertyedit-box {
        /*padding: 50px 250px 100px;*/
        width: 998px;
        min-width: 998px;
        margin: 0 auto 150px;
        min-height: 78%;
        height: auto !important;
        height: 100%;
    }
    
    .propertyedit-box button {
        margin-right: 16px;
        width: 100px;
    }
    
    .propertyedit-box .propertyedit-info .info-item {
        overflow: hidden;
        padding: 15px;
    }
    
    .propertyedit-box .propertyedit-info .info-item.wg-item {
        padding-top: 10px;
    }

    .propertyedit-box .propertyedit-info .info-item.wg-item .wg-note{
        height: 34px;
        line-height: 34px;
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
    
    .propertyedit-box .propertyedit-info .info-item .name-title.wg-title {
        line-height: 65px;
    }
    
    .propertyedit-box .propertyedit-info .item-title {
        margin-right: 25px;
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
    
    .propertyedit-box .info-head {
        margin-bottom: 35px;
    }
    
    .propertyedit-box .pass-btn {
        margin-top: 20px;
    }

    .propertyedit-box .list {
        overflow: hidden;
        width: 600px;
    }

    .propertyedit-box .list-item {
        height: 34px;
        line-height: 34px;
        margin: 0 15px 10px 0;
    }

    .propertyedit-box .label-checkbox {
        cursor: pointer;
        font-weight: 500;
    }

    .propertyedit-box .checkbox {
        cursor: pointer;
        display: inline-block;
        position: relative;
        z-index: 10;
        margin-right: 5px;
    }

    .propertyedit-box .checkbox:before {
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        content: "";
        position: absolute;
        left: 0;
        z-index: 1;
        width: 16px;
        height: 16px;
        border: 2px solid #f2f2f2;
    }
    .propertyedit-box .checkbox:checked:before {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        height: .5rem;
        border-color: #0275d8;
        border-top-style: none;
        border-right-style: none;
    }
    .propertyedit-box .checkbox:after {
        content: "";
        position: absolute;
        width: 13px;
        height: 13px;
        background: #fff;
        cursor: pointer;
    }
</style>
<template>
    <navhead></navhead>
    <div class="propertyedit-box">
        <div class="row info-head">
            <div class="col-md-12">
                <h1 class="head-title">
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
                <div class="fl"><input type="file" accept="image/*" @change="uploadFile" /></div>
            </div>
            <div class="info-item">
                <div class="fl item-title name-title">房产地址：</div>
                <div class="fl"><input type="text" v-model="estate_address" class="form-control item-address" id="name"></div>
            </div>
            <div class="info-item wg-item">
                <div class="fl item-title name-title">网关绑定：</div>
                <div class="fl">
                    <div class="wg-options">
                        <ul v-if="gatewayList && gatewayList.length>0" class="list">
                            <li v-for="item in gatewayList" track-by="$index" class="list-item fl">
                              <label class="label-checkbox">
                                    <input type="checkbox" class="checkbox" :value="item.id" v-model="estate_bindgw_selected">
                                    <span>{{item.name}}</span>
                              </label>
                            </li>
                        </ul>
                        <div v-else class="wg-note color_999">暂无可绑定网关</div>
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
                <button class="btn btn-primary btn-lg blue-btn" @click="modifyEstate">保存</button>
                <button class="btn btn-default btn-lg" @click="cancleModifyEstate">取消</button>
            </div>
        </div>
    </div>
    <foot></foot>
</template>
<script>
import {base_url} from '../common.js'
import {showModal, hideModal, showLoading, showMsg} from '../vuex/actions/popupActions'
import navhead from '../components/comon/navhead.vue'
import foot from '../components/comon/foot.vue'
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
        this.getEstateGateway();
    },
    components: {
        navhead,
        foot
    },
    beforeDestroy: function() {

    },
    methods: {
        getEstate: function(){
            // this.$route.query.id
            //console.log(this.$route.query.id);
            let _this = this;
            this.$http.post(base_url+'/lock/getEstate', {
                id : this.$route.query.id
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
                //console.log(resData);
                if (resData.code === 0) {
                    // to do
                    this.estate_name = resData.data.name;
                    this.estate_address = resData.data.address;
                    // this.estate_bindgw = resData.data.bindgw.split('、');
                    this.estate_bindgw_selected = resData.data.bindgw;
                    this.estate_note = resData.data.note;
                    this.gatewaysNum = resData.data.bindgw.length;
                }  
                else if(resData.code === 10102 || resData.code === 10010 || resData.code === 10014){
                    showMsg(this.$store, '请先登陆！', 'error')
                    _this.$router.go({name: 'login'});
                }
                else {
                    showMsg(this.$store, resData.msg, 'error')
                }
            }, function(response) {
                showMsg(this.$store, '请求超时！', 'error')
            })
        },
        getEstateGateway: function(){
            this.$http.post(base_url+'/lock/getBindGateway', {
                id : this.$route.query.id
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
                //console.log(resData);
                if (resData.code === 0) {
                    //TO DO
                    this.gatewayList = resData.data;
                } else {
                    showMsg(this.$store, resData.msg, 'error')
                }
            }, function(response) {
                showMsg(this.$store, '请求超时！', 'error')
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
                    showMsg(this.$store, '请求超时！', 'error');
                    return
                }
                let resData = response.json();
                //console.log(resData);
                if (resData.code === 0) {
                    //TO DO
                    this.estate_image = resData.data;
                } else {
                    showMsg(this.$store, resData.msg, 'error')
                }
            }, function(response) {
                showMsg(this.$store, '请求超时！', 'error')
            })
        },
        modifyEstate: function(){
            let _this = this;
            if(!this.estate_name.trim() || !this.estate_address.trim()){
                showMsg(this.$store, '请填写完整相关信息！','warning');
                return;
            }
            if(this.estate_note.trim().length>40){
                showMsg(this.$store, '请将备注控制在40字以内！','warning');
                return;
            }
            this.$http.post(base_url+'/lock/modifyEstate', {
                id : this.$route.query.id,
                name : this.estate_name.trim(),
                image : this.estate_image,
                address : this.estate_address.trim(),
                note : this.estate_note.trim(),
                gateways : this.estate_bindgw_selected
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
                //console.log(resData);
                if (resData.code === 0) {
                    // to do
                    showMsg(this.$store, '保存成功！');
                    _this.$router.go({
                        name: 'homeList',
                        query: {
                            id: this.$route.query.id
                        }
                    })
                } else {
                    showMsg(this.$store, resData.msg, 'error')
                }
            }, function(response) {
                showMsg(this.$store, '请求超时！', 'error')
            })
        },
        cancleModifyEstate: function(){
            this.$router.go({
                name: 'homeList',
                query: {
                    id: this.$route.query.id
                }
            })
        }
    }
}
</script>