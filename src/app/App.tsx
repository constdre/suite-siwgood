import { Box, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react'
import Home from './home/Home';
import theme from './theme';

const App = () => (
    <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
            <Box p={{ base: '1.2rem 1.5rem 1.5rem', sm: 6 }}>
                <Home />
            </Box>
        </ChakraProvider>
    </>
)
export default App;