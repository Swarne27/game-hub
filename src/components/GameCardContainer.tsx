import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box overflow="hidden" borderRadius={10} width="300px">
      {children}
    </Box>
  );
};

export default GameCardContainer;
