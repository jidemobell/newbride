import { combineReducers } from 'redux'


import { userReducer} from './user'
import { authReducer } from './auth'
import {imageReducer } from './images'
import {errReducer } from './error'


const rootReducer = combineReducers({
	auth: authReducer,
	users: userReducer,
	image: imageReducer,
	error: errReducer
})


export default rootReducer