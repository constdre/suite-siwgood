import { Box } from '@chakra-ui/react'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'

const Body = () => {
    return (
        <Box id='app-body'>
            <RouterProvider router={router} />
        </Box>
    )
}

export default Body