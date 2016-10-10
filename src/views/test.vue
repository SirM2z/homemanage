<style>
    .modal-ne {
        background: #fff;
        height: 300px;
        width: 300px;
        padding: 10px;
        box-shadow: 0 0 10px #ccc;
        border-radius: 5px;
    }
    
    .personal-box {
        padding: 50px 250px 20px;
    }
    
    .personal-box button {
        margin-right: 10px;
    }
    
    .personal-info .infos {
        margin-bottom: 30px;
    }
</style>
<template>
    <div style="height: 1200px;">
    <nav-list></nav-list>
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
    <h1>
        welcome to vue!:
        {{ 3731700153 |  NumberSeparator }}
    </h1>
    <h2 v-time></h2>
</template>
<script>
    import navList from '../components/comon/navList.vue'
    import Modal from '../components/popup/Modal.vue'
    import {showModal, hideModal, showLoading, showMsg} from '../vuex/actions/popupActions'
    import NumberSeparator from '../filters/number-separator';
    import Time from '../directives/time';
    export default {
        vuex: {
            actions: {
                showModal,
                hideModal,
                showLoading,
                showMsg
            }
        },
        ready: function(){
        },
        components: {
            Modal,
            navList
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