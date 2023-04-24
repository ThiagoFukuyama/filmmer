import { extendTheme } from "@chakra-ui/react";

const theme = {
    config: {
        initialColorMode: "dark",
    },
    styles: {
        global: {
            body: {
                backgroundColor: "#121212"
            }
        }
    }
}

export default extendTheme(theme)
