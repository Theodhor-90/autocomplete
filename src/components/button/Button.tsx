import { FC } from 'react'
import { IComponentProps } from '../../types/genericTypes'

export interface IButtonProps extends IComponentProps {
    text: string
    onClick?: () => void
    disabled?: boolean
}

const Button: FC<IButtonProps> = ({
    text,
    onClick = () => {},
    disabled = false,
    className = '',
}) => {
    return (
        <button
            className={`button ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
