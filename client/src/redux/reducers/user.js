// import axios from 'axios'
import * as actionTypes from '../constants'

const { SET_USER, SET_ERROR } = actionTypes

export const  userReducer = (state ={}, action) => {
   switch (action.type) {
		 case SET_USER:
			 return { ...state, user: action.payload.user}
	   case SET_ERROR:
			 localStorage.removeItem("token")
		   return { ...state }
			default:
				return state
	 }
}