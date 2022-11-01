import {
  Box,
  BoxProps,
  defineStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";

interface CardProps extends BoxProps {
  variant?: "rounded" | "smooth";
}

const CardStyleConfig = defineStyleConfig({
  // The styles all Cards have in common
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    background: "white",
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: 8,
      borderRadius: "xl",
      boxShadow: "xl",
    },
    smooth: {
      padding: 6,
      borderRadius: "base",
      boxShadow: "md",
    },
  },
  // The default variant value
  defaultProps: {
    variant: "smooth",
  },
});

function Card(props: CardProps) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />;
}

export { Card, CardStyleConfig };
