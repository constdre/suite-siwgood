import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { chakra } from '@chakra-ui/react'

const FaIcon = (props) => {
    const Icon = chakra(FontAwesomeIcon);
    return (
        <Icon {...props} />
    )
}

export default FaIcon;