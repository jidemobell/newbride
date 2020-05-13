import { combineReducers } from 'redux'


import { userReducer} from './user'
import { authReducer } from './auth'
import {imageReducer } from './images'
import {errReducer } from './error'
import { pageReducer } from './page'
import { cloudinaryReducer } from './photos'


const rootReducer = combineReducers({
	auth: authReducer,
	users: userReducer,
	image: imageReducer,
	error: errReducer,
	page: pageReducer,
	photos: cloudinaryReducer
})


export default rootReducer