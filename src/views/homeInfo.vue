<style>
	.home-box {
		/*padding: 50px 250px 100px;*/
        width: 998px;
        min-width: 998px;
        margin: 0 auto 150px;
        min-height: 78%;
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
		margin: 30px 0;
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
		cursor: pointer;
	}
	
	.home-box .info-tab .rent-pass-manage .ice-password {
		background: url("../images/icePass.png") center left no-repeat;
	}

	.home-box .info-tab .rent-pass-manage .rene-password {
		background: url("../images/renePass.png") center left no-repeat;
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
	
	.home-box .info-tab .ready-pass {
		cursor: pointer;
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
	
	.home-box .modal-ne .modal-bottom.add-password {
		height: 380px;
	}
	
	.home-box .modal-ne .another-password,
	.home-box .modal-ne .change-another-password {
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
	
	.home-box .btn-code-random:focus,
	.home-box .btn-code-random:active:focus {
		outline: none;
		outline-offset: -2px;
	}
	
	.home-box .operation-day {
		padding: 20px 0;
		border-bottom: solid 1px rgba(0, 0, 0, 0.1);
	}
	
	.home-box .operation-time {
		padding: 15px 0;
		margin-left: 25px;
		box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
	}
	
	.home-box .btn-more {
		margin: 15px;
	}
	
	.home-box .bycode-btn {
		position: relative;
	}
	
	.home-box .bycode-btn>div {
		position: absolute;
		width: 100px;
		color: #0275d8;
		padding-left: 28px;
	}
	
	.home-box .bycode-btn>div.bycode-change {
		right: 80%;
		background: url("../images/changePass.png") center left no-repeat;
	}
	
	.home-box .bycode-btn>div.bycode-del {
		right: 50%;
		background: url("../images/deletePass.png") center left no-repeat;
	}
	
	.home-box .bycode-btn>div.bycode-add {
		right: 100%;
		background: url("../images/addPWD.png") center left no-repeat;
	}
    .home-box .modal-ne .modal-item input.TC-input{
        background-color: #fff;
        width: 219px;
    }
</style>
<template>
	<nav-list></nav-list>
	<div class="home-box">
		<div class="row info-head">
			<div class="col-md-8">
				<h1 class="head-title fl">
					{{estate_name}}-{{get_LI.name}}
				</h1>
			</div>
			<div class="col-md-2">
				<div class="status-btn">门锁状态：<span class="lock-status">{{lock_status==1?"在线":"离线"}}</span></div>
			</div>
			<div class="col-md-2">
				<div class="status-btn">剩余电量：<span class="last-num">{{lock_power==1?"正常":"低电量"}}</span></div>
			</div>
		</div>
		<div class="info-body">
			<div v-if="tenant_data==null">
				<div class="row">
					<div class="col-md-6 btn-row-dev">尚未入住</div>
					<div class="col-md-6"><button type="button" class="btn btn-primary fr" @click="changeModalType('set_tenant','add')">添加租客</button></div>
				</div>
			</div>
			<div v-else>
				<div class="row">
					<div class="col-md-4">租客姓名：{{tenant_data.name}}</div>
					<div class="col-md-4">联系方式：{{tenant_data.phone}}</div>
				</div>
				<div class="row">
					<div class="col-md-4 btn-row-dev">身份证：{{tenant_data.IDcard}}</div>
					<div class="col-md-4 btn-row-dev">合同到期时间：{{tenant_data.time}}</div>
					<div class="col-md-4"><button type="button" class="btn btn-primary fr" @click="changeModalType('set_tenant','change')">修改信息</button></div>
				</div>
				<div class="row">
					<div class="col-md-3">入住情况：{{tenant_data.status==1?"未入住":"已入住"}}</div>
				</div>
			</div>
		</div>
		<div class="info-tab">
			<tabs>
				<tab header="设备信息">
					<table class="table table-striped">
						<tr>
							<td>绑定时间</td>
							<td>{{get_LI.bindtime}}</td>
						</tr>
						<tr>
							<td>更新时间</td>
							<td>{{get_LI.update_time}}</td>
						</tr>
						<tr>
							<td>网关MAC地址</td>
							<td>{{get_LI.gw_mac}}</td>
						</tr>
						<tr>
							<td>门锁MAC地址</td>
							<td>{{get_LI.lock_mac}}</td>
						</tr>
						<tr>
							<td>当前网关版本号</td>
							<td>{{get_LI.gw_ver}}</td>
						</tr>
						<tr>
							<td>最新网关版本号</td>
							<td>{{get_LI.last_ver}}</td>
						</tr>
						<tr>
							<td>Zigbee版本号</td>
							<td>{{get_LI.zb_ver}}</td>
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
							<tr v-if="get_TC.freeze==false">
								<td class="blue">{{get_TC.name}}</td>
								<td>{{get_TC.time}}</td>
								<td class="blue rent-password-btn ice-password" @click="changeModalType('freeze_tenant_code')">冻结密码</td>
								<td class="blue rent-password-btn  rene-password" @click="changeModalType('rene_tenant_code')">续租密码</td>
								<td class="blue rent-password-btn  change-password" @click="changeModalType('modify_tenant_code')">重置密码</td>
								<td class="blue rent-password-btn  delete-password" @click="changeModalType('del_tenant_code')">删除密码</td>
							</tr>
							<tr v-else>
								<td class="no-use">{{get_TC.name}}</td>
								<td class="color_999">{{get_TC.time}}</td>
								<td class="blue rent-password-btn solve-password" @click="changeModalType('thaw_tenant_code')">解冻密码</td>
								<td class="blue rent-password-btn  reset-password" @click="changeModalType('modify_tenant_code')">重置密码</td>
								<td></td>
							</tr>
						</table>
					</tab>
					<tab header="备用密码管理">
						<table class="table table-striped ready-pass">
							<tr v-for="item in bycode[page_count]" track-by="$index" @click="changeCodeBtnShow($index)" :class="{ 'no-set': !item}">
								<td>{{page_count=='first'?$index+1:$index+9}}</td>
								<td>{{item?item.name:'无'}}</td>
								<td>
									<div class="bycode-btn">
										<div @click.stop="changeModalType('modify_Code')" v-show="bycode_btn_isshow[page_count][$index].showY" class="bycode-change">修改密码</div>
									</div>
								</td>
								<td>
									<div class="bycode-btn">
										<div @click.stop="changeModalType('add_Code')" v-show="bycode_btn_isshow[page_count][$index].showN" class="bycode-add">添加密码</div>
										<div @click.stop="changeModalType('del_Code')" v-show="bycode_btn_isshow[page_count][$index].showY" class="bycode-del">删除密码</div>
									</div>
								</td>
							</tr>
						</table>
						<div class="page">
							<div class="fr">
								<button @click="changeCodePage(1)" type="button" class="btn btn-primary">1</button>
								<button @click="changeCodePage(2)" type="button" class="btn btn-primary">2</button>
							</div>
						</div>
					</tab>
				</tab-group>
				<tab header="开锁记录">
					<div v-for="item in lockopen_list" track-by="$index">
						<div v-if="$index == 0 || item.time.split(' ')[0]!=lockopen_list[$index-1].time.split(' ')[0]" class="operation-day color_333">
							{{item.time.split(' ')[0]}}
						</div>
						<div class="operation-time color_666">{{item.time.split(' ')[1]}} {{item.desc}}</div>
					</div>
					<button @click="getLockopen" v-show="!lockopen_done" class="btn btn-primary btn-more pull-right">更多记录</button>
                    <table v-if="!lockopen_list || lockopen_list.length==0" class="table table-striped">
                        <tr>
                            <td>暂无开锁记录</td>
                        </tr>
                    </table>
				</tab>
				<tab header="操作记录">
					<div v-for="item in operation_data" track-by="$index">
						<div v-if="$index == 0 || item.time.split(' ')[0]!=operation_data[$index-1].time.split(' ')[0]" class="operation-day color_333">
							{{item.time.split(' ')[0]}}
						</div>
						<div class="operation-time color_666">{{item.time.split(' ')[1]}} {{item.desc}}</div>
					</div>
					<button @click="getOperation" v-show="!operation_done" class="btn btn-primary btn-more pull-right">更多记录</button>
                    <table v-if="!operation_data || operation_data.length==0" class="table table-striped">
                        <tr>
                            <td>暂无开锁记录</td>
                        </tr>
                    </table>
				</tab>
			</tabs>
		</div>
		<Modal>
			<!--租客信息添加/修改-->
			<div class="modal-ne" v-show="modal_type==='set_tenant'">
				<div class="modal-head">租客信息{{tenant_data_text}}</div>
				<div class="modal-bottom info-edit">
					<div class="modal-item">
						<div class="fl item-title name-title">入住情况</div>
						<div class="fl">
							<select v-model="tenant_data_temp.tenant" class="form-control">
                                <option value="1">未入住</option>
                                <option value="2">已入住</option>
                            </select>
						</div>
					</div>
					<div class="modal-item">
						<div class="fl item-title name-title">租客姓名</div>
						<div class="fl"><input type="text" v-model="tenant_data_temp.name" class="form-control"></div>
					</div>
					<div class="modal-item">
						<div class="fl item-title name-title">联系方式</div>
						<div class="fl"><input type="text" v-model="tenant_data_temp.phone" class="form-control"></div>
					</div>
					<div class="modal-item">
						<div class="fl item-title name-title">身份证号</div>
						<div class="fl"><input type="text" v-model="tenant_data_temp.IDcard" class="form-control"></div>
					</div>
					<div class="modal-item">
						<div class="fl item-title name-title">合同到期时间</div>
						<div class="fl"><input type="text" v-model="tenant_data_temp.time" class="form-control"></div>
					</div>
					<button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
					<button class="btn btn-primary btn-confirm" @click="setTenant">确认</button>
				</div>
			</div>
			<!--添加租客密码-->
			<div class="modal-ne" v-show="modal_type==='add_tenant_code'">
				<div class="modal-head">添加租客密码</div>
				<div class="modal-bottom add-password">
					<div class="modal-item">
						<div class="fl item-title name-title">密码备注名</div>
						<div class="fl"><input type="text" v-model="add_TC.name" class="form-control"></div>
					</div>
					<div class="modal-item">
						<div class="fl item-title name-title">输入租客密码</div>
						<div class="fl">
							<input type="number" v-model="add_TC.password" class="form-control fl" placeholder="请输入4~16位数字密码">
							<button @click="generatePass('add')" class="btn btn-link btn-code-random">随机生成</button>
						</div>
					</div>
					<div class="modal-item">
						<div class="fl item-title name-title">失效时间</div>
						<div class="input-group date form_datetime col-md-5" data-date-format="dd MM yyyy - HH:ii" data-link-field="TCa-data">
                            <input class="form-control TC-input" size="16" type="text" value="" readonly>
                            <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                        </div>
                        <input type="hidden" id="TCa-data" v-model="add_TC.endtime" />
					</div>
					<div class="modal-item">
						<div class="fl item-title name-title">失效次数</div>
						<div class="fl">
							<select type="text" v-model="add_TC.opentime" class="form-control">
                                <option value="0" selected="selected">请选择</option>
                                <option value="1">一次有效</option>
                                <option value="-1">永久有效</option>
                            </select>
						</div>
					</div>
					<div class="modal-item admin-password">
						<div class="fl item-title name-title">验证管理员密码</div>
						<div class="fl"><input type="password" v-model="add_TC.code" class="form-control"></div>
					</div>
					<button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
					<button class="btn btn-primary btn-confirm" @click="lockOperation('SetTempLockPWD','add')">确认</button>
				</div>
			</div>
			<!--修改租客密码-->
			<div class="modal-ne" v-show="modal_type==='modify_tenant_code'">
				<div class="modal-head">修改租客密码</div>
				<div class="modal-bottom add-password">
					<div class="modal-item">
						<div class="fl item-title name-title">密码备注名</div>
						<div class="fl"><input type="text" v-model="modify_TC.name" class="form-control"></div>
					</div>
					<div class="modal-item">
						<div class="fl item-title name-title">输入租客密码</div>
						<div class="fl">
							<input type="password" v-model="modify_TC.password" class="form-control fl" placeholder="请输入4~16位数字密码">
							<button @click="generatePass('change')" class="btn btn-link btn-count">随机生成</button>
						</div>
					</div>
					<div class="modal-item">
						<div class="fl item-title name-title">失效时间</div>
						<div class="input-group date form_datetime_1 col-md-5" data-date-format="dd MM yyyy - HH:ii p" data-link-field="TCc-data">
                            <input class="form-control TC-input" size="16" type="text" :value="modify_TC.endtime" readonly>
                            <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                        </div>
                        <input type="hidden" id="TCc-data" v-model="modify_TC.endtime" />
					</div>
					<div class="modal-item">
						<div class="fl item-title name-title">失效次数</div>
						<div class="fl">
							<select type="text" v-model="modify_TC.opentime" class="form-control">
                                <option value="0" selected="selected">请选择</option>
                                <option value="1">一次有效</option>
                                <option value="-1">永久有效</option>
                            </select>
						</div>
					</div>
					<div class="modal-item admin-password">
						<div class="fl item-title name-title">验证管理员密码</div>
						<div class="fl"><input type="password" v-model="modify_TC.code" class="form-control"></div>
					</div>
					<button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
					<button class="btn btn-primary btn-confirm" @click="lockOperation('SetTempLockPWD','change')">确认</button>
				</div>
			</div>
			<!--续租租客密码-->
			<div class="modal-ne" v-show="modal_type==='rene_tenant_code'">
				<div class="modal-head">续租密码</div>
				<div class="modal-bottom">
					<div class="modal-item">
						<div class="fl item-title name-title">失效时间</div>
						<div class="input-group date form_datetime_1 col-md-5" data-date-format="dd MM yyyy - HH:ii p" data-link-field="TCr-data">
                            <input class="form-control TC-input" size="16" type="text" :value="rene_TC.endtime" readonly>
                            <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                        </div>
                        <input type="hidden" id="TCr-data" v-model="rene_TC.endtime" />
					</div>
					<div class="modal-item">
						<div class="fl item-title name-title">验证管理员密码</div>
						<div class="fl"><input type="password" v-model="rene_TC.code" class="form-control"></div>
					</div>
					<button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
					<button class="btn btn-primary btn-confirm" @click="lockOperation('ReletTempLockPWD')">确认</button>
				</div>
			</div>
			<!--冻结租客密码-->
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
					<button class="btn btn-primary btn-confirm" @click="lockOperation('FreezeCodePWD')">确认</button>
				</div>
			</div>
			<!--解冻租客密码-->
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
					<button class="btn btn-primary btn-confirm" @click="lockOperation('UnfreezeCodePWD')">确认</button>
				</div>
			</div>
			<!--删除租客密码-->
			<div class="modal-ne" v-show="modal_type==='del_tenant_code'">
				<div class="modal-head">删除密码</div>
				<div class="modal-bottom">
					<div class="modal-item">
						<div class="fl item-title name-title">输入管理员密码</div>
						<div class="fl"><input type="password" v-model="del_TC_code" class="form-control" placeholder="输入4~16位密码"></div>
					</div>
					<p>删除密码后，租客将无法使用该密码进行开锁。</p>
					<p>是否继续删除密码？</p>
					<button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
					<button class="btn btn-primary btn-confirm" @click="lockOperation('DelLockPWD','tenant')">确认</button>
				</div>
			</div>
			<!--身份验证-->
			<div class="modal-ne" v-show="modal_type==='verifi'">
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
			<div class="modal-ne" v-show="modal_type==='add_Code'">
				<div class="modal-head">添加备用密码</div>
				<div class="modal-bottom another-password">
					<div class="modal-item">
						<div class="fl item-title name-title">密码备注名</div>
						<div class="fl"><input type="text" v-model="add_code.name" class="form-control"></div>
					</div>
					<div class="modal-item">
						<div class="fl item-title name-title">输入新租客密码</div>
						<div class="fl">
							<input type="password" v-model="add_code.password" class="form-control fl" placeholder="请输入4~16位数字密码">
						</div>
					</div>
					<div class="modal-item admin-password">
						<div class="fl item-title name-title">验证管理员密码</div>
						<div class="fl"><input type="password" v-model="add_code.code" class="form-control"></div>
					</div>
					<button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
					<button class="btn btn-primary btn-confirm" @click="lockOperation('SetPermaLockPWD','add')">确认</button>
				</div>
			</div>
			<!--删除备用密码-->
			<div class="modal-ne" v-show="modal_type==='del_Code'">
				<div class="modal-head">删除密码</div>
				<div class="modal-bottom">
					<div class="modal-item">
						<div class="fl item-title name-title">输入管理员密码</div>
						<div class="fl"><input type="password" v-model="del_C_code" class="form-control" placeholder="输入4~16位密码"></div>
					</div>
					<p>删除密码后，租客将无法使用该密码进行开锁。</p>
					<p>是否继续删除密码？</p>
					<button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
					<button class="btn btn-primary btn-confirm" @click="lockOperation('DelLockPWD','code')">确认</button>
				</div>
			</div>
			<!--修改备用密码-->
			<div class="modal-ne" v-show="modal_type==='modify_Code'">
				<div class="modal-head">修改备用密码</div>
				<div class="modal-bottom change-another-password">
					<div class="modal-item">
						<div class="fl item-title name-title">密码备注名</div>
						<div class="fl"><input type="text" v-model="modify_code.name" class="form-control"></div>
					</div>
					<div class="modal-item">
						<div class="fl item-title name-title">输入新租客密码</div>
						<div class="fl">
							<input type="password" v-model="modify_code.password" class="form-control fl" placeholder="请输入4~16位数字密码">
						</div>
					</div>
					<div class="modal-item admin-password">
						<div class="fl item-title name-title">验证管理员密码</div>
						<div class="fl"><input type="password" v-model="modify_code.code" class="form-control"></div>
					</div>
					<button class="btn btn-default btn-cancle" @click="hideModal">取消</button>
					<button class="btn btn-primary btn-confirm" @click="lockOperation('SetPermaLockPWD','change')">确认</button>
				</div>
			</div>
			<!--提示指令操作结果-->
			<div class="modal-ne" v-show="modal_type==='get_result'">
				<div class="modal-head">提示</div>
				<div class="modal-bottom">
					<p>{{result_text}}</p>
					<!--<p>请点击确认按钮！</p>-->
					<button class="btn btn-primary btn-confirm fr" @click="hideModal">确认</button>
				</div>
			</div>
		</Modal>
	</div>
	<foot></foot>
</template>
<script>
    import navList from '../components/comon/navList.vue'
    import Modal from '../components/popup/Modal.vue'
    import {showModal, hideModal, showLoading, showMsg, hideLoading} from '../vuex/actions/popupActions'
    import foot from '../components/comon/foot.vue'
	import { tabset,tab,tabGroup,datepicker } from 'vue-strap'
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
        components: {
            Modal,
            navList,
            foot,
            tabs:tabset,
            tab,
            tabGroup,
            datepicker
        },
        data: function() {
            return {
                //弹出框变量
                modal_type: '',
                //租客信息--显示
                tenant_data: {
                    status : '',
                    name : '',
                    phone : '',
                    IDcard : '',
                    time : ''
                },
                //租客信息--修改
                tenant_data_temp: null,
                //租客信息--弹出框文字
                tenant_data_text: '添加',
                //锁状态
                estate_name: this.$route.query.estate_name,
                lock_power: this.$route.query.power,
                lock_status: this.$route.query.status,
                //设备信息
                get_LI: {
                    name: '',
                    bindtime: '',
                    update_time: '',
                    gw_mac: '',
                    lock_mac: '',
                    gw_ver: '',
                    last_ver: '',
                    zb_ver: ''
                },
                //租客密码
                no_TC: false,
                get_TC: {
                    id: '',
                    freeze: false,
                    name: '',
                    time: ''
                },
                //添加租客密码
                add_TC: {
                    name: '',
                    password: '',
                    endtime: '',
                    opentime: 0,
                    code: ''
                },
                //修改租客密码
                modify_TC:{
                    name: '',
                    password: '',
                    endtime: '',
                    opentime: 0,
                    code: ''
                },
                //续租租客密码
                rene_TC:{
                    endtime: '',
                    code: ''
                },
                //冻结租客密码管理员密码
                freeze_TC_code: '',
                //解冻租客密码管理员密码
                thaw_TC_code: '',
                //删除租客密码管理员密码
                del_TC_code: '',
                //删除备用密码管理员密码
                del_C_code: '',
                //当前操作备用密码位置
                code_current_index: -1,
                //添加备用密码
                add_code:{
                    name: '',
                    password: '',
                    code: ''
                },
                //修改备用密码
                modify_code: {
                    name: '',
                    password: '',
                    code: ''
                },
                //每页记录条数
                record_pageNum: 20,
                //开锁记录
                lockopen_list: [],
                lockopen_page: 0,
                lockopen_done: false,
                //操作记录
                operation_data: [],
                operation_page: 0,
                operation_done: false,
                //备用密码
                bycode: {
                    first: new Array(8),
                    second: new Array(8)
                },
                bycode_btn_isshow: {
                    first: new Array(8),
                    second: new Array(8)
                },
                page_count: 'first',
                last_page_count: '',
                last_index: -1,
                //查询结果接口定时器
                time_wait: null,
                //查询结果接口返回码
                result_code: {
                    '-1': '操作失败！',
                    '1': '设备不在线！',
                    '2': '当前设备类型不支持该操作！',
                    '-10000': '缓存异常！',
                    '10000': '线程异常！',
                    '20000': '执行超时，网关并未上传执行结果！'
                },
                //查询结果弹窗文本
                result_text: ''

            }
        },
        ready: function() {
            //获取租户信息
            this.getLockTenant();
            //获取锁信息(设备信息)
            this.getLockInfo();
            //获取租客密码
            this.getTenantCode();
            //获取备用密码
            this.getCode();
            //获取开锁日志
            this.getLockopen();
            //获取操作日志
            this.getOperation();
            //查询指令结果
            this.getResult();
            //时间插件初始化
            $('.form_datetime').datetimepicker({
                language:  'zh-CN',
                todayBtn:  1,
                autoclose: 1,
                todayHighlight: 1,
                showMeridian: 1,
                format: 'yyyy-mm-dd hh:ii'
            });
            $('.form_datetime_1').datetimepicker({
                language:  'zh-CN',
                todayBtn:  1,
                autoclose: 1,
                todayHighlight: 1,
                showMeridian: 1,
                format: 'yyyy-mm-dd hh:ii'
            });
        },
        beforeDestroy: function() {
            if(this.time_wait){
                window.clearInterval(this.time_wait);
            }
        },
        methods: {
            //查询指令结果
            getResult: function() {
                let _this = this;                
                this.$http.post(base_url+'/lock/getResult').then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();;
                    //console.log(resData);
                    if(resData.code == 0) {
                        if(resData.data == 0){//执行成功
                            if(_this.time_wait){
                                window.clearInterval(_this.time_wait);
                            }
                            hideLoading(this.$store);
                            _this.reGetCode();
                            _this.result_text = "操作成功！";
                            _this.changeModalType('get_result');
                            
                        }
                        else if(resData.data == 5) {//无任务
                            hideLoading(this.$store);
                            if(_this.time_wait){
                                window.clearInterval(_this.time_wait);
                            }
                        }
                        else if(resData.data == 6) {//有任务在执行
                            _this.time_wait = setInterval(function() {
                                _this.longLoop();
                            },5000);
                        }
                        else if(resData.data == -1) {
                            if(_this.time_wait){
                                window.clearInterval(_this.time_wait);
                            }
                            hideLoading(this.$store);
                            _this.result_text = _this.result_code[resData.data] + '请检查失效时间或管理员密码是否有误！';
                            _this.changeModalType('get_result');
                        }
                        else{
                            if(_this.time_wait){
                                window.clearInterval(_this.time_wait);
                            }
                            hideLoading(this.$store);
                            _this.result_text = _this.result_code[resData.data];
                            _this.changeModalType('get_result');
                        }
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
            //轮询方法
            longLoop: function(){
                let _this = this;                
                this.$http.post(base_url+'/lock/getResult').then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();;
                    //console.log(resData);
                    if(resData.code == 0) {
                        if(resData.data == 0){//执行成功
                            if(_this.time_wait){
                                window.clearInterval(_this.time_wait);
                            }
                            hideLoading(this.$store);
                            _this.reGetCode();
                            _this.result_text = "操作成功！";
                            _this.changeModalType('get_result');
                        }
                        else if (resData.data == 5) {//无任务
                            hideLoading(this.$store);
                            if(_this.time_wait){
                                window.clearInterval(_this.time_wait);
                            }
                            return;
                        }
                        else if(resData.data == 6) {//有任务在执行
                            return;
                        }
                        else if(resData.data == -1) {
                            if(_this.time_wait){
                                window.clearInterval(_this.time_wait);
                            }
                            hideLoading(this.$store);
                            _this.result_text = _this.result_code[resData.data] + '请检查失效时间或管理员密码是否有误！';
                            _this.changeModalType('get_result');
                        }
                        else{
                            if(_this.time_wait){
                                window.clearInterval(_this.time_wait);
                            }
                            hideLoading(this.$store);
                            _this.result_text = _this.result_code[resData.data];
                            _this.changeModalType('get_result');
                        }
                    }  
                    else if(resData.code === 10102 || resData.code === 10010 || resData.code === 10014 ){
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
            //改变弹出框
            changeModalType: function(type,typeInfo){
                if(type == 'set_tenant'){
                    if(typeInfo == 'add'){
                        this.tenant_data_text = '添加';
                    }
                    else{
                        this.tenant_data_text = '修改';
                    }
                }
                this.modal_type = type;
                this.showModal();
            },
            //随机生成4-16位数字
            generatePass: function(type){
                let pass = '';
                //parseInt(Math.random()*(上限-下限+1)+下限);
                let num = parseInt(Math.random()*13 + 4);
                for(let i=0;i<num;i++){
                    let tmp = parseInt(Math.random()*10);
                    if(tmp == 10){
                        tmp = '9';
                    }
                    else{
                        tmp = tmp + '';
                    }
                    pass += tmp;
                }
                if(type=='add'){
                    this.add_TC.password = pass;
                }
                else {
                    this.modify_TC.password = pass;
                }
            },
            //获取租户信息
            getLockTenant: function(){
                let _this = this;
                this.$http.post(base_url+'/lock/getLockTenant', {
                    id : this.$route.query.id
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData);
                    if (resData.code === 0) {
                        _this.tenant_data_temp = resData.data;
                        _this.tenant_data.status = resData.data.tenant;
                        _this.tenant_data.name = resData.data.name;
                        _this.tenant_data.phone = resData.data.phone;
                        _this.tenant_data.IDcard = resData.data.IDcard;
                        _this.tenant_data.time = resData.data.time;
                    }  
                    else if(resData.code === 10102 || resData.code === 10010 || resData.code === 10014 ){
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
            //获取锁信息(设备信息)
            getLockInfo: function(){
                let _this =this;
                this.$http.post(base_url+'/lock/getLockInfo', {
                    id : this.$route.query.id
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData);
                    if (resData.code === 0) {
                        _this.get_LI.name = resData.data.lock_name;
                        _this.get_LI.bindtime = resData.data.bindtime;
                        _this.get_LI.update_time = resData.data.update_time;
                        _this.get_LI.gw_mac = resData.data.gw_mac;
                        _this.get_LI.lock_mac = resData.data. lock_mac;
                        _this.get_LI.gw_ver = resData.data.gw_ver;
                        _this.get_LI.last_ver = resData.data.last_ver;
                        _this.get_LI.zb_ver = resData.data.zb_ver;
                    }  
                    else if(resData.code === 10102 || resData.code === 10010 || resData.code === 10014 ){
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
            //获取租客密码
            getTenantCode: function(){
                let _this = this;
                this.$http.post(base_url+'/lock/getTenantCode', {
                    id : this.$route.query.id
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData);
                    if (resData.code === 0) {
                        if(!resData.data){
                            _this.no_TC = true;
                        }else{
                            _this.no_TC = false;
                            _this.get_TC.id = resData.data.id;
                            _this.get_TC.freeze = resData.data.freeze;
                            _this.get_TC.name = resData.data.name;
                            _this.get_TC.time = resData.data.time;
                            _this.modify_TC.name = resData.data.name;
                            _this.modify_TC.endtime = resData.data.time;
                            //_this.modify_TC.opentime = 
                            _this.rene_TC.endtime = resData.data.time;
                        }
                    }  
                    else if(resData.code === 10102 || resData.code === 10010 || resData.code === 10014 ){
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
            //获取备用密码
            getCode: function(){
                let _this = this;
                this.$http.post(base_url+'/lock/getCode', {
                    id : this.$route.query.id
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData);
                    if (resData.code === 0) {
                        if(!resData.data)return;
                        for(let i=0;i<resData.data.length;i++){
                            //归入两个数组
                            let index = resData.data[i]['index'];
                            if(index < 9) {
                                _this.bycode['first'].$set([index-1], resData.data[i]);
                            }else {
                                _this.bycode['second'].$set([index-9], resData.data[i]);
                            }
                        }
                    }  
                    else if(resData.code === 10102 || resData.code === 10010 || resData.code === 10014 ){
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
            //获取开锁日志
            getLockopen: function(){
                let _this = this;
                this.$http.post(base_url+'/lock/getLockopen', {
                    id : this.$route.query.id,
                    quantity : this.record_pageNum,
                    index : this.lockopen_page*this.record_pageNum
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData);
                    if (resData.code === 0) {
                        _this.lockopen_page++;
                        if(resData.data) {
                            _this.lockopen_list = _this.lockopen_list.concat(resData.data);
                        }
                        if(!resData.data || resData.data.length <= 20) {                  
                            //如果小于20条 done改成true
                            _this.lockopen_done = true;
                        }
                    }  
                    else if(resData.code === 10102 || resData.code === 10010 || resData.code === 10014 ){
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
            //获取操作日志
            getOperation: function(){
                //this.$http.post(base_url+'/log/getOperation',
                let _this = this;
                this.$http.post(base_url+'/lock/getOperation', {
                    id : this.$route.query.id,
                    quantity : this.record_pageNum,
                    index : this.operation_page*this.record_pageNum
                }).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData);
                    if (resData.code === 0) {
                        _this.operation_page++;
                        if(resData.data) {
                            _this.operation_data=_this.operation_data.concat(resData.data);
                        }
                        if(!resData.data || resData.data.length <= 20) {
                            //如果小于20条 done改成true
                            _this.operation_done = true;
                        }
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
            //添加或修改租户信息 
            setTenant: function(){
                let _this = this;
                this.tenant_data_temp.id =this.$route.query.id;
                if(!this.tenant_data_temp.name.trim() || !this.tenant_data_temp.phone.trim() || !this.tenant_data_temp.IDcard.trim() || this.tenant_data_temp.time.trim()){
                    showMsg(this.$store, '请完整填写相关信息！', 'error');
                    return;
                }
                this.$http.post(base_url+'/lock/setTenant', this.tenant_data_temp).then(function(response) {
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData);
                    if (resData.code === 0) {
                        showMsg(this.$store, "修改成功!");
                        //_this.tenant_data = _this.tenant_data_temp;
                        _this.tenant_data.status = _this.tenant_data_temp.tenant;
                        _this.tenant_data.name = _this.tenant_data_temp.name;
                        _this.tenant_data.phone = _this.tenant_data_temp.phone;
                        _this.tenant_data.IDcard = _this.tenant_data_temp.IDcard;
                        _this.tenant_data.time = _this.tenant_data_temp.time;
                        _this.hideModal(_this.$store);
                    } else {
                        showMsg(this.$store, resData.msg, 'error')
                    }
                }, function(response) {
                    showMsg(this.$store, '请求超时！', 'error')
                })
            },
            //改变备用密码页码
            changeCodePage: function(num) {
                if(num == 1) {
                    this.page_count = "first";
                }else {
                    this.page_count = "second";
                }
            },
            //控制备用密码按钮显示隐藏、记录当前被点击的备用密码位置
            changeCodeBtnShow: function(index) {
                if(index==this.last_index)return;
                if(this.last_index!=-1){
                    this.bycode_btn_isshow[this.last_page_count].$set(this.last_index, { showY: 0});
                    this.bycode_btn_isshow[this.last_page_count].$set(this.last_index, { showN: 0});
                }
                if(!this.bycode[this.page_count][index]){
                    this.bycode_btn_isshow[this.page_count].$set(index, { showN: 1});
                }else{
                    this.bycode_btn_isshow[this.page_count].$set(index, { showY: 1});
                }
                this.last_page_count=this.page_count;
                this.last_index=index;
                //记录当前被点击的备用密码位置
                this.code_current_index = this.page_count=='first'?index+1:index+9;
            },
            //密码相关指令下发
            lockOperation: function(operation,type){
                // this.$route.query.id
                let _this = this;
                let data = {
                    id : this.$route.query.id,
                    operation : operation
                    //password "123456" 开锁密码 
                    //name "王大大" 密码备注名 
                    //index 1 备用密码位置 
                    //code "1234" 管理员密码 
                };
                if(operation == "SetPermaLockPWD"){//设置/重制备用密码
                    if(type == "add"){//设置备用密码
                        if(!this.add_code.password.trim() || !this.add_code.name.trim() || this.code_current_index.trim() || this.add_code.code.trim()){
                            showMsg(this.$store, '请完整填写相关信息！', 'error');
                            return;
                        }
                        data.password = this.add_code.password;
                        data.name = this.add_code.name;
                        data.index = this.code_current_index;
                        data.code = this.add_code.code;
                    }
                    else if(type == "change"){//重制备用密码
                        if(!this.modify_code.password.trim() || !this.modify_code.name.trim() || this.code_current_index.trim() || this.modify_code.code.trim()){
                            showMsg(this.$store, '请完整填写相关信息！', 'error');
                            return;
                        }
                        data.password = this.modify_code.password;
                        data.name = this.modify_code.name;
                        data.index = this.code_current_index;
                        data.code = this.modify_code.code;
                    }
                    
                }
                else if(operation == "SetTempLockPWD"){//设置/重制租客密码 ==index=255
                    //start  "2016-09-19 08:08:08"
                    //end  "2016-09-19 08:08:08"
                    //mode  1/-1
                    if(type == "add"){//设置租客密码
                        if(!this.add_TC.password.trim() || !this.add_TC.name.trim() || !this.add_TC.code.trim() || !$('#TCa-data')[0].value || this.add_TC.opentime.trim()){
                            showMsg(this.$store, '请完整填写相关信息！', 'error');
                            return;
                        }
                        data.password = this.add_TC.password;
                        data.name = this.add_TC.name;
                        data.index = 255;
                        data.code = this.add_TC.code;
                        data.start = _this.fmtDate(new Date());
                        this.add_TC.endtime = $('#TCa-data')[0].value;
                        data.end = this.add_TC.endtime;
                        //console.log(data.start);
                        //console.log($('#TC-data')[0].value);
                        data.mode = this.add_TC.opentime;
                    }
                    else if(type == "change"){//重制租客密码
                        if(!this.modify_TC.password.trim() || !this.modify_TC.name.trim() || !this.modify_TC.code.trim() || !$('#TCc-data')[0].value || this.modify_TC.opentime.trim()){
                            showMsg(this.$store, '请完整填写相关信息！', 'error');
                            return;
                        }
                        data.password = this.modify_TC.password;
                        data.name = this.modify_TC.name;
                        data.index = 255;
                        data.code = this.modify_TC.code;
                        data.start = _this.fmtDate(new Date());
                        this.modify_TC.endtime = $('#TCc-data')[0].value;
                        data.end = this.modify_TC.endtime;
                        data.mode = this.modify_TC.opentime;
                    }

                }
                else if(operation == "DelLockPWD"){//删除密码任意，租客密码index=255 
                    if(type == 'tenant'){//删除租客密码
                        if(!this.del_TC_code.trim()){
                            showMsg(this.$store, '请填写管理员密码！', 'error');
                            return;
                        }
                        data.index = 255 ;
                        data.code = this.del_TC_code;
                    }
                    else if(type == 'code'){//删除备用密码
                        if(!this.del_C_code.trim()){
                            showMsg(this.$store, '请填写管理员密码！', 'error');
                            return;
                        }
                        data.index = this.code_current_index;
                        data.code = this.del_C_code;
                    }
                }
                else if(operation == "FreezeCodePWD"){
                    if(!this.freeze_TC_code.trim()){
                        showMsg(this.$store, '请填写管理员密码！', 'error');
                        return;
                    }
                    data.index = 255 ;
                    data.code = this.freeze_TC_code.trim();
                }
                else if(operation == "UnfreezeCodePWD"){
                    if(!this.thaw_TC_code.trim()){
                        showMsg(this.$store, '请填写管理员密码！', 'error');
                        return;
                    }
                    data.index = 255 ;
                    data.code = this.thaw_TC_code.trim();
                }
                else if(operation == "ReletTempLockPWD"){
                    if(!this.rene_TC.code.trim()){
                        showMsg(this.$store, '请填写管理员密码！', 'error');
                        return;
                    }
                    if(!!$('#TCr-data')[0].value){
                        showMsg(this.$store, '请选择结束时间！', 'error');
                        return;
                    }
                    this.rene_TC.endtime = $('#TCr-data')[0].value;
                    data.end = this.rene_TC.endtime;
                    data.code = this.rene_TC.code.trim();
                }
                showLoading(this.$store,"正在重新配置锁数据，大约需要5秒，请耐心等待！");
                this.$http.post(base_url+'/lock/operation', data).then(function(response) {
                    _this.hideModal(_this.$store);
                    if (!response.ok) {
                        showMsg(this.$store, '请求超时！', 'error');
                        return
                    }
                    let resData = response.json();
                    //console.log(resData);
                    if (resData.code === 0) {
                        _this.getResult();
                    } else {
                        hideLoading(this.$store);
                        showMsg(this.$store, resData.msg, 'error')
                    }
                }, function(response) {
                    showMsg(this.$store, '请求超时！', 'error')
                })
            },
            //提供正确时间格式
            //value 可选 new Date、时间戳、"2016-08-05 14:22:09" 时间格式
            //fmt 可选 以下格式(以及位置调换)
            //  yyyy-MM-dd hh:mm:ss
            //  yyyy-MM-dd hh:mm:ss.S
            //  yyyy/MM/dd hh:mm:ss
            //  yyyy年MM月dd日 hh时mm分ss秒
            //  yyyyMMddhhmmss
            fmtDate: function(value, fmt) {
                // var v = value.replace(/-/g, "/").substring(0, 19);
                var date = new Date(value);
                if (date == "Invalid Date") {
                    date = new Date(parseFloat(value));
                }
                if(!fmt){
                    fmt = 'yyyy-MM-dd hh:mm:ss';
                }
                var o = {
                    "M+": date.getMonth() + 1, //月份 
                    "d+": date.getDate(), //日 
                    "h+": date.getHours(), //小时 
                    "m+": date.getMinutes(), //分 
                    "s+": date.getSeconds(), //秒 
                    "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
                    "S": date.getMilliseconds() //毫秒 
                };
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            },
            //重新获取租客密码和备用密码
            reGetCode: function(){
                //初始化租客密码
                this.get_TC= {
                    id: '',
                    freeze: false,
                    name: '',
                    time: ''
                },
                //初始化添加租客密码
                this.add_TC= {
                    name: '',
                    password: '',
                    endtime: '',
                    opentime: 0,
                    code: ''
                },
                //初始化修改租客密码
                this.modify_TC= {
                    name: '',
                    password: '',
                    endtime: '',
                    opentime: '',
                    code: ''
                },
                //初始化冻结租客密码管理员密码
                this.freeze_TC_code= '',
                //初始化解冻租客密码管理员密码
                this.thaw_TC_code= '',
                //初始化删除租客密码管理员密码
                this.del_TC_code= '',
                //初始化删除备用密码管理员密码
                this.del_C_code= '',
                //初始化当前操作备用密码位置
                this.code_current_index= -1,
                //初始化添加备用密码
                this.add_code= {
                    name: '',
                    password: '',
                    code: ''
                },
                //初始化修改备用密码
                this.modify_code= {
                    name: '',
                    password: '',
                    code: ''
                },
                //初始化备用密码
                this.bycode= {
                    first: new Array(8),
                    second: new Array(8)
                };
                //初始化备用密码显示隐藏按钮
                this.bycode_btn_isshow= {
                    first: new Array(8),
                    second: new Array(8)
                };
                //初始化上次点击备用密码位置
                this.last_index= -1;
                //获取租客密码
                this.getTenantCode();
                //获取备用密码
                this.getCode();
                //时间插件初始化
                $('.form_datetime').datetimepicker({
                    language:  'zh-CN',
                    todayBtn:  1,
                    autoclose: 1,
                    todayHighlight: 1,
                    showMeridian: 1,
                    format: 'yyyy-mm-dd hh:ii'
                });
                $('.form_datetime_1').datetimepicker({
                    language:  'zh-CN',
                    todayBtn:  1,
                    autoclose: 1,
                    todayHighlight: 1,
                    showMeridian: 1,
                    format: 'yyyy-mm-dd hh:ii'
                });
            }
        }
    }
</script>