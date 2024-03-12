import Navbar from "../components/Navbar";
import Card from '../components/CArd'
function Series() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div>
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
    </div>
  )
}

export default Series