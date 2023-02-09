import React from "react";
import Rate from "../components/Rate";
import Moment from "react-moment";
import EditDrawer from "../components/EditDrawer";
import DeleteButton from "../components/DeleteButton";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function User() {
  const user = useSelector((state) => state.userReducer.user);
  const { id } = useParams();
  if (user?._id !== id) {
    return <NotFound />;
  }

  return (
    <div className="container">
      <div className="card p-3 my-4">
        <div className="d-flex mb-3  justify-content-between">
          <div className="d-flex ">
            <img
              className="me-4"
              src={"/users/" + user.photo}
              width="70"
              height="70"
              alt="avatar"
            />
            <div className="d-flex flex-column">
              <span>
                {user.first_name} {user.last_name}
              </span>
              <span className="text-black-50">{user.info.skill}</span>
              <Rate readOnly={true} />
            </div>
          </div>
          <div>
            <EditDrawer />
            <DeleteButton id={user?._id} />
          </div>
        </div>
        <h6>{user.info.bio}</h6>
      </div>
      <div className="card p-3">
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex">
            <img
              className="me-4"
              src="https://i.imgur.com/ccMhxvC.png"
              width="70"
              alt="avatar"
            />
            <div className="d-grid flex-column">
              <span className="">Seif Allah</span>
              <Rate readOnly={true} />
            </div>
          </div>
          <Moment fromNow interval={30}>
            {Date.now()}
          </Moment>
        </div>
      </div>
    </div>
  );
}
