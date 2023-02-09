import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/actions/userActions";
import Input from "./Input";

export default function Login() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(login(user, navigate));
  };
  console.log(user);
  return (
    <>
      <div className="card mt-5 px-5 py-4 mb-3">
        <h5 className="card-title">Login</h5>
        <span className="border-bottom my-2"></span>
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
          className="btn btn-primary btn-block btn-lg mt-1 mb-2 w-100"
          onClick={handleClick}
        >
          Submit
        </button>
        <div className="text-muted">
          <p>
            Don't have an account
            <Link to="/auth?q=false" className="btn btn-link">
              Click here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
