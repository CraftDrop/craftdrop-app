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
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-black w-full text-sm sm:text-base px-4">
      <div className="sm:hidden">
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                bg="black"
                _hover={{ background: "black" }}
                isActive={isOpen}
                as={Button}
              >
                <div className="p-2 bg-[#593A36] text-white rounded-full">
                  <RiMenu4Fill
                    className={`${
                      isOpen ? "transform scale-x-[-1]" : ""
                    } transition ease-in-out duration-200 delay-100 w-6 h-6`}
                  />
                </div>
              </MenuButton>
              <MenuList
                opacity="0"
                className={`${
                  isOpen ? "opacity-100" : "opacity-0"
                } transition-all ease-in-out duration-200 delay-100 bg-gray-600 bg-opacity-75 text-white py-4 px-1 w-screen`}
              >
                {/* Categories */}
                <h1 className="p-2 text-black text-base">Categories</h1>
                <div className="flex gap-4 overflow-x-auto border-b pb-4 border-gray-400">
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Paintings
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Drawings
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Sculpture
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    AI / Digital
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Collage
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Printmaking
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Photography
                  </div>
                </div>

                {/* Medium */}
                <h1 className="p-2 text-white text-base">Medium</h1>
                <div className="flex gap-4 overflow-x-auto border-b pb-4 border-gray-400">
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Oil
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Charcoal
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Pencil
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Black & White
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    C-Type
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Watercolor
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Acrylic
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Pastel
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Ink
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Airbrush
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Digital
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Metal
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Bronze
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Clay
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Glass
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Wood
                  </div>
                </div>

                {/* Subject */}
                <h1 className="p-2 text-white text-base">Subject</h1>
                <div className="flex gap-4 overflow-x-auto border-b pb-4 border-gray-400">
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Portrait
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Abstract
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Landscape
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Still Life
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Nature
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Nude
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Animal
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Love
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Fantasy
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Floral
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Fashion
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Cartoon
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Anime
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Body
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Architechture
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Geometric
                  </div>
                </div>

                {/* Region */}
                <h1 className="p-2 text-white text-base">Region</h1>
                <div className="flex gap-4 overflow-x-auto border-b pb-4 border-gray-400">
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    African Art
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    European Art
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    American Art
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Asian Art
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Middle Eastern Art
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Latin American Art
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    Oceanic Art
                  </div>
                </div>

                {/* Discount */}
                <h1 className="p-2 text-white text-base">Discount</h1>
                <div className="flex gap-4 overflow-x-auto border-b pb-4 border-gray-400">
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    10% Off
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    15% Off
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    25% Off
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724]">
                    50% Off
                  </div>
                </div>
              </MenuList>
            </>
          )}
        </Menu>
      </div>

      <Logo />

      {/* <div className=" text-white gap-4 hidden sm:flex">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Categories
          </MenuButton>
          <MenuList className="bg-gray-600 bg-opacity-75 p-2 rounded">
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36] hover:border-black hover:border px-2">
              Paintings
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36] hover:border-black hover:border px-2">
              Drawings
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36] hover:border-black hover:border px-2">
              Sculpture
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36] hover:border-black hover:border px-2">
              AI / Digital
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36] hover:border-black hover:border px-2">
              Collage
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36] hover:border-black hover:border px-2">
              Photography
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36] hover:border-black hover:border px-2">
              Printmaking
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Subject
          </MenuButton>
          <MenuList className="bg-gray-600 bg-opacity-75 p-2 rounded">
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Portrait
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Landscape
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Abstract
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Still Life
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Nature
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Graffiti
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Nude
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Love
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Animal
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Fantasy
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Floral
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Cartoon
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Anime
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Architechture
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Geometric
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Region
          </MenuButton>
          <MenuList className="bg-gray-600 bg-opacity-75 p-2 rounded">
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              African Art
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              European Art
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              American Art
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Asian Art
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Middle Eastern Art
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Latin American Art
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              Oceanic Art
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Discounts
          </MenuButton>
          <MenuList className="bg-gray-600 bg-opacity-75 p-2 rounded">
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              10% Off
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              15% Off
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              25% Off
            </MenuItem>
            <MenuItem className="hover:rounded-xl hover:bg-[#593A36]  px-2">
              50% Off
            </MenuItem>
          </MenuList>
        </Menu>

        <div>About</div>
      </div> */}

      {/* <Menu>
        <MenuButton _hover={{ background: "black" }} bg="black" as={Button}>
          <div className="border rounded-full p-1 border-white text-white">
            <CiUser className="w-6 h-6 font-light" />
          </div>
        </MenuButton>
        <MenuList className="bg-gray-600 bg-opacity-75 p-2 rounded text-white">
          <MenuItem className="hover:rounded-2xl hover:bg-[#593A36]  p-2">
            Log in
          </MenuItem>
          <MenuItem className="hover:rounded-2xl hover:bg-[#593A36]  p-2">
            Sign up
          </MenuItem>
        </MenuList>
      </Menu> */}
    </div>
  );
};

export default Navbar;
