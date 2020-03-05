import React from 'react'
import {useSelector} from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export default function ProtectedRoute(props){
	const authState = useSelector(state => state.auth.authenticated)
	// const authState = useSelector(state => state.auth.authToken)
	console.log("checking redirect props", authState)
	if (authState) return <Redirect to={props.redirectTo} />
	return <Route {...props} />
}