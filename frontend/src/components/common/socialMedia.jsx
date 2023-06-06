import ButtonPrimary from "./buttonPrimary";
import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex flex-col items-start">
      <div>
        <h1 className="font-bold text-lg">Join the Community</h1>
      </div>
      <div className="flex gap-2 flex-wrap">
        <ButtonPrimary label={<FaTwitter />} />
        <ButtonPrimary label={<FaFacebook />} />
        <ButtonPrimary label={<FaInstagram />} />
        <ButtonPrimary label={<FaDiscord />} />
        <ButtonPrimary label={<FaTiktok />} />
        <ButtonPrimary label={<FaYoutube />} />
        <ButtonPrimary label={<FaEnvelope />} />
      </div>
    </div>
  );
};

export default SocialMedia;
