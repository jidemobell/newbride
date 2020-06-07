// import axios from 'axios'
import * as actionTypes from '../actionConstants'

const { GET_PAGE, LIST_PAGES, SET_ERROR } = actionTypes

export const  pageReducer = (state ={}, action) => {
   switch (action.type) {
		 case GET_PAGE:
			 return { ...state, page: action.payload.pageData}
		 case LIST_PAGES:
			 return { ...state, pages: action.payload.pagesData }
	   case SET_ERROR:
		   return { ...state }
			default:
				return state
	 }
}