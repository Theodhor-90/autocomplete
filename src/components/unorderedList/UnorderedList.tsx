import { FC } from 'react'
import { IComponentProps } from '../../types/genericTypes'

const UnorderedList: FC<IComponentProps> = ({ children, className = '' }) => {
    return <ul className={`unordered-list ${className}`}>{children}</ul>
}

export default UnorderedList
