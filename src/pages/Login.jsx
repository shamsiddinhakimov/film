import movie from "../assets/Movie.svg";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
function Login() {
  let [isLoading, setisLoading] = useState(false);
  let navigate = useNavigate();
  let username = useRef("");
  let password = useRef("");

  function Validate() {
    return true;
  }

  function handleLogin(e) {
    e.preventDefault();

    const isValidate = Validate();

    if (isValidate) {
      const user = {
        username: username.current.value,
        password: password.current.value,
      };
      setisLoading(true);
      fetch(`${import.meta.env.VITE_AUTH_API}signin`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify(user),
      })
        .then((data) => data.json())
        .then((data) => {
          if (data.id) {
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("user", JSON.stringify(data));
            navigate('/');
          }
          if (
            data.massage == "User Not found." ||
            data.massage == "Invalid Password!"
          ) {
            alert(data.massage);
            return;
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setisLoading(false);
          navigate('/')
        });
    }
  }
  return (
    <div className=" w-[400px] m-auto  h-[100vh] flex flex-col justify-center">
      <div className=" flex justify-center mb-10">
        <img src={movie} alt="logo" width="32px" height="25px" />
      </div>
      <form className="rf rounded-[15px] flex flex-col gap-6  ">
        <h3 className="font-normal text-3xl mb-[40px]">Sign In</h3>
        <input
          ref={username}
          className="focus:outline-none"
          type="text"
          placeholder="Username"
        />

        <input
          ref={password}
          className="focus:outline-none"
          type="password"
          placeholder="Password"
        />

        <button onClick={handleLogin} disabled={isLoading ? true : false}>
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
      <p>
        Do not have an Account <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
