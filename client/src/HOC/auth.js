import React from 'react'
import {useSelector} from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

// import { StateContext } from '../store/index'

function ProtectedRoute({render, ...props}){
	const isAuth = useSelector(state => state.isAuthenticated)
	console.log("is it authenticated", isAuth)
	return (
		<Route
			{...props}
			render={() => isAuth ? render() : <Redirect to='/login' />} 
		/>
	)
}

export default ProtectedRoute