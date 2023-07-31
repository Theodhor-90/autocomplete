import { FC } from 'react'
import { IComponentProps } from '../../types/genericTypes'

const ListItem: FC<IComponentProps> = ({ children, className = '' }) => {
    return <li className={`list-item ${className}`}>{children}</li>
}

export default ListItem