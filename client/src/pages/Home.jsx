import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import { getAllUsers } from "../redux/actions/userActions";

function Home() {
  const users = useSelector((state) => state.userReducer?.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div className="container mt-4">
      <div className="row">
        {users?.map((user) => (
          <div className="col-md-4 mb-4" key={user._id}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
