import Logo from "./logo";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 px-12 py-8 border-t-2 border-gray-600">
      <div className="flex flex-col items-start gap-4">
        <Logo />
        <span className="text-left max-w-[20rem]">
          The world’s largest digital marketplace for unique art collectibles.
          Buy, sell, and discover exclusive artworks.
        </span>
      </div>
      <div className="flex items-center justify-between lg:justify-around">
        <div className="flex flex-col gap-2 items-start">
          <h1 className="font-bold">Marketplace</h1>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            All Artworks
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Medium
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Subject
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Region
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Discount
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Artist
          </button>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h1 className="font-bold">For Artists</h1>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            All Artworks
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Medium
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Subject
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Region
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Discount
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Artist
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between lg:justify-around">
        <div className="flex flex-col gap-2 items-start">
          <h1 className="font-bold">For Buyers</h1>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            All Artworks
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Medium
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Subject
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Region
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Discount
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Artist
          </button>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h1 className="font-bold">Marketplace</h1>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            All Artworks
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Medium
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Subject
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Region
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Discount
          </button>
          <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
            By Artist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
