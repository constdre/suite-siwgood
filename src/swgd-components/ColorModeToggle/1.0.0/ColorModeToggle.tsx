import { Button, IconButton } from '@chakra-ui/react'
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import React from 'react'
import { ColorModeToggleProps } from '.'

const ColorModeToggle = ({
    colorMode,
    toggleColorMode,
    style = {
        fontSize: 'xl'
    }
}: ColorModeToggleProps) => {

    const defaultStyle = {
        '&:hover': {
            color: lightOrDark('blue.700', 'yellow.300'),
            transition: '.3s'
        }
    }
    return (
        <IconButton
            aria-label='Color Mode Toggle'
            icon={colorMode == 'light' ? <BsFillMoonStarsFill /> : <BsSunFill />}
            onClick={toggleColorMode}
            sx={{ ...defaultStyle, ...style }}
            variant='ghost'
        />
    )

    type lightOrDarkPropType = string | number | React.CSSProperties
    function lightOrDark(
        darkVal: lightOrDarkPropType,
        lightVal: lightOrDarkPropType) {
        return (colorMode == 'light')
            ? darkVal
            : lightVal
    }
}

export default ColorModeToggle