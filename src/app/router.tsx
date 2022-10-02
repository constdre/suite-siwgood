import React from 'react'
import { createHashRouter } from "react-router-dom";

const router = createHashRouter([
    {
        path: '/',
        element: <div>Root route</div>
    }
])

export default router