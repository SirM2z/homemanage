<style>
    .home-box {
        padding: 50px 250px 100px;
        min-height: 100%;
        height: auto !important;
        height: 100%;
    }
    
    .home-box .info-head .status-btn {
        margin-top: 20px;
        border: 1px solid #e5e5e5;
        width: 100%;
        border-radius: 50px;
        text-align: center;
        height: 37px;
        line-height: 37px;
    }
    
    .home-box .info-head .lock-status {
        color: #2aa160;
    }
    
    .home-box .info-head .last-num {
        color: #d9736a;
    }
    
    .home-box .info-body {
        margin-top: 20px;
        width: 100%;
        padding: 10px 50px;
        border: 1px solid #e5e5e5;
        border-radius: 3px;
        background-color: #fafafa;
    }
    
    .home-box .info-body .btn-row-dev {
        height: 34px;
        line-height: 34px;
    }
    
    .home-box .table>tbody>tr>td {
        padding: 12px;
    }
    
    .home-box .info-tab {
        margin-top: 30px;
    }
    
    .home-box .info-tab .no-password {
        width: 100%;
    }
    
    .home-box .info-tab .no-password .no-password-btn {
        margin: 50px auto;
        width: 150px;
        border: 1px dashed #e5e5e5;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-radius: 2px;
        color: #0275d8;
        background: #f5f9fc url("../images/addPass.png") 15px no-repeat;
        padding-left: 28px;
    }
    
    .home-box .info-tab .rent-pass-manage .rent-password-btn {
        padding-left: 22px;
    }
    
    .home-box .info-tab .rent-pass-manage .ice-password {
        background: url("../images/icePass.png") center left no-repeat;
    }
    
    .home-box .info-tab .rent-pass-manage .change-password {
        background: url("../images/changePass.png") center left no-repeat;
    }
    
    .home-box .info-tab .rent-pass-manage .delete-password {
        background: url("../images/deletePass.png") center left no-repeat;
    }
    
    .home-box .info-tab .rent-pass-manage .solve-password {
        background: url("../images/solvePass.png") center left no-repeat;
    }
    
    .home-box .info-tab .rent-pass-manage .reset-password {
        background: url("../images/resetPass.png") center left no-repeat;
    }
    
    .home-box .info-tab .rent-pass-manage .no-use {
        color: #b3d5f3;
    }
    
    .home-box .info-tab .ready-pass .no-set {
        color: #9f9f9f;
    }
    
    .home-box .info-tab .page {
        margin-right: 50px;
    }
    
    .home-box .modal-ne .name-title {
        margin-right: 20px;
    }
    
    .home-box .modal-ne .modal-bottom.add-password{
        height: 380px;
    }
    .home-box .modal-ne .another-password,.home-box .modal-ne .change-another-password {
        height: 300px;
    }
    .home-box .modal-ne .btn-code-random {
        margin-left: -80px;
        height: 34px;
    }
   .home-box .modal-ne .admin-password {
       padding-top: 20px;
       border-top: 1px dashed rgba(0, 0, 0, 0.15);
   }
   .home-box .modal-ne .info-edit {
       height: 380px;
   }
   .home-box .btn-code-random:focus, .home-box .btn-code-random:active:focus {
       outline: none;
       outline-offset: -2px;
   }
