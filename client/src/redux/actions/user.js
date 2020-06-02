import axios from "axios";
import { LIST_USERS, SET_USER, SET_ERROR,  FLUSH_USERS} from '../constants'

export function getUser() {
  return async dispatch => {
		let token = localStorage.getItem("token");
		console.log('token at get user', token);
    try {
      let response = await axios.get(`/users/dashboard`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      dispatch({
        type:SET_USER,
        payload: {
          user: response.data.user
        }
      });
    } catch (error) {
      dispatch({
        type:SET_ERROR,
        payload: error
      });
    }
  }
}


export function listUsers(){
	return async dispatch => {
		let token = localStorage.getItem("token");
		console.log('the token:', token)
		try {
      let response = await axios.get(`/users/list`, { headers: { Authorization: `Bearer ${token}` }});
      dispatch({
        type: LIST_USERS,
        payload: {
          users: response.data
        }
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error
      })
    }
   }
	}


	export function flushUsers(){
		return async dispatch => {
				dispatch({
					type: FLUSH_USERS,
				})
		 }
		}

