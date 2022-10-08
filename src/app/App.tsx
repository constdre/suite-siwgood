import { Box, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react'
import Body from './Body';
import Header from './Header';
import theme from './theme';

const App = () => (
    <>
        <React.StrictMode>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>
                <Box p={{ base: '1.2rem 1.5rem 1.5rem', sm: 6 }}>
                    <Header />
                    <Body />
                </Box>
            </ChakraProvider>
        </React.StrictMode>
    </>
)
export default App;