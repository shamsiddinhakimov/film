import Navbar from "../components/Navbar";
import Search from "../assets/search.svg";
import { useRef, useState } from "react";
import Film1 from "../assets/Reactengly.svg";
import Film2 from "../assets/Film2.svg";
import Film3 from "../assets/Film3.svg";
import Film4 from "../assets/Film4.svg";
import Film5 from "../assets/Film5.svg";
function Home() {
  let search = useRef();
  console.log(search);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_MOVIE_API}`)
  }, []);
  function handleChange(e) {
    e.preventDefault();
    console.log(search.target.value);
  }
  return (
    <div className="flex ">
      <Navbar />
      <div>
        <div className="flex mt-8 p-8 w-[100%] items-center gap-[24px] b">
          <label htmlFor="search">
            <img src={Search} alt="" />
          </label>
          <input
            className="bg-transparent border-[none] outline-none text-[24px] leading-[30px] font-normal text-left w-[500px] text-white "
            type="text"
            id="search"
            placeholder="Search for movies or TV "
            ref={search}
            onChange={handleChange}
          />
        </div>
        <div className=" p-8">
          <h2 className=" font-normal text-[32px] leading-[40px]">Trending</h2>
          <div className="carousel rounded-box">
            <div className="carousel-item ">
              <img src={Film1} alt="" />
            </div>
            <div className="carousel-item">
              <img src={Film2} alt="" />
            </div>
            <div className="carousel-item">
              <img src={Film3} />
            </div>
            <div className="carousel-item">
              <img src={Film4} />
            </div>
            <div className="carousel-item">
              <img src={Film5} />
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-normal text-[32px] leading-[40px] mb-10">
              Recommended for you
            </h2>
            <div className="flex w-[1240px] ">
              <div className="card card-compact w-96 bg-transparent shadow-xl">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="flex flex-col">
                  <h2 className="font-normal text-[18px] loading-[22px] ">
                    The Great Lands
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
