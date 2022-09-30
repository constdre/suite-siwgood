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

const NavDrawer = ({
    body,
    customIcon,
    iconStyles = {
        fontSize: ['1.5rem'],
        height: ['3rem'],
        width: ['4rem']
    },
    footer,
    header,
    headerStyles = {
        fontSize: {
            base: '1.8rem',
            md: '2rem',
        }
    },
    placement = 'left'
}: NavDrawerProps) => {

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
                placement={placement}
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