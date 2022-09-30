import { ReactElement, ReactNode } from 'react'

export interface NavDrawerProps {
    body?: ReactNode,
    customIcon?: ReactElement
    iconStyles?: {},
    footer?: ReactNode,
    header?: ReactNode,
    headerStyles?: {},
    placement?: string
}

declare function NavDrawer(props: NavDrawerProps): JSX.Element;