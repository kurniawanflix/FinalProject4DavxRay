/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Skeleton, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
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
    </Box>
  );
};

export default Home;
