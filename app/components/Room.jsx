import Link from "next/link";
import Image from "next/image";
import Image64 from "../functions/Image64";
async function Room({ room }) {
  // const decodedRoomName = room.name.replace(/ /g, "-").toLowerCase();
  const blur64 = await Image64(room.smallImage);
  return (
    <>
      <Link
        href={`/rooms/${room.id}`}
        id={room.id}
        target="_blank"
        className={`max-w-xs lg:max-w-sm rounded-lg p-4 my-4 flex-shrink-0 snap-start scroll-m-4 snap-mandatory bg-secondary text-primary flex flex-col gap-6 ml-9 duration-500 md:hover:shadow-2xl drop-shadow-sm scroll-ml-16 `}
      >
        <h2 className="text-3xl md:text-4xl font-light">{room.name}</h2>

        <p className="font-light flex-grow">
          {room.description.substring(0, 140).replace(/\'\s\w*$/, "") + " "}
          <strong className="uppercase font-sans">read more</strong>
        </p>
        <div className="relative overflow-hidden h-48 md:h-64 w-full">
          <Image
            src={room.smallImage}
            placeholder="blur"
            blurDataURL={blur64}
            alt={room.name}
            fill={true}
            className="object-cover"
          />
        </div>
      </Link>
    </>
  );
}

export default Room;
