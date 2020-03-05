// import axios from 'axios'
import * as actionTypes from '../constants'

const { AUTH_USER, SET_ERROR } = actionTypes

export const authReducer = (state={}, action) => {
   switch (action.type) {
		 case (AUTH_USER):
			 localStorage.setItem("token", action.payload.token)
			 return { ...state, authToken: action.payload.token, authenticated: action.payload.authenticated }
	   case (SET_ERROR):
			 localStorage.removeItem("token")
		   return { ...state, authToken: null }
			default:
				return state
	 }
}