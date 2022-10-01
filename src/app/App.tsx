import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react'
import Home from './home/Home';
import theme from './theme';

const App = () => (
    <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
            <Home />
        </ChakraProvider>
    </>
)
export default App;