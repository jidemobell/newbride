import axios from "axios";
import { LIST_USERS, SET_USER, SET_ERROR} from '../constants'

export function getUser() {
  return async dispatch => {
		let token = localStorage.getItem("token");
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

