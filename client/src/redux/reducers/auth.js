
import { LOG_OUT, AUTH_USER, SET_ERROR } from "../constants";


export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
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
