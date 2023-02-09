import axios from "axios";
import {
  CURRENT_USER,
  GET_ALL_USER,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  UPDATE_USER,
  VIDE_ERRORS,
} from "../types/contactTypes";

export const register = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const resulte = await axios.post("/api/users/signup", user);
    dispatch({ type: REGISTER_USER, payload: resulte.data }); //{user,msg,token}
    return navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const resulte = await axios.post("/api/users/login", user);
    dispatch({ type: LOGIN_USER, payload: resulte.data }); //{user,msg,token}

    return navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const current = () => async (dispatch) => {
  console.log(localStorage.getItem("token"));
  try {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    let result = await axios.post("/api/users/current", {}, config);
    dispatch({ type: CURRENT_USER, payload: result.data }); //{msg , user}
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  console.log("logOut");
  return {
    type: LOGOUT_USER,
  };
};

export const videErrors = () => {
  return {
    type: VIDE_ERRORS,
  };
};
export const update = (user, id, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const formData = new FormData();

    formData.append("photo", user.photo);
    formData.append("info[skill]", user["info.skill"] || undefined);
    formData.append("info[phone]", user["info.phone"] || undefined);
    formData.append("info[bio]", user["info.bio"] || undefined);
    formData.append("info[age]", user["info.age"] || undefined);

    const config = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data;",
      },
    };
    const resulte = await axios.put("/api/users/" + id, formData, config);
    dispatch({ type: UPDATE_USER, payload: resulte.data }); //{user,msg}
    navigate("/" + id);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    let result = await axios.get("/api/users/");
    dispatch({ type: GET_ALL_USER, payload: result.data }); //{msg , user}
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    await axios.delete("/api/users/" + id, config);
  } catch (error) {
    console.log(error);
  }
};
