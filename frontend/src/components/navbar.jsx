import { Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
import Logo from "./logo";
import { CiUser } from "react-icons/ci";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = ({ user }) => {
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <div className="flex justify-between items-center p-4 bg-black w-full text-sm sm:text-base px-4 border-b-2 border-gray-600">
      <div className="sm:hidden">
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                _active={{ bg: "black" }}
                _hover={{ bg: "black" }}
                bg="black"
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
                bg="rgba(64, 64, 64, 0.8)"
                color="white"
                py="4"
                px="1"
                w="screen"
                className="transition-all ease-in-out duration-200 delay-100 text-white py-4 px-1 w-screen"
              >
                {/* Categories */}
                <h1 className="p-2 text-base">Categories</h1>
                <div className="flex gap-4 overflow-x-auto border-b pb-4 border-gray-400 pt-1">
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Paintings
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Drawings
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Sculpture
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    AI / Digital
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Collage
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Printmaking
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Photography
                  </div>
                </div>

                {/* Medium */}
                <h1 className="p-2 text-white text-base">Medium</h1>
                <div className="flex gap-4 overflow-x-auto border-b pb-4 border-gray-400">
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Oil
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Charcoal
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Pencil
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Black & White
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    C-Type
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Watercolor
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Acrylic
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Pastel
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Ink
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Airbrush
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Digital
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Metal
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Bronze
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Clay
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Glass
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Wood
                  </div>
                </div>

                {/* Subject */}
                <h1 className="p-2 text-white text-base">Subject</h1>
                <div className="flex gap-4 overflow-x-auto border-b pb-4 border-gray-400">
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Portrait
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Abstract
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Landscape
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Still Life
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Nature
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Nude
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Animal
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Love
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Fantasy
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Floral
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Cartoon
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Anime
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Architechture
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Geometric
                  </div>
                </div>

                {/* Region */}
                <h1 className="p-2 text-white text-base">Region</h1>
                <div className="flex gap-4 overflow-x-auto border-b pb-4 border-gray-400">
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    African Art
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    European Art
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    American Art
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Asian Art
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Middle Eastern Art
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Latin American Art
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    Oceanic Art
                  </div>
                </div>

                {/* Discount */}
                <h1 className="p-2 text-white text-base">Discount</h1>
                <div className="flex gap-4 overflow-x-auto border-b pb-4 border-gray-400">
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    10% Off
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    15% Off
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    25% Off
                  </div>
                  <div className="bg-black rounded-3xl py-2 px-4 flex-shrink-0 flex-grow-0 hover:bg-[#593A36] active:hover:bg-[#3c2724] hover:border-black active:border-black border-2 border-[#593A36]">
                    50% Off
                  </div>
                </div>
              </MenuList>
            </>
          )}
        </Menu>
      </div>

      <Link to="/">
        <Logo />
      </Link>

      <div className=" text-white gap-4 hidden sm:flex items-center">
        {/* <Menu bg="black" _active={{ bg: "black" }}>
          <MenuButton
            _active={{ bg: "black" }}
            _hover={{ bg: "black" }}
            bg="black"
            as={Button}
          >
            <span className="text-white">Categories</span>
          </MenuButton>
          <MenuList
            className="flex flex-col gap-4 items-start px-2 bg-black bg-opacity-75"
            bg=""
          >
            <Link href="">
              <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
                Paintings
              </div>
            </Link>
            <Link href="">
              <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
                Drawings
              </div>
            </Link>
            <Link href="">
              <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
                Sculpture
              </div>
            </Link>
            <Link href="">
              <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
                AI / Digital
              </div>
            </Link>
            <Link href="">
              <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
                Collage
              </div>
            </Link>
            <Link href="">
              <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
                Photography
              </div>
            </Link>
            <Link href="">
              <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
                Printmaking
              </div>
            </Link>
          </MenuList>
        </Menu> */}
        {/* <Menu>
          <MenuButton
            _active={{ bg: "black" }}
            _hover={{ bg: "black" }}
            bg="black"
            as={Button}
          >
            <span className="text-white">Subject</span>
          </MenuButton>
          {/* <MenuList
            className="flex flex-col gap-4 items-start px-2 bg-black bg-opacity-75"
            bg=""
          >
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Portrait
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Landscape
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Abstract
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Still Life
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Nature
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Graffiti
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Nude
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Love
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Animal
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Fantasy
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Floral
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Cartoon
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Anime
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Architechture
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Geometric
            </div>
          </MenuList>
        </Menu> */}
        {/* <Menu>
          <MenuButton
            _active={{ bg: "black" }}
            _hover={{ bg: "black" }}
            bg="black"
            as={Button}
          >
            <span className="text-white">Region</span>
          </MenuButton>
          <MenuList
            className="flex flex-col gap-4 items-start px-2 bg-black bg-opacity-75"
            bg=""
          >
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              African Art
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              European Art
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              American Art
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Asian Art
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Middle Eastern Art
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Latin American Art
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              Oceanic Art
            </div>
          </MenuList>
        </Menu> */}
        {/* <Menu>
          <MenuButton
            _active={{ bg: "black" }}
            _hover={{ bg: "black" }}
            bg="black"
            as={Button}
          >
            <span className="text-white">Discounts</span>
          </MenuButton>
          <MenuList
            className="flex flex-col gap-4 items-start px-2 bg-black bg-opacity-75"
            bg=""
          >
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              10% Off
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              15% Off
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              25% Off
            </div>
            <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
              50% Off
            </div>
          </MenuList>
        </Menu> */}
      </div>
      {user && <div className="text-white"></div>}
      <div className="flex gap-2 items-center">
        {user && <div className="font-semibold">{user.full_name}</div>}

        <Menu>
          <MenuButton
            _active={{ bg: "black" }}
            _hover={{ bg: "black" }}
            bg="black"
            as={Button}
          >
            <div className="border rounded-full p-1 border-white text-white">
              <CiUser className="w-6 h-6 font-light" />
            </div>
          </MenuButton>
          {!user && (
            <MenuList
              className="flex flex-col gap-4 items-start px-2 bg-black bg-opacity-75"
              bg=""
            >
              <Link to="/login">
                <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
                  Log in
                </div>
              </Link>

              <Link to="/create-account">
                <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
                  Sign up
                </div>
              </Link>
            </MenuList>
          )}

          {user && (
            <MenuList
              className="flex flex-col gap-4 items-start px-2 bg-black bg-opacity-75"
              bg=""
            >
              <Link to="/logout">
                <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
                  Log out
                </div>
              </Link>

              <Link to="/account">
                <div className="rounded-xl hover:bg-[#593A36] hover:border border-white px-2 transition ease-in-out delay-100">
                  Account settings
                </div>
              </Link>
            </MenuList>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
