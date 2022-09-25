import React, { ReactElement, ReactNode } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    useDisclosure,
    DrawerProps,
} from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
const NavDrawer = ({
    body,
    customIcon,
    defaultIconProps,
    footer,
    header,
    placement = 'left',
}: Pick<DrawerProps, 'placement'> & {
    body?: ReactNode,
    customIcon?: ReactElement
    footer?: ReactNode,
    header?: ReactNode,
    defaultIconProps?: {
        fontSize?: string | number,
        height?: string | number,
        width?: string | number
    }
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <IconButton
                aria-label='Show menu'
                fontSize={defaultIconProps?.fontSize}
                icon={customIcon ? customIcon : <FaBars />}
                onClick={onOpen}
                variant='ghost'
                width={defaultIconProps?.width}
                height={defaultIconProps?.height}
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