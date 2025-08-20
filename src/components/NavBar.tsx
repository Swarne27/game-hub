import { HStack, Image, Text, Button } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { useColorMode } from "@/components/ui/color-mode";

function NavBar() {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
      <Button variant="outline" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </HStack>
  );
}

export default NavBar;
