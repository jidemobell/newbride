import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// export default function AuthRoute(props){
// 	const token = localStorage.getItem('token')
// 	const authState = useSelector(state => state.auth.authenticated)
// 	const stateToken = useSelector(state => state.authToken)
// 	console.log("checking redirect props", authState)
// 	if (authState === true && token === stateToken) {
     
// 		return <Redirect to={{
// 			pathname: props.redirectTo
// 		}} />
// 	}
// 	return <Route {...props} />
// } 

export default function ProtectedRoute(props) {
	if (props.redirectIf) return <Redirect to={props.redirectTo} />;
	return <Route {...props} />;
}