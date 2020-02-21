import React, { useReducer, createContext } from 'react';

import { authReducer } from './reducers/auth'
import { userReducer } from './reducers/user'
import { errReducer } from './reducers/error'
import { combineReducers } from './reducers/reducer'


export const stateContext = createContext()

const initialState = {
	authToken: null,
	error: null,
	user: null,
	authenticated: false
}


const rooReducer = combineReducers(authReducer, errReducer, userReducer)

export const Store = ({children}) => {
	const [state, dispatch] = useReducer(rooReducer, initialState)

	return(
		<stateContext.Provider value={{state, dispatch}}>
			{children}
		</stateContext.Provider>
	)
}