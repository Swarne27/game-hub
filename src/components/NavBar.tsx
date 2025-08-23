import { HStack, Image } from "@chakra-ui/react";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.webp";

function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>{children}</ColorModeProvider>
        <ColorModeButton />
        {children}
      </ChakraProvider>
    </HStack>
  );
}

export default NavBar;
