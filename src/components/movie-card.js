import { Box, Image } from "@chakra-ui/react";
import React from "react";

const MovieCard = ({ title, year, poster }) => {
  return (
    <Box p={["1em", "1em", "1em", "1em", "1.5em"]}>
      <Box boxShadow="md" w="250px" objectFit="contain" position="relative">
        <Image src={poster} fit="cover" w="full" h="400px" alt="movie-title" />
        <Box
          py="5px"
          minHeight="60px"
          position="absolute"
          bottom={0}
          w="full"
          fontSize="md"
          color="white"
          fontWeight="semibold"
          bg="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          children={`${title} (${year})`}
        />
      </Box>
    </Box>
  );
};

export default MovieCard;
