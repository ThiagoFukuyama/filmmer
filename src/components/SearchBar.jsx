import {
  Container,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <Container maxW={"700px"} px={5}>
      <form onSubmit={onSubmit}>
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
            pl={5}
            pr={"3.5rem"}
            borderRadius={"3xl"}
            focusBorderColor={"#DD484A54"}
            value={value}
            onChange={onChange}
          />

          <InputRightElement
            children={
              <IconButton
                _hover={{ background: "none" }}
                background={"none"}
                fontSize={"1.45rem"}
                color={"#C13F6D"}
                icon={<SearchIcon />}
                type="submit"
              />
            }
            mt={1}
            mr={3}
          />
        </InputGroup>
      </form>
    </Container>
  );
};

export default SearchBar;
