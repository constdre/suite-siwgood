import { Center, Flex, Grid, GridItem, Heading, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { ColorModeToggle } from 'suite-swgd/ColorModeToggle';
import { NavDrawer } from 'suite-swgd/NavDrawer';

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isMobileDisplay = useBreakpointValue({ base: true, sm: false });
    return (
        <>
            <Grid
                templateAreas={`"menu-icon app-title"`}
                gridTemplateColumns='20% 60%'
                alignItems='center'
            >
                <GridItem area='menu-icon'>
                    <Flex gap={{ base: 4, sm: 6 }} alignItems='center'>
                        <NavDrawer
                            header='Components'
                        />
                        <ColorModeToggle
                            colorMode={colorMode}
                            toggleColorMode={toggleColorMode}
                        />
                    </Flex>
                </GridItem>
                {!isMobileDisplay &&
                    <GridItem area='app-title'>
                        <Center>
                            <Heading
                                fontSize={{ base: '1.5rem', md: '2rem' }}
                            >Saw that it was good</Heading>
                        </Center>
                    </GridItem>
                }
            </Grid>
        </>
    )
}

export default Home;