
import {PULL_PHOTOS, LIST_PHOTOS} from '../constants'

export const cloudinaryReducer = (state ={}, action) => {
   switch (action.type) {
		 case PULL_PHOTOS:
			 return { ...state, cloudinary: action.payload }
		  case LIST_PHOTOS:
		 	 return { ...state, photos: action.payload }
			default:
				return state
	 }
}