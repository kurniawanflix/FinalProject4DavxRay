/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Skeleton, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import MovieCard from "../../components/movie-card";
import Footer from "../../components/footer";
import { getMovieByTitle } from "../../service/movie-services";

const Home = () => {
  const toast = useToast();
  const [movies, setMovies] = useState([]);
  const [keywords, setKeywords] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClickSearch = () => {
    getMovies();
    setKeywords("");
  };

  const getMovies = async () => {
    setLoading(true);
    const params = keywords ? keywords : "man";
    const response = await getMovieByTitle(params);
    if (response.isError) {
      setLoading(false);
      return toast({
        title: "Movie not found.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    setMovies(response.data);
    setLoading(false);
    toast({
      title: "Movie found.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Box>
      <Header
        keywords={keywords}
        setKeywords={setKeywords}
        handleClickSearch={handleClickSearch}
      />
      <Box
        px={["1rem", "1rem", "2rem", "5rem", "7rem"]}
        py={["1.5rem", "3.5em"]}
      >
        <Text
          children="Movie list"
          fontSize="xl"
          fontWeight="semibold"
          textAlign="center"
        />
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          flexWrap="wrap"
          justifyContent={["center", "center", "center", "center"]}
          my={["0.5rem", "2rem"]}
        >
          {loading ? (
            <Stack direction="row" spacing="3rem">
              <Skeleton w="250px" h="350px" />
              <Skeleton w="250px" h="350px" />
              <Skeleton w="250px" h="350px" />
              <Skeleton w="250px" h="350px" />
            </Stack>
          ) : (
            movies.map((movie, idx) => (
              <MovieCard
                key={idx}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
              />
            ))
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
