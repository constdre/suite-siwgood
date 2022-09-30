import { DrawerProps } from '@chakra-ui/react'
import { ReactElement, ReactNode } from 'react'

export interface NavDrawerProps extends Pick<DrawerProps, 'placement'> {
    body?: ReactNode,
    customIcon?: ReactElement
    iconStyles?: {},
    footer?: ReactNode,
    header?: ReactNode,
    headerStyles?: {}
}

declare function NavDrawer(props: NavDrawerProps): JSX.Element;