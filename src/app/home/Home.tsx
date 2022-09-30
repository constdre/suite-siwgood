import { Center, Flex, Grid, GridItem, Heading, Spacer } from '@chakra-ui/react';
import React from 'react';
import { NavDrawer } from 'suite-swgd/NavDrawer';

const Home = () => {
    return (
        <>
            <Grid
                templateAreas={`"menu-icon app-title"`}
                gridTemplateColumns='20% 60%'
                alignItems='center'
            >
                <GridItem area='menu-icon'>
                    <Flex>
                        <NavDrawer
                            header='Components'
                        />
                    </Flex>
                </GridItem>
                <GridItem area='app-title'>
                    <Center>
                        <Heading>Suite SWGD</Heading>
                    </Center>
                </GridItem>
            </Grid>
        </>
    )
}

export default Home;