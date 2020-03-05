// import axios from 'axios'
// import axios from 'axios'
import * as actionTypes from '../constants'

const { SET_ERROR, RESET_ERROR } = actionTypes

export const errReducer = (state={}, action) => {
	switch (action.type) {
		case SET_ERROR:
			return { ...state, error: action.payload }
	  case RESET_ERROR:
			return {...state, error: null }
		default:
			return state;
	}
}