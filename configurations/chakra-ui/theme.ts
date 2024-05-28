import { StyleFunctionProps, color, extendTheme } from "@chakra-ui/react";

const baseTheme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        h: "100dvh",
        color: "rgb(51, 51, 51)",
        lineHeight: "1.5em",
        fontWeight: 400,
        fontSize: "14px",
        fontFamily: `'Roboto', sans-serif`,
      }
    })
  }
})

export default baseTheme;