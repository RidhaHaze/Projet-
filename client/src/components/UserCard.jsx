import React from "react";
import ModalApp from "./Modal";
import Rate from "./Rate";

export default function UserCard({ readOnly, user }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="card p-3">
        <div className="d-flex flex-row mb-3">
          <img
            className="me-4"
            src={"/users/" + user?.photo}
            width="70"
            alt="avatar"
          />
          <div className="d-flex flex-column">
            <span>
              {user?.first_name} {user?.last_name}
            </span>
            <span className="text-black-50">{user?.info?.skill}</span>
            <Rate readOnly={true} />
          </div>
        </div>
        <h6>{user?.info?.bio}</h6>
        <div className="d-flex justify-content-between install mt-3">
          <span>Vote 172 times</span>
          <button
            className="btn btn-outline-primary"
            onClick={() => setModalShow(true)}
          >
            View&nbsp;{">"}
          </button>
        </div>
      </div>
      <ModalApp
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={user}
      />
    </>
  );
}
