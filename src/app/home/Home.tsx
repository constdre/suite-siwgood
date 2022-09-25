import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { NavDrawer } from 'suite-siwg/NavDrawer';

const Home = () => {
    return (
        <Flex justifyContent={'space-between'}>
            <NavDrawer
                header='Component'
            />
            <Heading m={'0 auto'}>Suite SWGD</Heading>
        </Flex>
    )
}

export default Home;