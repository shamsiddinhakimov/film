import movie from "../assets/Movie.svg";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
function Register() {
  let [isLoading, setisLoading] = useState(false);

  let username = useRef();
  let email = useRef();
  let password = useRef();
  let repassword = useRef();

  function Validate() {
    return true;
  }

  function handleRegister(e) {
    e.preventDefault();

    let isValidate = Validate();

    if (isValidate) {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      setisLoading(true);
      fetch(`${import.meta.env.VITE_AUTH_API}signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify(user),
      })
        .than(res => res.json())
        .than(data => {
          console.log(data);
        })
        .catch(err => console.log(err))
        .finally(() => {
          setisLoading(false);
        });
    }
  }
  return (
    <div className=" w-[400px] m-auto  h-[100vh] flex flex-col justify-center">
      <div className=" flex justify-center mb-10">
        <img src={movie} alt="logo" width="32px" height="25px" />
      </div>
      <form className="rf rounded-[15px] flex flex-col gap-6  ">
        <h3 className="font-normal text-3xl mb-[40px]">Sign up</h3>
        <input
          ref={username}
          className="focus:outline-none"
          type="text"
          placeholder="Username"
        />
        <input
          ref={email}
          className="focus:outline-none"
          type="email"
          placeholder="Email address"
        />
        <input
          ref={password}
          className="focus:outline-none"
          type="password"
          placeholder="Password"
        />
        <input
          ref={repassword}
          className="focus:outline-none"
          type="password"
          placeholder="Repeat password"
        />
        <button onClick={handleRegister} disabled={isLoading ? true : false}>
          {isLoading ? "Loading..." : "Create account"}
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
