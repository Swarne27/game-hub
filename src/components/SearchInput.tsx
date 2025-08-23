import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup startElement={<LuSearch />} borderRadius={20}>
      <Input placeholder="Search games..." />
    </InputGroup>
  );
};

export default SearchInput;
