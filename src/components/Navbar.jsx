// svg
import Movie from "../assets/Movie.svg";
import Menu from "../assets/Shape.svg";
import Movies from "../assets/Shape (1).svg";
import Series from "../assets/Shape (2).svg";
import Bookmark from "../assets/Bookmark.svg";
import Oval from "../assets/Oval.svg";
// react-router-dom
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className=" pt-8">
      <div className=" flex flex-col w-[96px] h-[700px] bg-[#161D2F] items-center mx-[32px] rounded-2xl">
        <div className=" mb-[70px] mt-[35px]">
          <Link to="/">
            <img src={Movie} alt="" width="32" height="25" />
          </Link>
        </div>
        <div className="flex flex-col justify-between h-[200px] mb-[300px]">
          <Link to="/">
            <img src={Menu} alt="" width="20" height="20" />
          </Link>
          <Link to="/movies">
            <img src={Movies} alt="" width="20" height="20" />
          </Link>
          <Link to="/series">
            <img src={Series} alt="" width="20" height="20" />
          </Link>
          <Link to="/bookmarks">
            <img src={Bookmark} alt="" width="20" height="20" />
          </Link>
        </div>
        <Link to="/">
          <img src={Oval} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
