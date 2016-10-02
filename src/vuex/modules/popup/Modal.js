import {
	MODAL_SHOW,
	MODAL_HIDE
} from '../../types'
const state = {
	show: false
}

const mutations = {
	[MODAL_SHOW](state, action) {
		state.show = true
	},
	[MODAL_HIDE](state, action) {
		state.show = false
	}
}

export default {
	state,
	mutations
}