<style>
    .index-box {
        padding: 50px 250px 100px;
        min-height: 100%;
        height: auto !important;
        height: 100%;
    }
    
    .index-box .fc-items {
        /*display: flex;*/
        padding: 0 50px;
        margin-top: 20px;
        width: 100%;
        overflow: hidden;
    }
    
    .index-box .fc-item {
        overflow: hidden;
        width: 100%;
    }
    
    .index-box .fc-info {
        /*flex: 1;*/
        float: left;
        margin-bottom: 20px;
        width: 33%;
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
            <div v-for="item in estateList" class="fc-info">
                <div class="fc-item" @click="goHomeList(item.id)">
                    <img src="http://lockmgmt.pstone.cc:8080/img/{{item.image}}">
                    <p class="fc-name">{{item.name}}</p>
                    <p>共<span>{{item.lockNum}}</span>间房，已入住<span>{{item.tenant}}</span>间房</p>
                </div>
            </div>
            <div class="fc-info">
                <div class="add-info">
                    <div class="add-fc" @click="goAddEstate">
                        <img src="../images/addinfo.png">
                        <p>点击添加房产</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <foot></foot>
</template>
<script>
    import navList from '../components/comon/navList.vue'
    import foot from '../components/comon/foot.vue'
    import {showMsg, showLoading, hideLoading} from '../vuex/actions/popupActions'
    import {base_url,img_url} from '../common.js'
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
                estateList: null
            }
        },
        ready: function() {
            this.getEstateList();
        },
        components: {
            navList,
            foot
        },
        beforeDestroy: function() {
        },
        computed: {
            getImgurl: function (img) {
                console.log(img);
                console.log(img_url);
                return img_url + img
            }
        },
        methods: {
            getEstateList: function(){
                showLoading(this.$store);
                this.$http.post(base_url+'/lock/getEstateList').then(function(response) {
                    hideLoading(this.$store);
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！');
                        return
                    }
                    let resData = response.json();
                    // console.log(resData);
                    if (resData.code === 0) {
                        // this.getUserInfo({},this.$router);
                        this.estateList = resData.data;
                    } else {
                        showMsg(this.$store, resData.msg)
                    }
                }, function(response) {
                    hideLoading(this.$store);
                    showMsg(this.$store, '请求超时！')
                })
            },
            goAddEstate: function(){
                this.$router.go({name: 'propertyAdd'})
            },
            goHomeList: function(id){
                this.$router.go({
                    name: 'homeList',
                    query: {
                        id: id
                    }
                })
            }
        }
    }
</script>