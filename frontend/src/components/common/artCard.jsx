const ArtCard = ({ artData }) => {
  const { title, medium, price, image } = artData;
  return (
    <div className="flex flex-col gap-4 items-center rounded-lg relative w-[20rem] transform transition hover:scale-105 ease-in-out duration-500 overflow-hidden">
      <div className=" rounded-lg">
        <img className=" h-[20rem] object-cover" src={image} alt="" />
      </div>
      <div className="flex flex-col absolute bottom-0 bg-gray-400 w-full bg-opacity-30 px-4">
        <h1 className="font-bold">{title}</h1>
        <div className="italic text-sm">{medium}</div>
        <div className="font-bold">{price}</div>
      </div>
    </div>
  );
};

export default ArtCard;
