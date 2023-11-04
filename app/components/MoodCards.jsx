import MoodCard from "./MoodCard";

function MoodCards() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:h-[85vh] lg:-mt-24 mb-16 gap-8 md:gap-8 lg:gap-0 justify-around">
      <div className="flex relative lg:w-9/12 ">
        <div className="flex flex-col w-8/12 h-64 sm:h-80 lg:h-[30rem] self-end">
          {cards.map((card, i) => (
            <MoodCard card={card} i={i} />
          ))}
        </div>
        <img
          src="https://res.cloudinary.com/danit332d/image/upload/v1697810102/beach.jpg"
          alt="img-4"
          className="clip-img-4 w-7/12 h-[13.5rem] sm:h-[17rem] lg:h-[25.5rem] absolute right-0 bottom-0 object-cover"
          style={{ objectPosition: "50% 65%" }}
        />
      </div>
      <div className=" lg:my-auto ml-8 max-w-sm lg:w-3/12 gap-3 flex flex-col mt-8">
        <h2 className="text-5xl text-primary font-handwrite ">quite here...</h2>
        <p className="text-primary font-thin text-lg tracking-wide">
          Experience the ultimate tranquility at our beachfront luxury haven.
          Book your serene escape today and unwind by the calming waves.
        </p>
        <button className="bg-primary hover:bg-sky-400 text-white w-fit p-3 md:text-lg tracking-widest">
          Book Now
        </button>
      </div>
    </div>
  );
}
export default MoodCards;

const cards = [{ name: "pool" }, { name: "food" }, { name: "spa" }];
{
}
// md:w-[27vw] p-10  md:p-6   h-full -z-10 md:pr-2 object-cover    md:absolute top-0 right-0
