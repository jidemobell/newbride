
import * as actionTypes from '../constants'

const { UPLOAD, FETCHIMG, SET_ERROR } = actionTypes

export const imageReducer = (state ={}, action) => {
   switch (action.type) {
		 case UPLOAD:
			 return { ...state, uploadSuccess: action.payload.success }
		 case FETCHIMG:
			 return { ...state, images: action.payload }
		 case SET_ERROR:
			 return { ...state, error: action.payload }
			default:
				return state
	 }
}