export interface ColorModeToggleProps {
    colorMode: string,
    toggleColorMode: () => void,
    style?: any
}

declare function ColorModeToggle(props: ColorModeToggleProps): JSX.Element