<style>
    .propertyadd-box {
        /*padding: 50px 250px 100px;*/
        width: 998px;
        min-width: 998px;
        margin: 0 auto 150px;
        min-height: 78%;
        height: auto !important;
        height: 100%;
    }
    
    .propertyadd-box button {
        margin-right: 10px;
        width: 150px;
    }
    
    .propertyadd-box .propertyadd-info .info-item {
        overflow: hidden;
        padding: 15px;
    }
    
    .propertyadd-box .propertyadd-info .info-item.wg-item {
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
    
    .propertyadd-box .propertyadd-info .info-item .name-title.wg-title {
        line-height: 65px;
    }
    
    .propertyadd-box .propertyadd-info .item-title {
        margin-right: 25px;
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
    
    .propertyadd-box .info-head {
        margin-bottom: 35px;
    }
    
    .propertyadd-box .pass-btn {
        margin-top: 20px;
    }
    
    .propertyadd-box .btn-s,
    .propertyadd-box .btn-c {
        margin-right: 16px;
        width: 100px;
    }
</style>
<template>
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
                <div class="fl"><input type="text" v-model="name" class="form-control" id="name"></div>
            </div>
            <div class="info-item">
                <div class="fl item-title">房产图片：</div>
                <div class="fl"><input type="file" accept="image/*" @change="uploadFile" /></div>
            </div>
            <div class="info-item">
                <div class="fl item-title name-title">房产地址：</div>
                <div class="fl"><input type="text" v-model="address" class="form-control item-address" id="name"></div>
            </div>
            <div class="info-item wg-item">
                <div class="fl item-title name-title wg-title">网关绑定：</div>
                <div class="fl">
                    <div class="wg-options">
                        <select v-for="n in gatewayListSelectNum" track-by="$index" v-model="gatewayListSelected[n]" class="form-control wg-option">
                            <option value="0" selected="selected">请选择</option>
                            <option v-for="item in gatewayList" track-by="$index" :value="item.id">{{item.name}}</option>
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
                    <textarea v-model="note" class="form-control" cols="80" rows="3"></textarea>
                </div>
            </div>
            <div class="info-item pass-btn">
                <button @click="addEstate" class="btn btn-primary btn-lg btn-s blue-btn">保存</button>
                <button @click="cancleAddEstate" class="btn btn-default btn-lg btn-c">取消</button>
            </div>
        </div>
    </div>
    <foot></foot>
</template>
<script>
import foot from '../components/comon/foot.vue'
import {showMsg, showLoading, hideLoading} from '../vuex/actions/popupActions'
import {base_url} from '../common.js'
export default {
    vuex: {
        getters: {
        },
        actions: {
            showMsg,
            showLoading,
            hideLoading
        }
    },
    data: function() {
        return {
            file: null,
            imgurl: '',
            gatewayListSelectNum : 1,
            gatewayList : null,
            gatewayListSelected : [],
            name : '',
            address : '',
            note : '',
            gateways : ''
        }
    },
    ready: function() {
        this.getGatewayList();
    },
    components: {
        foot
    },
    beforeDestroy: function() {

    },
    methods: {
        getGatewayList: function(){
            let _this =this;
            this.$http.post(base_url+'/lock/getGatewayList').then(function(response) {
                if (!response.ok) {
                    showMsg(this.$store, '请求超时！', 'error');
                    return
                }
                let resData = response.json();
                //console.log(resData);
                if (resData.code === 0) {
                    //TO DO
                    this.gatewayList = resData.data;
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
        uploadFile: function(e){
            let formdata = new FormData();  
            this.file = e.target.files[0];
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
                console.log(resData);
                if (resData.code === 0) {
                    //TO DO
                    this.imgurl = resData.data;
                } else {
                    showMsg(this.$store, resData.msg, 'error')
                }
            }, function(response) {
                showMsg(this.$store, '请求超时！', 'error')
            })
        },
        addSelect: function(){
            let length = this.gatewayList?this.gatewayList.length:1;
            if(this.gatewayListSelectNum == length){
                showMsg(this.$store, '不能再添加网关绑定的个数', 'warning')
                return;
            }
            this.gatewayListSelectNum++;
        },
        addEstate: function(){
            let _this = this;
            //console.log(this.gatewayListSelected);
            if(!this.name.trim() || !this.address.trim()){
                showMsg(this.$store, '请填写完整相关信息！','warning');
                return;
            }
            if(this.note.trim().length>40){
                showMsg(this.$store, '请将备注控制在40字以内！','warning');
                return;
            }
            showLoading(this.$store);
            this.$http.post(base_url+'/lock/addEstate', {
                name : this.name.trim(),
                address : this.address.trim(),
                image  : this.imgurl,
                note : this.note.trim(),
                gateways : this.gatewayListSelected
            }).then(function(response) {
                hideLoading(this.$store);
                if (!response.ok) {
                    showMsg(this.$store, '请求超时！', 'error');
                    return
                }
                let resData = response.json();
                // console.log(resData);
                if (resData.code === 0) {
                    //TO DO
                    showMsg(this.$store, '添加成功');
                    _this.$router.go({
                        name: 'index'
                    })
                } else {
                    showMsg(this.$store, resData.msg, 'error')
                }
            }, function(response) {
                showMsg(this.$store, '请求超时！', 'error')
            })
        },
        cancleAddEstate: function(){
            this.$router.go({
                name: 'index'
            })
        }
    }
}
</script>