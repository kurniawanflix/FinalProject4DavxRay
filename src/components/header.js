import { Box, Button, Input, Text, useMediaQuery } from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";

const Header = ({ keywords, setKeywords, handleClickSearch }) => {
  const [isSmScreen] = useMediaQuery("(max-width:430px)");

  return (
    <Box
      bg="white"
      boxShadow="lg"
      px={["1rem", "1rem", "3rem", "5rem", "7rem"]}
      py={15}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text
        fontWeight="bold"
        children={isSmScreen ? "RCTN" : "RCTN Movie"}
        fontSize={["xl", "2xl"]}
        color="black"
      />
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Input
          bg="white"
          color="black"
          placeholder="Search movie"
          size="md"
          w={["160px", "xs", "xs", "sm"]}
          variant="outline"
          mr={[2, 5]}
          onChange={(e) => setKeywords(e.target.value)}
          value={keywords}
          onKeyPress={(e) => e.key === "Enter" && handleClickSearch()}
        />
        <Button
          onClick={() => handleClickSearch()}
          borderWidth={2}
          leftIcon={isSmScreen ? null : <ImSearch />}
          bg="black"
          color="white"
          variant="solid"
          children={isSmScreen ? <ImSearch /> : "Search"}
          px={[3, 8]}
          letterSpacing={1}
          fontWeight="semibold"
        />
      </Box>
    </Box>
  );
};

export default Header;
