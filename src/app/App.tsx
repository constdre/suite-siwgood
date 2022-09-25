import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import Home from './home/Home';
import theme from './theme';

const App = () => (
    <>
        <ChakraProvider theme={theme}>
            <Home />
        </ChakraProvider>
    </>
)
export default App;