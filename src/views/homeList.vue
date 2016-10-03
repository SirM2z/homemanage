<style>
    .list-box{
        padding: 50px 250px 100px;
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
</style>
<template>
    <nav-list></nav-list>
    <div class="list-box">
        <div class="row info-head">
            <div class="col-md-8">
                <h1 class="head-title fl">
                    海创基地
                </h1>
            </div>
        </div>
        <div class="info-body">
            <div class="body-left">
                <div>房产地址：滨江区六合路</div>
                <div>绑定网关：天策奇瑞智能网关、智能网关、测试网关</div>
                <div>备注信息：无</div>
            </div>
            <div class="body-btn">
                <button type="button" class="btn btn-primary">修改信息</button>
                <button type="button" class="btn btn-default">删除信息</button>
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
            <tr>
                <td><a href="#">2栋2单元101</a></td>
                <td>在线</td>
                <td>天策奇瑞智能网关</td>
                <td>正常</td>
                <td>已入住</td>
            </tr>
            <tr>
                <td><a href="#">2栋2单元101</a></td>
                <td class="home_red">在线</td>
                <td>天策奇瑞智能网关</td>
                <td>正常</td>
                <td>已入住</td>
            </tr>
            <tr>
                <td><a href="#">2栋2单元101</a></td>
                <td>在线</td>
                <td class="home_red">天策奇瑞智能网关</td>
                <td>正常</td>
                <td>已入住</td>
            </tr>
            <tr>
                <td><a href="#">2栋2单元101</a></td>
                <td>在线</td>
                <td>天策奇瑞智能网关</td>
                <td>正常</td>
                <td>已入住</td>
            </tr>
            <tr>
                <td><a href="#">2栋2单元101</a></td>
                <td class="home_red">在线</td>
                <td>天策奇瑞智能网关</td>
                <td>正常</td>
                <td>已入住</td>
            </tr>
            <tr>
                <td><a href="#">2栋2单元101</a></td>
                <td>在线</td>
                <td>天策奇瑞智能网关</td>
                <td>正常</td>
                <td>已入住</td>
            </tr>
            <tr>
                <td><a href="#">2栋2单元101</a></td>
                <td>在线</td>
                <td>天策奇瑞智能网关</td>
                <td>正常</td>
                <td>已入住</td>
            </tr>
            <tr>
                <td><a href="#">2栋2单元101</a></td>
                <td>在线</td>
                <td>天策奇瑞智能网关</td>
                <td>正常</td>
                <td>已入住</td>
            </tr>
            <tr>
                <td><a href="#">2栋2单元101</a></td>
                <td>在线</td>
                <td>天策奇瑞智能网关</td>
                <td>正常</td>
                <td>已入住</td>
            </tr>
        </table>

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
