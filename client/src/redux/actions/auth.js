import axios from 'axios'
import {AUTH_USER} from '../constants'

export  function login(data){
	return async dispatch => {
		try {
			let response = await axios.post(`/v1/login`,
			 {
					username: data.username,
					password: data.password
			 }
			)
			console.log(response.data)
			dispatch({
				type:AUTH_USER,
				payload: {
					token: response.data.token,
					authenticated: true
				}
			})
		} catch (error) {
			console.log(error)
			dispatch({
				type: "SET_ERROR",
				payload: error
			})
		}
	}
 
}