</style>
<template>
    <nav-list></nav-list>
    <div class="home-box">
        <div class="row info-head">
            <div class="col-md-8">
                <h1 class="head-title fl">
                    中兴和园-茗水元101
                </h1>
            </div>
            <div class="col-md-2">
                <div class="status-btn">门锁状态：<span class="lock-status">在线</span></div>
            </div>
            <div class="col-md-2">
                <div class="status-btn">剩余电量：<span class="last-num">较低</span></div>
            </div>
        </div>
        <div class="info-body">
            <div v-if="tenant===2">
                <div class="row">
                    <div class="col-md-4">租客姓名：{{tenant_name}}</div>
                    <div class="col-md-4">联系方式：{{tenant_phone}}</div>
                </div>
                <div class="row">
                    <div class="col-md-4 btn-row-dev">身份证：{{tenant_IDcard}}</div>
                    <div class="col-md-4 btn-row-dev">合同到期时间：{{tenant_time}}</div>
                    <div class="col-md-4"><button type="button" class="btn btn-primary fr" @click="changeModalType('set_tenant')">修改信息</button></div>
                </div>
                <div class="row">
                    <div class="col-md-3">入住情况：已入住</div>
                </div>
            </div>
            <div v-else>
                <div class="row">
                    <div class="col-md-6 btn-row-dev">尚未入住</div>
                    <div class="col-md-6"><button type="button" class="btn btn-primary fr" @click="changeModalType('set_tenant')">添加租客</button></div>
                </div>
            </div>
        </div>
        <div class="info-tab">
            <tabs>
                <tab header="设备信息">
                    <table class="table table-striped">
                        <tr>
                            <td>绑定时间</td>
                            <td>{{get_LI_bindtime}}</td>
                        </tr>
                        <tr>
                            <td>更新时间</td>
                            <td>{{get_LI_update_time}}</td>
                        </tr>
                        <tr>
                            <td>网关MAC地址</td>
                            <td>{{get_LI_gw_mac}}</td>
                        </tr>
                        <tr>
                            <td>门锁MAC地址</td>
                            <td>{{get_LI_lock_mac}}</td>
                        </tr>
                        <tr>
                            <td>当前网关版本号</td>
                            <td>{{get_LI_gw_ver}}</td>
                        </tr>
                        <tr>
                            <td>最新网关版本号</td>
                            <td>{{get_LI_last_ver}}</td>
                        </tr>
                        <tr>
                            <td>Zigbee版本号</td>
                            <td>{{get_LI_zb_ver}}</td>
                        </tr>
                        <tr>
                            <td>供应商</td>
                            <td>杭州权石科技有限公司</td>
                        </tr>
                    </table>
                </tab>
                <tab-group header="密码管理">
                    <tab header="租客密码管理">
                        <div v-if="no_TC" class="no-password">
                            <div class="no-password-btn" @click="changeModalType('add_tenant_code')">添加租客密码</div>
                        </div>
                        <table v-else class="table table-striped rent-pass-manage">
                            <tr v-if="get_TC_freeze==true">
                                <td class="blue">{{get_TC_name}}</td>
                                <td>{{get_TC_time}}</td>
                                <td class="blue rent-password-btn ice-password" @click="changeModalType('freeze_tenant_code')">冻结密码</td>
                                <td class="blue rent-password-btn  change-password" @click="changeModalType('modify_tenant_code')">修改密码</td>
                                <td class="blue rent-password-btn  delete-password" @click="changeModalType('del_tenant_code')">删除密码</td>
                            </tr>
                            <tr v-else>
                                <td class="no-use">{{get_TC_name}}</td>
                                <td class="color_999">{{get_TC_time}}</td>
                                <td class="blue rent-password-btn solve-password" @click="changeModalType('thaw_tenant_code')">解冻密码</td>
                                <td class="blue rent-password-btn  reset-password" @click="changeModalType('modify_tenant_code')">重置密码</td>
                                <td></td>
                            </tr>
                        </table>
                    </tab>
                    <tab header="备用密码管理">
                        <table class="table table-striped ready-pass">
                            <tr>
                                <td>001</td>
                                <td>备用密码001</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>002</td>
                                <td>备用密码001</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>003</td>
                                <td>备用密码001</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr class="no-set">
                                <td>004</td>
                                <td>无</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr class="no-set">
                                <td>005</td>
                                <td>无</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>006</td>
                                <td>备用密码001</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>007</td>
                                <td>备用密码001</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>008</td>
                                <td>备用密码001</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                        <div class="page">
                            <div class="fr">
                                <button type="button" class="btn btn-primary">1</button>
                                <button type="button" class="btn btn-primary">2</button>
                            </div>
                        </div>
                    </tab>
                </tab-group>
                <tab header="开锁记录">
                    <table class="table table-striped">
                        <tr>
                            <th>2016-09-24</th>
                        </tr>
                        <tr>
                            <td>09:34 租客密码添加成功</td>
                        </tr>
                        <tr>
                            <td>09:50 租客密码已解冻</td>
                        </tr>
                        <tr>
                            <th>2016-09-23</th>
                        </tr>
                        <tr>
                            <td>09:34 租客密码添加成功</td>
                        </tr>
                        <tr>
                            <th>2016-09-20</th>
                        </tr>
                        <tr>
                            <td>09:34 租客密码添加成功</td>
                        </tr>
                        <tr>
                            <td>09:50 租客密码已解冻</td>
                        </tr>
                    </table>
                </tab>
                <tab header="操作记录">
                    <table class="table table-striped">
                        <tr>
                            <th>2016-09-24</th>
                        </tr>
                        <tr>
                            <td>09:34 租客密码添加成功</td>
                        </tr>
                        <tr>
                            <td>09:50 租客密码已解冻</td>
                        </tr>
                        <tr>
                            <th>2016-09-23</th>
                        </tr>
                        <tr>
                            <td>09:34 租客密码添加成功</td>
                        </tr>
                        <tr>
                            <th>2016-09-20</th>
                        </tr>
                        <tr>
                            <td>09:34 租客密码添加成功</td>
                        </tr>
                        <tr>
                            <td>09:50 租客密码已解冻</td>
                        </tr>
                    </table>
                </tab>
            </tabs>
        </div>
        <Modal>
            <!--租客信息修改-->
            <div class="modal-ne" v-show="modal_type==='set_tenant'">
                <div class="modal-head">租客信息修改</div>
                <div class="modal-bottom info-edit">
                    <div class="modal-item">
                        <div class="fl item-title name-title">入住情况</div>
                        <div class="fl">
                            <select v-model="set_tenant_select" class="form-control">
                                <option value="0" selected="selected">未入住</option>
                                <option value="1">已入住</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">租客姓名</div>
                        <div class="fl"><input type="text" v-model="set_tenant_name" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">联系方式</div>
                        <div class="fl"><input type="text" v-model="set_tenant_phone" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">身份证号</div>
                        <div class="fl"><input type="text" v-model="set_tenant_IDcard" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">合同到期时间</div>
                        <div class="fl"><input type="text" v-model="set_tenant_time" class="form-control"></div>
                    </div>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="setTenant">确认</button>
                </div>
            </div>
            <!--添加租客密码-->
            <div class="modal-ne"  v-show="modal_type==='add_tenant_code'">
                <div class="modal-head">添加租客密码</div>
                <div class="modal-bottom add-password">
                    <div class="modal-item">
                        <div class="fl item-title name-title">密码备注名</div>
                        <div class="fl"><input type="text" v-model="add_TC_name" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入租客密码</div>
                        <div class="fl">
                            <input type="password" v-model="add_TC_password" class="form-control fl" placeholder="请输入4~16位数字密码">
                            <button class="btn btn-link btn-code-random">随机生成</button>
                        </div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">失效时间</div>
                        <div class="fl"><input type="text" v-model="add_TC_endtime" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">失效次数</div>
                        <div class="fl">
                            <select type="text" v-model="add_TC_opentime" class="form-control">
                                <option value="one">单次失效</option>
                                <option value="long">永久有效</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-item admin-password">
                        <div class="fl item-title name-title">验证管理员密码</div>
                        <div class="fl"><input type="password" v-model="add_TC_code" class="form-control"></div>
                    </div>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="addTenantCode">确认</button>
                </div>
            </div>
            <!--修改租客密码-->
            <div class="modal-ne"  v-show="modal_type==='modify_tenant_code'">
                <div class="modal-head">修改租客密码</div>
                <div class="modal-bottom add-password">
                    <div class="modal-item">
                        <div class="fl item-title name-title">密码备注名</div>
                        <div class="fl"><input type="text" v-model="modify_TC_name" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入租客密码</div>
                        <div class="fl">
                            <input type="password" v-model="modify_TC_password" class="form-control fl" placeholder="请输入4~16位数字密码">
                            <button class="btn btn-link btn-count">随机生成</button>
                        </div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">失效时间</div>
                        <div class="fl"><input type="text" v-model="modify_TC_endtime" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">失效次数</div>
                        <div class="fl">
                            <select type="text" v-model="modify_TC_opentime" class="form-control">
                                <option value="one">单次失效</option>
                                <option value="long">永久有效</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-item admin-password">
                        <div class="fl item-title name-title">验证管理员密码</div>
                        <div class="fl"><input type="password" v-model="modify_TC_code" class="form-control"></div>
                    </div>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="modifyTenantCode">确认</button>
                </div>
            </div>
            <!--冻结密码-->
            <div class="modal-ne" v-show="modal_type==='freeze_tenant_code'">
                <div class="modal-head">冻结密码</div>
                <div class="modal-bottom">
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入管理员密码</div>
                        <div class="fl"><input type="password" v-model="freeze_TC_code" class="form-control" placeholder="输入4~16位密码"></div>
                    </div>
                    <p>冻结密码后，租客将无法使用该密码进行开锁。</p>
                    <p>是否继续冻结密码？</p>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="freezeTenantCode">确认</button>
                </div>
            </div>
            <!--解冻密码-->
            <div class="modal-ne" v-show="modal_type==='thaw_tenant_code'">
                <div class="modal-head">解冻密码</div>
                <div class="modal-bottom">
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入管理员密码</div>
                        <div class="fl"><input type="password" v-model="thaw_TC_code" class="form-control" placeholder="输入4~16位密码"></div>
                    </div>
                    <p>解冻密码后，租客将可以使用该密码进行开锁。</p>
                    <p>是否继续解冻密码？</p>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="thawTenantCode">确认</button>
                </div>
            </div>
            <!--删除密码-->
            <div class="modal-ne" v-show="modal_type==='del_tenant_code'">
                <div class="modal-head">删除密码</div>
                <div class="modal-bottom">
                    <p>删除密码后，租客将无法使用该密码进行开锁。</p>
                    <p>是否继续删除密码？</p>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="delTenantCode">确认</button>
                </div>
            </div>
            <!--身份验证-->
            <div class="modal-ne"  v-show="modal_type==='verifi'">
                <div class="modal-head">身份验证</div>
                <div class="modal-bottom check-password">
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入原有密码</div>
                        <div class="fl"><input type="password" class="form-control" placeholder="输入4~16位密码"></div>
                    </div>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="hideModal">下一步</button>
                </div>
            </div>
            <!--添加备用密码-->
            <div class="modal-ne"  v-show="modal_type==='add_code'">
                <div class="modal-head">添加备用密码</div>
                <div class="modal-bottom another-password">
                    <div class="modal-item">
                        <div class="fl item-title name-title">密码备注名</div>
                        <div class="fl"><input type="text" v-model="add_code_name" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入新租客密码</div>
                        <div class="fl">
                            <input type="password" v-model="add_code_password" class="form-control fl" placeholder="请输入4~16位数字密码">
                        </div>
                    </div>
                    <div class="modal-item admin-password">
                        <div class="fl item-title name-title">验证管理员密码</div>
                        <div class="fl"><input type="password" v-model="add_code_code" class="form-control"></div>
                    </div>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="addCode">确认</button>
                </div>
            </div>
            <!--修改备用密码-->
            <div class="modal-ne"  v-show="modal_type==='modify_code'">
                <div class="modal-head">修改备用密码</div>
                <div class="modal-bottom change-another-password">
                    <div class="modal-item">
                        <div class="fl item-title name-title">密码备注名</div>
                        <div class="fl"><input type="text" v-model="modify_code_name" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入新租客密码</div>
                        <div class="fl">
                            <input type="password" v-model="modify_code_password" class="form-control fl" placeholder="请输入4~16位数字密码">
                        </div>
                    </div>
                    <div class="modal-item admin-password">
                        <div class="fl item-title name-title">验证管理员密码</div>
                        <div class="fl"><input type="password" v-model="modify_code_code" class="form-control"></div>
                    </div>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="modifyCode">确认</button>
                </div>
            </div>
        </Modal>
    </div>
    <div v-for="item in list">
        <tr v-if="item.time.split(' ')[0]!=lastTime">
            <th>{{abc(item)}}</th>
        </tr>
        <tr>
            <td>09:34 租客密码添加成功</td>
        </tr>
        <tr>
            <td>09:50 租客密码已解冻</td>
        </tr>
    </div>
    <foot></foot>
