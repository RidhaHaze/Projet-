import React from "react";
import { Navbar, Container, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/userActions";

function NavBar() {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
    window.location.reload(false);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="">
        <Navbar.Brand as={Link} to="/">
          Sahali 
        </Navbar.Brand>
        <div></div>
        {user?.photo ? (
          <div>
            <button className="btn btn-primary" onClick={handleClick}>
              logout
            </button>
            <Link to={user._id}>
              <img
                src={"/users/" + user?.photo}
                height="50px"
                width="50px"
                className="rounded-circle"
                alt="avatar"
              />
            </Link>
          </div>
        ) : (
          <ButtonGroup className="text-decoration-none">
            <Link to="/auth?q=true" className="btn btn-light">
              Login
            </Link>
            <Link to="/auth?q=false" className="btn btn-light">
              Register
            </Link>
          </ButtonGroup>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;
