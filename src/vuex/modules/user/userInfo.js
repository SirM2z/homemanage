import {
	SUCCESS_USER_INFO,
	FAILURE_USER_INFO
} from '../../types'
const state = {
	obj: {
		name: '',
		image_add: ''
	}
}

const mutations = {
	[SUCCESS_USER_INFO](state, action) {
		state.obj = {
			...action
		}
	},
	[FAILURE_USER_INFO](state, action) {
		state.obj = {
			name: '',
			image_add: ''
		}
	}
}

export default {
	state,
	mutations
}