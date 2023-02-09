import React from "react";
import Login from "../components/Login";
import { useSearchParams } from "react-router-dom";
import Register from "../components/Register";

export default function Auth() {
  const [searchParams] = useSearchParams();

  return (
    <div className="container d-flex justify-content-center align-item-center h-100">
      <div className="row d-flex justify-content-center w-50">
        <div className="col">
          {searchParams.get("q") === "true" ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
}
