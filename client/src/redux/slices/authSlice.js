// import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'


// const authSlice = createSlice({
// 	name: 'auth',
// 	initialState: { isAuthenticated: false, authToken: null, error: null },
// 	reducers: {
// 	  authorizeUser: {
// 			reducer(state, action){
// 				const { token, authenticated, err  } = action.payload
//         localStorage.setItem("token", action.payload.token)
// 			//  axios.defaults.headers.common["Authorization"] = "Bearer " + action.payload.token;
// 			 return { ...state, authToken: token, authenticated: authenticated, error: err }
// 			},
// 			// prepare(data){
// 			//  return   axios.post(`/v1/login`, {
// 			// 		username: data.username,
// 			// 		password: data.password
// 			// 	})
// 			// 	.then((response) => {
// 			// 		console.log(response)
// 			// 		return {
// 			// 			payload: {
// 			// 				token: response.data.token,
// 			// 				authenticated: true
// 			// 			}
// 			// 		}
// 			// 	})
// 			// 	.catch((err) => {
// 			// 		 return {
// 			// 			payload: err
// 			// 		 }
// 			// 	})
// 			// }
// 			async  prepare(data){
// 			  try {
// 					 let response = await axios.post(`/v1/login`, { username: data.username, password: data.password })
// 					 console.log(response)
// 					 return { payload: {
// 							 token: response.data.token,
// 							 authenticated: true
// 						 }}
// 				 } catch (error) {
// 					 console.log(error)
// 					 return { payload: {
// 							 error
// 						 }}
// 						}
// 			 }
// 		}
// 	}
// })

// export const { authorizeUser } = authSlice.actions
// export default authSlice.reducer