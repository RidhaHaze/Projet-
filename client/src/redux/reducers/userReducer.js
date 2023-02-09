import {
  CURRENT_USER,
  FAIL_USER,
  GET_ALL_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  UPDATE_USER,
  VIDE_ERRORS,
} from "../types/contactTypes";

const initialState = {
  user: {},
  form: true,
  message: null,
  error: [],
  load: false,
  isAuth: false,
  isAdmin: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.data.user,
        message: payload.message,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: payload.data.user,
        message: payload.message,
      };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.data.user,
        message: payload.message,
        isAuth: true,

        isAdmin: payload.data.user.role === "admin" ? true : false,
      };
    case CURRENT_USER:
      return {
        ...state,
        user: payload?.data?.user,
        isAuth: true,
        isAdmin: payload?.user?.role === "Admin" ? true : false,
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return { ...state, user: {}, isAuth: false };
    case GET_ALL_USER:
      return { ...state, users: payload.users };

    case FAIL_USER:
      return { ...state, error: payload.message, load: false };
    case VIDE_ERRORS:
      return { ...state, errors: [] };
    default:
      return state;
  }
};

export default userReducer;
