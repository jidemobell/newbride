// import axios from 'axios'
import * as actionTypes from '../constants'

const { LOGGED_IN, LOGIN_ERR } = actionTypes

export const  userReducer = (state, action) => {
   switch (action.type) {
		 case LOGGED_IN:
			 localStorage.setItem("token", action.payload.token)
			//  history.push('/dashboard')
			//  axios.defaults.headers.common["Authorization"] = "Bearer " + action.payload.token;
			 return { ...state, authenticated: true}
	   case LOGIN_ERR:
			 localStorage.removeItem("token")
			//  delete axios.defaults.headers.common["Authorization"];
		   return { ...state, authenticated: false }
			default:
				return state
	 }
}