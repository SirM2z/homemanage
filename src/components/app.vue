<style scoped>

</style>
<template>
    <div>
        <router-view></router-view>
        <Msg></Msg>
        <Load></Load>
        <Top></Top>
    </div>
</template>
<script>
require('normalize-css')
require('../styles/common.css')
require('../styles/particles-style.css')
import FastClick from 'fastclick'
import store from '../vuex/store'
import Msg from './popup/Msg.vue'
import Load from './popup/Load.vue'
import Top from './popup/gotop.vue'

FastClick.attach(document.body);

export default {
    store,
    components: { 
        Msg,
        Load,
        Top
    },
    data: function() {
        return {
        }
    },
    ready: function() {
        
    },
    beforeDestroy: function() {

    },
    methods: {
    }
}
</script>
