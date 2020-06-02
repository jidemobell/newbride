import axios from "axios";
import { AUTH_USER, SET_ERROR, LOG_OUT } from "../constants";
import history from '../store/history'



export function login(data) {
  return async (dispatch) => {
    try {
      let response = await axios.post(`/v1/login`, {
        username: data.username,
        password: data.password,
      });
      if (response.status === 200) {
        dispatch({
          type: AUTH_USER,
          payload: {
            token: response.data.token,
            authenticated: true,
          },
				});
			}
			localStorage.setItem("token", response.data.token );
			history.push('/users/dashboard')
    } catch (error) {
      console.log(error);
      dispatch({
        type: SET_ERROR,
        payload: error,
      });
    }
  };
}


export function logout(){
  return (dispatch) => {
    dispatch({
			type: LOG_OUT
		})
	}
}