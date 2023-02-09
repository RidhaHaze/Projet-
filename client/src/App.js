import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Contacts from "./pages/Contacts";
import AddEditContact from "./pages/AddEditContact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import Auth from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { current } from "./redux/actions/userActions";
import CompletInfo from "./components/CompletInfo";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  if (
    user?._id &&
    (!user?.info?.bio ||
      !user?.info?.phone ||
      !user?.info?.age ||
      !user?.info?.skill)
  ) {
    return (
      <>
        {" "}
        <NavBar />
        <div className="container">
          <div className="card p-4">
            <CompletInfo />
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/:id" element={<User />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/addEdit" element={<AddEditContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
