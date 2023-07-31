import { FC } from 'react'
import { IComponentProps } from '../../types/genericTypes'

const Container: FC<IComponentProps> = ({ children, className = '' }) => {
    return <div className={`container ${className}`}>{children}</div>
}

export default Container