</template>
<script>
    import navList from '../components/comon/navList.vue'
    import Modal from '../components/popup/Modal.vue'
    import {showModal, hideModal, showLoading, showMsg} from '../vuex/actions/popupActions'
    import foot from '../components/comon/foot.vue'
	import { tabset,tab,tabGroup } from 'vue-strap'
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
                //租客信息
                tenant: 2,
                tenant_name: '哈哈哈哈',
                tenant_phone: '18888888888',
                tenant_IDcard: '420745699852145632',
                tenant_time: '2016年9月12日到期',
                //设备信息
                get_LI_bindtime: '',
                get_LI_update_time: '',
                get_LI_gw_mac: '',
                get_LI_lock_mac: '',
                get_LI_gw_ver: '',
                get_LI_last_ver: '',
                get_LI_zb_ver: '',
                //租客密码
                no_TC: false,
                get_TC_freeze: false,
                get_TC_name: '茗水苑 101 租客密码',
                get_TC_time: '"2016-09-19 08:08:08',
                modal_type: '',
                set_tenant_select: '',
                set_tenant_name: '',
                set_tenant_phone: '',
                set_tenant_IDcard: '',
                set_tenant_time: '',
                add_TC_name: '',
                add_TC_password: '',
                add_TC_endtime: '',
                add_TC_opentime: '',
                add_TC_code: '',
                modify_TC_name: '',
                modify_TC_password: '',
                modify_TC_endtime: '',
                modify_TC_opentime: '',
                modify_TC_code: '',
                freeze_TC_code: '',
                thaw_TC_code: '',
                add_code_name: '',
                add_code_password: '',
                add_code_code: '',
                modify_code_name: '',
                modify_code_password: '',
                modify_code_code: '',
                //上一个时间
                lastTime: 0
            }
        },
        computed: {
            // 一个计算属性的 getter
            abc: function (item) {
            // `this` 指向 vm 实例
                this.lastTime = item.time.split(' ')[0];
                return item.time.split(' ')[0];
            }
        },
        ready: function() {
            this.getLockTenant();
            this.getLockInfo();
            this.getTenantCode();
            this.getCode();
            this.getLockopen();
            this.getOperation();
        },
        components: {
            Modal,
            navList,
            foot,
            tabs:tabset,
            tab,
            tabGroup
        },
        beforeDestroy: function() {

        },
        methods: {
            changeModalType:function(type){
                this.modal_type = type;
                console.log(this.modal_type);
                this.showModal();
            },
            getLockTenant: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/getLockTenant', {
                    id : '123'
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！');
                        return
                    }
                    let resData = response.json();
                    console.log(resData);
                    if (resData.code === 0) {
                        this.tenant = resData.data.tenant;
                        this.tenant_name = resData.data.name;
                        this.tenant_phone = resData.data.phone;
                        this.tenant_IDcard = resData.data.IDcard;
                        this.tenant_time = resData.data.time;
                    } else {
                        showMsg(this.$store, resData.msg)
                    }
                }, function(response) {
                    showMsg(this.$store, '请求超时！')
                })
            },
            getLockInfo: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/getLockInfo', {
                    id : '123'
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！');
                        return
                    }
                    let resData = response.json();
                    console.log(resData);
                    if (resData.code === 0) {
                        // to do
                        this.get_LI_bindtime = resData.data.bindtime;
                        this.get_LI_update_time = resData.data.update_time;
                        this.get_LI_gw_mac = resData.data.gw_mac;
                        this.get_LI_lock_mac = resData.data. lock_mac;
                        this.get_LI_gw_ver = resData.data.gw_ver;
                        this.get_LI_last_ver = resData.data.last_ver;
                        this.get_LI_zb_ver = resData.data.zb_ver;
                    } else {
                        showMsg(this.$store, resData.msg)
                    }
                }, function(response) {
                    showMsg(this.$store, '请求超时！')
                })
            },
            getTenantCode: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/getTenantCode', {
                    id : '123'
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！');
                        return
                    }
                    let resData = response.json();
                    console.log(resData);
                    if (resData.code === 0) {
                        // to do
                        if(!resData.data){
                            this.no_TC = true;
                        }else{
                            this.get_TC_freeze = resData.data.freeze;
                            this.get_TC_name = resData.data.name;
                            this.get_TC_time = resData.data.time;
                        }
                    } else {
                        showMsg(this.$store, resData.msg)
                    }
                }, function(response) {
                    showMsg(this.$store, '请求超时！')
                })
            },
            getCode: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/getCode', {
                    id : '123'
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
            getLockopen: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/getLockopen', {
                    id : '123',
                    quantity : 20,
                    index : 0
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
            getOperation: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/getOperation', {
                    id : '123',
                    quantity : 20,
                    index : 0
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
            setTenant: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/getOperation', {
                    id : '123',
                    tenant : this.set_tenant_select,
                    name : this.set_tenant_name,
                    phone : this.set_tenant_phone,
                    IDcard : this.set_tenant_IDcard,
                    time : this.set_tenant_time
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
            addTenantCode: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/addTenantCode', {
                    id : '123',
                    password : this.add_TC_password,
                    name : this.add_TC_name,
                    endTime : this.add_TC_endtime,
                    openTime : this.add_TC_opentime,
                    code : this.add_TC_code
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
            modifyTenantCode: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/modifyTenantCode', {
                    id : '123',
                    password : this.modify_TC_password,
                    name : this.modify_TC_name,
                    endTime : this.modify_TC_endtime,
                    openTime : this.modify_TC_opentime,
                    code : this.modify_TC_code
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
            freezeTenantCode: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/freezeTenantCode', {
                    id : '123',
                    code : this.freeze_TC_code
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
            thawTenantCode: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/thawTenantCode', {
                    id : '123',
                    code : this.thaw_TC_code
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
            delTenantCode: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/delTenantCode', {
                    id : '123',
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
            modifyTenantCodeName: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/modifyTenantCodeName', {
                    id : '123',
                    name : ''
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
            addCode: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/addCode', {
                    id : '123',
                    password : this.add_code_password,
                    name : this.add_code_name,
                    index : '',
                    code : this.add_code_code
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
            modifyCode: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/modifyCode', {
                    id : '123',
                    password : this.modify_code_password,
                    name : this.modify_code_password,
                    code : this.modify_code_password
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
            delCode: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/delCode', {
                    id : '123',
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
            modifyCodeName: function(){
                // this.$route.query.id
                this.$http.post(base_url+'/lock/modifyCodeName', {
                    id : '123',
                    name : ''
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