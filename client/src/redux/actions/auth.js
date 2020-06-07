import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "../actionConstants";
import history from '../store/history'



export function login(data) {
  return async (dispatch) => {
    try {
      let response = await axios.post(`/v1/login`, {
        username: data.username,
        password: data.password,
			});
			if(response.data.status === 401 || response.data.status !== 200){
				dispatch({
					type: AUTH_ERROR,
					payload: {
						error: 'username or password incorrect',
						isAuthError: true
					}
				});
			}
        dispatch({
          type: AUTH_USER,
          payload: {
            token: response.data.token,
            authenticated: true,
          },
				});
			history.push('/users/dashboard')
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: {
					error: 'username or password incorrect',
					isAuthError: true
				}
      });
    }
  };
}



export function logout(){
  return (dispatch) => {
    dispatch({
			type: AUTH_USER,
			payload: {
				token: null,
        authenticated: false,
			}
		})
	}
}