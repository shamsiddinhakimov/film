import movie from "../assets/Movie.svg";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className=" w-[400px] m-auto  h-[100vh] flex flex-col justify-center">
      <div className="mb-10 flex justify-center">
        <img src={movie} alt="logo" width="32px" height="25px" />
      </div>
      <form className="rf rounded-[15px]">
        <h3 className="font-normal text-3xl mb-[40px]">Sign up</h3>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="Repeat password" />
        <button>Create an account</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
