import { SlideDirection } from "@chakra-ui/react";
import { NavDrawerProps } from ".";

export default function getTypeSafeProps({
    placement
}: NavDrawerProps) {
    return {
        placement: placement as SlideDirection
    }
}