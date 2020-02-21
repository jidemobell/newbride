import axios from 'axios'

export async function authActions(data){
	const user =  {
		username: data.username,
		Password: data.password
 }
 console.log(user)	
 try {
		let response = await axios.post(`/v1/login`,
		 {
				username: data.username,
				password: data.password
		 }
		)
		console.log(response)
		return {
			type: "LOGIN",
			payload: response.data
		}
	} catch (error) {
		// console.log(error.response.data)
		console.log(error)
		return {
			type: "LOGIN_ERR",
			payload: error
		}
	}
}