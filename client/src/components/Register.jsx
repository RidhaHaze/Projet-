import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/actions/userActions";
import Input from "./Input";

export default function Register() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(register(user, navigate));
  };
  return (
    <div className="card mt-5 px-5 py-4 mb-3">
      <h5 className="card-title">Register</h5>
      <span className="border-bottom my-2"></span>
      <div className="row">
        <div className="col-6">
          <Input
            type="text"
            label="First name"
            name="first_name"
            placeholder="Jhone"
            required
            onChange={handlechange}
          />
        </div>
        <div className="col-6">
          <Input
            type="text"
            label="Last name"
            name="last_name"
            placeholder="Doe"
            onChange={handlechange}
            required
          />
        </div>
      </div>
      <Input
        type="email"
        label="Email address"
        name="email"
        placeholder="name@example.com"
        required
        onChange={handlechange}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="********"
        required
        onChange={handlechange}
      />
      <button
        onClick={handleClick}
        className="btn btn-primary btn-block btn-lg mt-1 mb-2 w-100"
      >
        Join us
      </button>
      <div className="text-muted">
        <p>
          Already have an account
          <Link to="/auth?q=true" className="btn btn-link">
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
}
