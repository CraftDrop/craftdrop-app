import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  VisuallyHidden,
} from "@chakra-ui/react";
import Logo from "./logo";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="sm:hidden">
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                {isOpen ? "Close" : "Open"}
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem onClick={() => alert("Kagebunshin")}>
                  Create a Copy
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </div>

      <Logo />

      <ul className="flex gap-4 items-center invisible w-0 h-0 sm:visible sm:w-fit sm:h-fit">
        <li>Log in</li>
        <li>Create account</li>
        <li>Contact Us</li>
      </ul>

      <div className="border rounded-full p-1 border-black">
        <CiUser className="w-6 h-6 font-light" />
      </div>
    </div>
  );
};

export default Navbar;
