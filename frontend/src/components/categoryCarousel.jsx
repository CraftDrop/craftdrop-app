import React from "react";
import { Select } from "@chakra-ui/react";

const CategoryCarousel = ({ handleSelect, selected }) => {
  return (
    <div className="flex items-center overflow-x-auto px-4 lg:px-8 gap-4">
      <div className="max-w-[8rem] flex-shrink-0 flex-grow-0 ">
        <Select
          bg=""
          className="bg-gray-800 bg-opacity-75"
          variant="fill"
          placeholder="Category"
          value={selected}
          name="category"
          onChange={(e) => handleSelect(e.target.value, e.target.name)}
        >
          <option value="paintings">Paintings</option>
          <option value="drawings">Drawings</option>
          <option value="sculpture">Sculpture</option>
          <option value="digital">AI / Digital</option>
          <option value="collage">Collage</option>
          <option value="chotography">Photography</option>
          <option value="printmaking">Printmaking</option>
        </Select>
      </div>

      <div className="max-w-[11rem] flex-shrink-0 flex-grow-0 ">
        <Select
          bg=""
          className="bg-gray-800 bg-opacity-75"
          variant="fill"
          placeholder="Subject"
          value={selected}
          name="subject"
          onChange={(e) => handleSelect(e.target.value, e.target.name)}
        >
          <option value="Portrait">Portrait</option>
          <option value="Abstract">Abstract</option>
          <option value="Landscape">Landscape</option>
          <option value="Still life">Still Life</option>
          <option value="Nature">Nature</option>
          <option value="Nude">Nude</option>
          <option value="Love">Love</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Floral">Floral</option>
          <option value="Animal">Animal</option>
          <option value="Cartoon">Cartoon</option>
          <option value="Anime">Anime</option>
          <option value="Geometric">Geometric</option>
          <option value="Architechture">Architechture</option>
        </Select>
      </div>

      <div className="max-w-[10rem] flex-shrink-0 flex-grow-0 ">
        <Select
          bg=""
          className="bg-gray-800 bg-opacity-75"
          variant="fill"
          placeholder="Region"
          value={selected}
          name="region"
          onChange={(e) => handleSelect(e.target.value, e.target.name)}
        >
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="America">America</option>
          <option value="Middle East">Middle East</option>
          <option value="Latin America">Latin America</option>
          <option value="Oceania">Oceania</option>
        </Select>
      </div>

      <div className="max-w-[11rem] flex-shrink-0 flex-grow-0">
        <Select
          bg=""
          className="bg-gray-800 bg-opacity-75"
          variant="fill"
          placeholder="Discount"
          value={selected}
          name="discount"
          onChange={(e) => handleSelect(e.target.value, e.target.name)}
        >
          <option value="10">10% Off</option>
          <option value="15">15% Off</option>
          <option value="25">25% Off</option>
          <option value="30">30% Off</option>
          <option value="50">50% Off</option>
        </Select>
      </div>
    </div>
  );
};

export default CategoryCarousel;
