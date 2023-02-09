import axios from "axios";
import { GET_CONTACTS } from "../types/contactTypes";

export const getContacts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/contacts/allContacts");
    console.log(res.data);
    dispatch({ type: GET_CONTACTS, payload: res.data.contacts });
  } catch (error) {
    console.log(error);
  }
};

export const addContact = (formData) => async (dispatch) => {
  try {
    await axios.post("/api/contacts/addContact", formData);
    dispatch(getContacts());
  } catch (error) {
    console.log(error);
  }
};
