import http from "./http";

export const getMovieByTitle = async (keywords) => {
  const response = await http.get(`?s=${keywords}`);
  return response;
};
