import { extendTheme } from "@chakra-ui/react";
import { CardStyleConfig as Card } from "@/components/ds";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  colors,
  components: {
    Card,
  },
});

export default theme;
