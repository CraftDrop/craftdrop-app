import { Input } from "@chakra-ui/react";
import ButtonPrimary from "./buttonPrimary";

const NewsletterBox = () => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <div>
        <h1 className="font-bold text-lg">Stay informed</h1>
      </div>
      <div className="max-w-[25rem] text-left">
        Join our mailing list to stay in the loop with the newest feature
        releases, art drops, and tips and tricks for navigating CraftDrop.
      </div>
      <div className="flex items-center gap-4">
        <div>
          <Input placeholder="large size" size="lg" />
        </div>
        <div className="flex-grow-0 flex-shrink-0">
          <ButtonPrimary label="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default NewsletterBox;
