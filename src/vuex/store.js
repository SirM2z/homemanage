import Vue from 'vue'
import Vuex from 'vuex'
import {
	Msg,
	Loading,
	Modal
} from './modules/popup'

Vue.use(Vuex)

Vue.config.warnExpressionErrors = false; //数据为未出来时警告

export default new Vuex.Store({
	modules: {
		Msg,
		Loading,
		Modal
	}
})