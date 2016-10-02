import {
	SHOW_POPUP_MSG,
	HIDE_POPUP_MSG
} from '../../types'
const state = {
	message: {
		type: 'info',
		content: '',
		show: false
	}
}

const mutations = {
	[SHOW_POPUP_MSG](state, action) {
		state.message = {
			...action
		}
	},
	[HIDE_POPUP_MSG](state, action) {
		state.message = {
			type: '',
			content: '',
			show: false
		}
	}
}

export default {
	state,
	mutations
}