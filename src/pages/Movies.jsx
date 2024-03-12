import Navbar from "../components/Navbar";
import Card from '../components/CArd'
function Movies() {
  return (
    <div className="flex flex-col">
      <Navbar />
    
        <div className="flex flex-wrap w-[1500px] justify-center ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        
      </div>
    </div>
  );
}

export default Movies;
