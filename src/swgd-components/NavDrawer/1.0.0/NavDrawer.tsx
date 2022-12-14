import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    useDisclosure
} from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import { NavDrawerProps } from '.'
import getTypeSafeProps from './getTypeSafeProps'

const NavDrawer = ({
    body,
    customIcon,
    iconStyles = {
        fontSize: {
            base: '1.5rem',
            '2xl': '1.7rem'
        }
    },
    footer,
    header,
    headerStyles = {
        fontSize: {
            base: '1.5rem',
            '2xl': '1.7rem'
        }
    },
    placement = 'left'
}: NavDrawerProps) => {

    const ts = getTypeSafeProps({ placement })
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <IconButton
                aria-label='Show menu'
                icon={customIcon ? customIcon : <FaBars />}
                onClick={onOpen}
                sx={{ ...iconStyles }}
                variant='ghost'
            ></IconButton>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement={ts.placement}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader sx={{ ...headerStyles }}>{header}</DrawerHeader>
                    <DrawerBody>{body}</DrawerBody>
                    <DrawerFooter>{footer}</DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default NavDrawer;