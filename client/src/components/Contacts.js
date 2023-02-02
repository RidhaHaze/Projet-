import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../redux/actions/contactActions";

function Contacts() {
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div>
      {contacts.map((contact, i) => (
        <h1 key={i}>{contact.name}</h1>
      ))}
    </div>
  );
}

export default Contacts;
