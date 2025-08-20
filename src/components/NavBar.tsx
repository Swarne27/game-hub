import { HStack, Image } from "@chakra-ui/react";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

import logo from "../assets/logo.webp";

function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>{children}</ColorModeProvider>
        <ColorModeButton />
        {children}
      </ChakraProvider>
    </HStack>
  );
}

export default NavBar;
