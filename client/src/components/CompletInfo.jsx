import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update } from "../redux/actions/userActions";
import Input from "./Input";

export default function CompletInfo() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const data = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleUplaod = (e) => {
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(update(user, data?._id, navigate));
  };
  return (
    <>
      <h1>Complet your Info</h1>
      <div className="row">
        <div className="col">
          <Input
            label="First name"
            type="text"
            name="first_name"
            placeholder={data.first_name}
            onChange={handlechange}
          />
        </div>
        <div className="col">
          <Input
            label="Last name"
            type="text"
            name="last_name"
            placeholder={data.last_name}
            onChange={handlechange}
          />
        </div>
      </div>
      <Input
        label="Photo"
        type="file"
        name="photo"
        onChange={handleUplaod}
        accept="image/*"
      />
      <Input
        label="Age"
        type="number"
        name="info.age"
        placeholder={data?.info?.age}
        onChange={handlechange}
        max="60"
        min="20"
      />
      <Input
        label="Phone number"
        type="number"
        name="info.phone"
        placeholder={data?.info?.phone}
        onChange={handlechange}
      />
      <Input
        label="skill"
        name="info.skill"
        placeholder={data?.info?.skill}
        onChange={handlechange}
      />
      <textarea
        className="form-control"
        name="info.bio"
        style={{ height: "145px" }}
        placeholder={data?.info?.bio}
        onChange={handlechange}
      ></textarea>
      <button className="btn btn-primary w-100 mt-4" onClick={handleClick}>
        Save
      </button>
    </>
  );
}
