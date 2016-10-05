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
    .home-box .modal-ne .check-password,.home-box .modal-ne .freeze-password{
        height: 200px;
    }
    .home-box .modal-ne .another-password,.home-box .modal-ne .change-another-password {
        height: 300px;
    }
    .home-box .modal-ne .btn-count {
        margin-left: -80px;
        height: 34px;
    }
   .home-box .modal-ne .admin-password {
       padding-top: 20px;
       border-top: 1px dashed rgba(0, 0, 0, 0.15);
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
            <div>
                <div class="row">
                    <div class="col-md-4">租客姓名：哈哈哈</div>
                    <div class="col-md-4">联系方式：18888888888</div>
                </div>
                <div class="row">
                    <div class="col-md-4 btn-row-dev">身份证：420745699852145632</div>
                    <div class="col-md-4 btn-row-dev">合同到期时间：2016年9月12日到期</div>
                    <div class="col-md-4"><button type="button" class="btn btn-primary fr" @click="showModal">修改信息</button></div>
                </div>
                <div class="row">
                    <div class="col-md-3">入住情况：已入住</div>
                </div>
            </div>
            <div>
                <div class="row">
                    <div class="col-md-6 btn-row-dev">尚未入住</div>
                    <div class="col-md-6"><button type="button" class="btn btn-primary fr">添加租客</button></div>
                </div>
            </div>
        </div>
        <div class="info-tab">
            <tabs>
                <tab header="设备信息">
                    <table class="table table-striped">
                        <tr>
                            <td>绑定时间</td>
                            <td>2016.09.12</td>
                        </tr>
                        <tr>
                            <td>更新时间</td>
                            <td>2016.09.12</td>
                        </tr>
                        <tr>
                            <td>网关MAC地址</td>
                            <td>00.01.6C.A6.29</td>
                        </tr>
                        <tr>
                            <td>门锁MAC地址</td>
                            <td>00.01.6C.A6.29</td>
                        </tr>
                        <tr>
                            <td>当前网关版本号</td>
                            <td>0.6.0.12</td>
                        </tr>
                        <tr>
                            <td>最新网关版本号</td>
                            <td>0.6.0.22</td>
                        </tr>
                        <tr>
                            <td>Zigbee版本号</td>
                            <td>0.6.0.22</td>
                        </tr>
                        <tr>
                            <td>供应商</td>
                            <td>杭州权石科技有限公司</td>
                        </tr>
                    </table>
                </tab>
                <tab-group header="密码管理">
                    <tab header="租客密码管理">
                        <div class="no-password">
                            <div class="no-password-btn" @click="showModal">添加租客密码</div>
                        </div>
                        <table class="table table-striped rent-pass-manage">
                            <tr>
                                <td class="blue">明水原101租客密码</td>
                                <td>2016.09.23 16:00失效</td>
                                <td class="blue rent-password-btn ice-password" @click="showModal">冻结密码</td>
                                <td class="blue rent-password-btn  change-password">修改密码</td>
                                <td class="blue rent-password-btn  delete-password">删除密码</td>
                            </tr>
                            <tr>
                                <td class="no-use">明水原101租客密码</td>
                                <td class="color_999">2016.09.23 16:00失效</td>
                                <td class="blue rent-password-btn solve-password">解冻密码</td>
                                <td class="blue rent-password-btn  reset-password">重置密码</td>
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
        <!--<Modal>
            <div class="modal-ne">
                <div class="modal-head">租客信息修改</div>
                <div class="modal-bottom">
                    <div class="modal-item">
                        <div class="fl item-title name-title">入住情况</div>
                        <div class="fl">
                            <select type="text" class="form-control">
                                <option value="no">未入住</option>
                                <option value="in">已入住</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">租客姓名</div>
                        <div class="fl"><input type="text" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">联系方式</div>
                        <div class="fl"><input type="text" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">身份证号</div>
                        <div class="fl"><input type="text" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">合同到期时间</div>
                        <div class="fl"><input type="text" class="form-control"></div>
                    </div>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="hideModal">确认</button>
                </div>
            </div>
        </Modal>-->
        <!--<Modal>
            <div class="modal-ne">
                <div class="modal-head">添加租客密码</div>
                <div class="modal-bottom add-password">
                    <div class="modal-item">
                        <div class="fl item-title name-title">密码备注名</div>
                        <div class="fl"><input type="text" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入租客密码</div>
                        <div class="fl">
                            <input type="password" class="form-control fl" placeholder="请输入4~16位数字密码">
                            <button class="btn btn-link btn-count">随机生成</button>
                        </div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">失效时间</div>
                        <div class="fl"><input type="text" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">失效次数</div>
                        <div class="fl">
                            <select type="text" class="form-control">
                                <option value="one">单次失效</option>
                                <option value="long">永久有效</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-item admin-password">
                        <div class="fl item-title name-title">验证管理员密码</div>
                        <div class="fl"><input type="password" class="form-control"></div>
                    </div>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="hideModal">确认</button>
                </div>
            </div>
        </Modal>-->
        <!--<Modal>
            <div class="modal-ne">
                <div class="modal-head">冻结密码</div>
                <div class="modal-bottom freeze-password">
                    <p>冻结密码后，租客将无法使用该密码进行开锁。</p>
                    <p>是否继续冻结密码？</p>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="hideModal">确认</button>
                </div>
            </div>
        </Modal>-->
        <!--<Modal>
            <div class="modal-ne">
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
        </Modal>-->
        <!--<Modal>
            <div class="modal-ne">
                <div class="modal-head">添加备用密码</div>
                <div class="modal-bottom another-password">
                    <div class="modal-item">
                        <div class="fl item-title name-title">密码备注名</div>
                        <div class="fl"><input type="text" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入新租客密码</div>
                        <div class="fl">
                            <input type="password" class="form-control fl" placeholder="请输入4~16位数字密码">
                        </div>
                    </div>
                    <div class="modal-item admin-password">
                        <div class="fl item-title name-title">验证管理员密码</div>
                        <div class="fl"><input type="password" class="form-control"></div>
                    </div>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="hideModal">确认</button>
                </div>
            </div>
        </Modal>-->
        <Modal>
            <div class="modal-ne">
                <div class="modal-head">修改备用密码</div>
                <div class="modal-bottom change-another-password">
                    <div class="modal-item">
                        <div class="fl item-title name-title">密码备注名</div>
                        <div class="fl"><input type="text" class="form-control"></div>
                    </div>
                    <div class="modal-item">
                        <div class="fl item-title name-title">输入新租客密码</div>
                        <div class="fl">
                            <input type="password" class="form-control fl" placeholder="请输入4~16位数字密码">
                        </div>
                    </div>
                    <div class="modal-item admin-password">
                        <div class="fl item-title name-title">验证管理员密码</div>
                        <div class="fl"><input type="password" class="form-control"></div>
                    </div>
                    <button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
                    <button class="btn btn-primary btn-confirm" @click="hideModal">确认</button>
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
	import { tabset,tab,tabGroup } from 'vue-strap'

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
            }
        },
        ready: function() {
            
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
            
        }
    }
</script>