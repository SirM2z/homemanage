<style>
    .list-box{
        /*padding: 50px 250px 100px;*/
        width: 998px;
        min-width: 998px;
        margin: 0 auto 150px;
        min-height: 78%;
        height: auto !important;
        height: 100%;
    }
    .list-box .info-body{
        margin-top: 20px;
        width: 100%;
        padding: 10px 50px;
        border: 1px solid #e5e5e5;
        border-radius: 3px;
        background-color: #fafafa;
        display: flex;
    }
    .list-box .info-body .body-left{
        flex: 1;
    }
    .list-box .info-body .body-left>div{
        height: 24px;
        line-height: 24px;
    }
    .list-box .info-body .body-btn>button{
        display: block;
    }
    .list-box .info-body .body-btn>button.btn-primary{
        margin-bottom: 10px; 
    }
    .list-box .home-list{
        margin-top: 50px;
    }
    .list-box .table>tbody>tr>td{
        padding: 12px;
    }
    .list-box .table>tbody>tr>td>a{
        cursor: pointer;
    }
    .list-box .modal-ne .delete-bottom {
        padding-top: 30px;
        height: 150px;
    }
    .list-box .modal-ne .delete-bottom .delete-text {
        margin-bottom: 30px;
    }
</style>
<template>
    <nav-list></nav-list>
    <div class="list-box">
        <div class="row info-head">
            <div class="col-md-8">
                <h1 class="head-title fl">
                    {{get_estate_name}}
                </h1>
            </div>
        </div>
        <div class="info-body">
            <div class="body-left">
                <div>房产地址：{{get_estate_address}}</div>
                <div>绑定网关：{{get_estate_gwNames?get_estate_gwNames:'暂无绑定网管'}}</div>
                <div>备注信息：{{get_estate_note}}</div>
            </div>
            <div class="body-btn">
                <button type="button" class="btn btn-primary" @click="goPropertyEdit">修改信息</button>
                <button type="button" class="btn btn-default" @click="showModal">删除信息</button>
            </div>
        </div>
        <table class="table table-striped home-list">
            <tr>
                <th>智能门锁</th>
                <th>门锁状态</th>
                <th>绑定网关</th>
                <th>电量状态</th>
                <th>入住状态</th>
            </tr>
            <tr v-for="item in lock_list" track-by="$index">
                <td><a @click="goHomeInfo(get_estate_name,item.id,item.status,item.power)">{{item.name}}</a></td>
                <td>{{item.status = true?"在线":"离线"}}</td>
                <td>{{item.gw_name}}</td>
                <td>{{item.power}}</td>
                <td>{{item.tenant == 1?"未住":"已住"}}</td>
            </tr>
        </table>
        <Modal>
            <div class="modal-ne">
                <div class="modal-head">删除房产</div>
                <div class="modal-bottom delete-bottom">
                    <p class="delete-text">这将同时删除房产旗下所有门锁的开锁记录与操作记录，是否继续？</p>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="deleteEstate">确认</button>
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
    import {base_url} from '../common.js'
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
                //房产信息
                get_estate_name: '',
                get_estate_address: '',
                //锁列表'
                lock_list: null,
                get_estate_gwNames: '',
                get_estate_note: ''
            }
        },
        ready: function() {
            this.getEstate();
            this.getLockList();
        },
        components: {
            Modal,
            navList,
            foot
        },
        beforeDestroy: function() {

        },
        methods: {
            getEstate: function(){
                let _this = this;
                this.$http.post(base_url+'/lock/getEstate', {
                    id : this.$route.query.id
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData);
                    if (resData.code === 0) {
                        this.get_estate_name = resData.data.name;
                        this.get_estate_address = resData.data.address;
                        this.get_estate_gwNames = resData.data.gwNames;
                        this.get_estate_note = resData.data.note;

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
            getLockList:function(){
                let _this = this;
                this.$http.post(base_url+'/lock/getLockList', {
                    id : this.$route.query.id  
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData.data);
                    if (resData.code === 0) {
                        this.lock_list = resData.data;
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
            deleteEstate: function(){
                let _this = this;
                this.$http.post(base_url+'/lock/delEstate', { 
                        id : this.$route.query.id
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData);
                    if (resData.code === 0) {
                        showMsg(this.$store, "删除成功!");
                        _this.hideModal(_this.$store);
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
            goPropertyEdit: function(){
                this.$router.go({
                    name: 'propertyEdit',
                    query: {
                        id: this.$route.query.id
                    }
                })
            },
            goHomeInfo: function(name,id,status,power){
                if(power == "正常") {
                    power = 1;
                }else {
                    power = 0;
                }
                if(status == "在线") {
                    status = 1;
                }else {
                    status = 0;
                }
                this.$router.go({
                    name: 'homeInfo',
                    query: {
                        estate_name: name,
                        id: id,
                        status: status,
                        power: power
                    }
                })
            }
        }
    }
</script>
