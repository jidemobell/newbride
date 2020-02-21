import axios from 'axios'
import * as actionTypes from '../constants'

const { SET_USER, RESET_USER } = actionTypes

export const authReducer = (state, action) => {
   switch (action.type) {
		 case (SET_USER):
			 localStorage.setItem("token", action.payload.token)
			 axios.defaults.headers.common["Authorization"] = "Bearer " + action.payload.token;
			 return { ...state, authToken: action.payload.token, user: action.payload.user }
	   case (RESET_USER):
			 localStorage.removeItem("token")
			 delete axios.defaults.headers.common["Authorization"];
		   return { ...state, authToken: null }
			default:
				return state
	 }
}