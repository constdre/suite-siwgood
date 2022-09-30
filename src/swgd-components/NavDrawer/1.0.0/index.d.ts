import { DrawerProps } from '@chakra-ui/react'
import { ReactElement, ReactNode } from 'react'

export interface NavDrawerProps extends Pick<DrawerProps, 'placement'> {
    body?: ReactNode,
    customIcon?: ReactElement
    overrideIconStyles?: {},
    footer?: ReactNode,
    header?: ReactNode,
    headerText?: string,
    headerTextStyles?: {}
}

declare function NavDrawer(props: NavDrawerProps): JSX.Element;