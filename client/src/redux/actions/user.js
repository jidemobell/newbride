import axios from "axios";

export function getUser() {
  return async dispatch => {
		let token = localStorage.getItem("token");
    try {
      let response = await axios.get(`/users/dashboard`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      dispatch({
        type: "SET_USER",
        payload: {
          user: response.data.user
        }
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error
      });
    }
  };
}
