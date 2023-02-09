import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import Offcanvas from "react-bootstrap/Offcanvas";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/actions/userActions";

export default function EditDrawer() {
  const data = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [user, setUser] = useState(data);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleUplaod = (e) => {
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(update(user, data?._id, window.location.reload));
    window.location.reload(false);

    handleClose();
  };
  return (
    <>
      <button
        className="btn btn-outline-primary align-self-baseline"
        onClick={handleShow}
      >
        <BsFillPencilFill />
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
            placeholder={data.info.age}
            onChange={handlechange}
            max="60"
            min="20"
          />
          <Input
            label="Phone number"
            type="number"
            name="info.phone"
            placeholder={data.info.phone}
            onChange={handlechange}
          />
          <Input
            label="skill"
            name="info.skill"
            placeholder={data.info.skill}
            onChange={handlechange}
          />
          <textarea
            className="form-control"
            name="info.bio"
            style={{ height: "145px" }}
            placeholder={data.info.bio}
            onChange={handlechange}
          ></textarea>
          <button className="btn btn-primary w-100 mt-4" onClick={handleClick}>
            Save
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
