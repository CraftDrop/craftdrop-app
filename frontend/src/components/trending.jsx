import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tfoot,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import ButtonPrimary from "./common/buttonPrimary";
import { useState } from "react";
import ArtThumbnail from "./common/artThumbnail";

const Trending = ({ artData, artistsData }) => {
  const [artPageNumber, setArtPageNumber] = useState(1);
  const [artistPageNumber, setArtistPageNumber] = useState(1);
  const { newData: newArtData, totalPages: totalArtPages } = paginate(
    artPageNumber,
    5,
    artData
  );
  const { newData: newArtistsData, totalPages: totalArtistPages } = paginate(
    artistPageNumber,
    5,
    artistsData
  );

  const handleNextPage = (name) => {
    if (name === "Trending Arts") {
      let page = artPageNumber + 1;
      if (page <= totalArtPages) setArtPageNumber(page);
    } else {
      let page = artistPageNumber + 1;
      if (page <= totalArtistPages) setArtistPageNumber(page);
    }
  };

  const handlePreviousPage = (name) => {
    if (name === "Trending Arts") {
      let page = artPageNumber - 1;
      if (page >= 1) setArtPageNumber(page);
    } else {
      let page = artistPageNumber - 1;
      if (page >= 1) setArtistPageNumber(page);
    }
  };

  return (
    <div className="px-4 sm:px-8">
      <Tabs variant="enclosed">
        <TabList borderColor="gray.600">
          <Tab color="white">Trending</Tab>
          <Tab color="white">Top Artists</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th borderColor="gray.600">#</Th>
                      <Th borderColor="gray.600">Name</Th>
                      <Th borderColor="gray.600">Type</Th>
                      <Th borderColor="gray.600">Floor price</Th>
                      <Th borderColor="gray.600" isNumeric>
                        Bids
                      </Th>
                      <Th borderColor="gray.600" isNumeric></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {newArtData.map((art, index) => (
                      <Tr key={index} borderColor="gray.600">
                        <Td borderColor="gray.600">
                          {artData.indexOf(art) + 1}
                        </Td>
                        <Td borderColor="gray.600">
                          <div className="flex items-center gap-4">
                            <ArtThumbnail image={art.image} />
                            {art.title}
                          </div>
                        </Td>
                        <Td borderColor="gray.600">{art.medium}</Td>{" "}
                        <Td borderColor="gray.600">{art.price}</Td>
                        <Td borderColor="gray.600" isNumeric>
                          {art.bids}
                        </Td>
                        <Td borderColor="gray.600">
                          <ButtonPrimary label="Bid" />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                  <Tfoot>
                    <Pagination
                      name="Trending Arts"
                      nextPage={handleNextPage}
                      prevPage={handlePreviousPage}
                    />
                  </Tfoot>
                </Table>
              </TableContainer>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th borderColor="gray.600">#</Th>
                      <Th borderColor="gray.600">Name</Th>
                      <Th borderColor="gray.600">Location</Th>
                      <Th borderColor="gray.600" isNumeric>
                        Rating
                      </Th>
                      <Th borderColor="gray.600" isNumeric>
                        Sales
                      </Th>
                      <Th borderColor="gray.600" isNumeric></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {newArtistsData.map((artist, index) => (
                      <Tr key={index} borderColor="gray.600">
                        <Td borderColor="gray.600">
                          {artistsData.indexOf(artist) + 1}
                        </Td>
                        <Td borderColor="gray.600">
                          <div className="flex items-center gap-4">
                            <ArtThumbnail image={artist.image} />
                            {artist.name}
                          </div>
                        </Td>
                        <Td borderColor="gray.600">{artist.region}</Td>{" "}
                        <Td borderColor="gray.600" isNumeric>
                          {artist.rating}
                        </Td>
                        <Td borderColor="gray.600" isNumeric>
                          {artist.sales}
                        </Td>
                        <Td borderColor="gray.600">
                          <ButtonPrimary label="view collections" />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                  <Tfoot>
                    <Pagination
                      name="Trending Artists"
                      nextPage={handleNextPage}
                      prevPage={handlePreviousPage}
                    />
                  </Tfoot>
                </Table>
              </TableContainer>
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Trending;
