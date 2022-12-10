export const responseParser = (response) => {
  console.log(response);
  return {
    isError: response.data.Error ? true : false,
    data: response.data.Search,
  };
};
