
import { LOG_OUT, AUTH_USER, SET_ERROR } from "../constants";


export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
			localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authToken: action.payload.token,
        authenticated: action.payload.authenticated,
			};
		case LOG_OUT:
			localStorage.removeItem('token')
			return { ...state, authToken: null, authenticated: null }
    case SET_ERROR:
      return { ...state, authToken: null };
    default:
      return state;
  }
};
