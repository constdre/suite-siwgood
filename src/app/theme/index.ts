import { extendTheme } from "@chakra-ui/react";

const theme = {
    config: {
        initialColorMode: 'light',
        useSystemColorMode: true,
    },
    styles: {
        global: {
            '#app-root': {
                p: 4
            }
        }
    }
}

export default extendTheme(theme);