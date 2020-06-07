import axios from "axios";
import { LIST_USERS, SET_USER, SET_ERROR } from '../actionConstants'

export function getUser(token) {
  return async dispatch => {
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


export function listUsers(token){
	return async dispatch => {
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




