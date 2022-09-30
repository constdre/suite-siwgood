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
    footer,
    header,
    placement = 'left'
}: NavDrawerProps) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <IconButton
                aria-label='Show menu'
                icon={customIcon ? customIcon : <FaBars />}
                onClick={onOpen}
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
                    <DrawerHeader>{header}</DrawerHeader>
                    <DrawerBody>{body}</DrawerBody>
                    <DrawerFooter>{footer}</DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default NavDrawer;