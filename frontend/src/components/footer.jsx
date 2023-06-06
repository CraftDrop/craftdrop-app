import NewsletterBox from "./common/newsletterBox";
import SocialMedia from "./common/socialMedia";
import Logo from "./logo";

const Footer = () => {
  return (
    <div className="flex flex-col px-12 py-8 border-t-2 border-gray-600 gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 ">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <span className="text-left max-w-[20rem]">
            The world’s largest digital marketplace for unique art collectibles.
            Buy, sell, and discover exclusive artworks.
          </span>
        </div>
        <div className="flex justify-between lg:justify-around items-start">
          <div className="flex flex-col gap-2 items-center lg:items-start">
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
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h1 className="font-bold">For Artists</h1>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              Apply now
            </button>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              Why join CraftDrop?
            </button>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              FAQs
            </button>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              Artist Support
            </button>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              Terms & Conditions
            </button>
          </div>
        </div>

        <div className="flex items-start justify-between lg:justify-around">
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h1 className="font-bold">For Buyers</h1>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              Commision an Artwork
            </button>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              Personal Shopping
            </button>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              Find the Perfect Gift
            </button>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              Customer Support
            </button>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              Returns & Refunds
            </button>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              FAQs
            </button>
          </div>
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h1 className="font-bold">Company</h1>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              About
            </button>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              Blog
            </button>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              Careers
            </button>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              Contact
            </button>
            <button className="transition ease-in-out duration-300 hover:scale-101 hover:font-semibold">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-24 gap-8 items-end">
        <NewsletterBox />
        <div className="flex-grow-1">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Footer;
