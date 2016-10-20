<style>

</style>
<template>
    <div style="height: 1200px;">
        <p><a href="#" @click="showModal">showModal</a></p>
        <p><a href="#" @click="showLoadingFun">showLoading</a></p>
        <p><a href="#" @click="showMsgInfo">showMsgInfo</a></p>
        <p><a href="#" @click="showMsgSuccess">showMsgSuccess</a></p>
        <p><a href="#" @click="showError">showError</a></p>
        <p><a href="#" @click="showWarning">showWarning</a></p>
        <Modal>
            <div v-if="1" class="modal-ne">
                <p>dasdasds</p>
                <a class="blue" @click="hideModal">关闭</a>
            </div>
            <div v-if="0" class="modal-ne">
                <p>123456</p>
                <a class="blue" @click="hideModal">关闭</a>
            </div>
        </Modal>
        <h2>
            <img src="../images/logo.png">
        </h2>
        <h1 class="h1">
            welcome to vue!: {{ 3731700153 | NumberSeparator }}{{user_name}}
        </h1>
        <h2 v-time></h2>
        <datepicker value="" format="MMMM/dd/yyyy" :clear-button="true" placeholder=""></datepicker>

        <div class="form-group">
            <label for="dtp_input1" class="col-md-2 control-label">DateTime Picking</label>
            <div class="input-group date form_datetime col-md-5" data-date="1979-09-16T05:25:07Z" data-date-format="dd MM yyyy - HH:ii p"
                data-link-field="dtp_input1">
                <input class="form-control" size="16" type="text" value="" readonly>
                <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
            </div>
            <input type="hidden" id="dtp_input1" value="" /><br/>
        </div>
    </div>
</template>
<script>
import Modal from '../components/popup/Modal.vue'
import {showModal, hideModal, showLoading, showMsg} from '../vuex/actions/popupActions'
import NumberSeparator from '../filters/number-separator';
import Time from '../directives/time';
import { datepicker } from 'vue-strap'
export default {
    vuex: {
        getters:{
            user_name:({userInfo})=>userInfo.obj.name
        },
        actions: {
            showModal,
            hideModal,
            showLoading,
            showMsg
        }
    },
    ready: function(){

        $('.form_datetime').datetimepicker({
            language:  'zh-CN',
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            showMeridian: 1,
            format: 'yyyy-mm-dd hh:ii'
        });
    },
    components: {
        Modal,
        datepicker
    },
    filters: {
        NumberSeparator: NumberSeparator
    },
    directives: {
        time: Time
    },
    methods: {
        showMsgInfo: function(){
            showMsg(this.$store, 'hello vue!', 'info');
        },
        showMsgSuccess: function(){
            showMsg(this.$store, 'hello vue!', 'success');
        },
        showError: function(){
            showMsg(this.$store, 'hello vue!', 'error');
        },
        showWarning: function(){
            showMsg(this.$store, 'hello vue!', 'warning');
        },
        showLoadingFun: function(){
            showLoading(this.$store);
        }
    }
}
// const VueStrapComponents = {
//   $,
//   accordion,
//   affix,
//   alert,
//   aside,
//   buttonGroup,
//   carousel,
//   checkbox,
//   datepicker,
//   dropdown,
//   formGroup,
//   input,
//   modal,
//   navbar,
//   option,
//   panel,
//   popover,
//   progressbar,
//   radio,
//   select,
//   slider,
//   spinner,
//   tab,
//   tabGroup,
//   tabset,
//   tooltip,
//   typeahead
// }
</script>