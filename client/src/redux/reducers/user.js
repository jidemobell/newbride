// import axios from 'axios'
import * as actionTypes from '../constants'

const { SET_USER, LIST_USERS, SET_ERROR, FLUSH_USERS } = actionTypes

export const  userReducer = (state ={}, action) => {
   switch (action.type) {
		 case SET_USER:
			 return { ...state, user: action.payload.user}
		 case LIST_USERS:
			 return { ...state, users: action.payload.users }
		 case FLUSH_USERS:
			 return { ...state, users: [] }
	   case SET_ERROR:
			 localStorage.removeItem("token")
		   return { ...state }
			default:
				return state
	 }
}