import data from "../en";
import Room from "./Room";

async function Rooms() {
  return (
    <div className="md:w-11/12 my-10 mx-auto before:absolute before:inset-y-0 before:right-0 before:z-20 before:w-1/12 before:bg-gradient-to-r before:from-transparent relative before:to-white before:scale-110 after:absolute after:left-0 after:z-20 after:w-1/12 after:bg-gradient-to-l after:from-transparent after:to-white after:scale-110 mt-10 after:h-5/6 after:bottom-0 overflow-hidden">
      <h1 className="text-5xl px-12 text-primary font-light m-4">our rooms</h1>
      <div className="flex overflow-x-scroll md:gap-8 px-16 py-10 snap-x ">
        {data.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}

export default Rooms;
