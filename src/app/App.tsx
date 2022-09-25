import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import Home from './home/Home';
const App = () => (
    <>
        <ChakraProvider>
            <Home />
        </ChakraProvider>
    </>
)
export default App;