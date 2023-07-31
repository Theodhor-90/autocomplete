import { PropsWithChildren } from "react"

export interface IComponentProps extends PropsWithChildren {
    className?: string
}

export interface IBasicIcon {
    stroke?: string
    fill?: string
}
