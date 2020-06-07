
import { AUTH_USER, AUTH_ERROR } from "../actionConstants";


export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
				authenticated: action.payload.authenticated,
				authToken: action.payload.token,
				isAuthError: false
			};
    case AUTH_ERROR:
      return { ...state, error: action.payload.error, isAuthError: true, authenticated: false, };
    default:
      return state;
  }
};
