import {
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ value, onChange }) => {
  return (
    <Container maxW={"700px"} px={5}>
      <InputGroup>
        <Input
          type="search"
          placeholder="Search for movies, series and games..."
          _placeholder={{ opacity: 1 }}
          variant={"filled"}
          color={"lightgray"}
          shadow={"dark-lg"}
          fontSize={"lg"}
          py={6}
          pl={12}
          pr={5}
          borderRadius={"3xl"}
          focusBorderColor={"#DD484A54"}
          value={value}
          onChange={onChange}
        />

        <InputLeftElement
          children={<SearchIcon fontSize={"1.45rem"} color={"#DD4849 "} />}
          mt={1.5}
          ml={2}
        />
      </InputGroup>
    </Container>
  );
};

export default SearchBar;
