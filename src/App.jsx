// react
import { useState, useEffect } from "react";
// react-router-dom
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
// pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import About from "./pages/About";
import Error from "./pages/Error";
//components

//css
import "./App.css";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("token") && location.pathname != "/register") {
      navigate("/login");
    }
  }, []);

  let navigate = useNavigate();
  let location = useLocation();
  let [token, setToken] = useState(localStorage.getItem("token"));
  function ProtectRoute({ children, redirectTo = "/login", isAuthentication }) {
    if (!isAuthentication) {
      navigate(redirectTo);
    }

    return children;
  }
  return (
    <>
      <Routes>
        {/* {public} */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        {/* {protected} */}
        <Route
          path="/"
          element={
            <ProtectRoute isAuthentication={token ? true : false}>
              <Home></Home>
            </ProtectRoute>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <ProtectRoute isAuthentication={token ? true : false}>
              <Movies></Movies>
            </ProtectRoute>
          }
        ></Route>
        <Route
          path="/series"
          element={
            <ProtectRoute isAuthentication={token ? true : false}>
              <Series></Series>
            </ProtectRoute>
          }
        ></Route>

        <Route
          path="/bookmarks"
          element={
            <ProtectRoute isAuthentication={token ? true : false}>
              <Series></Series>
            </ProtectRoute>
          }
        ></Route>

        <Route
          path="/movie/about/:id"
          element={
            <ProtectRoute isAuthentication={token ? true : false}>
              <About></About>
            </ProtectRoute>
          }
        ></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default App;
