import { FC } from 'react'
import { IComponentProps } from '../../types/genericTypes'

export type TChangeInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => void

interface IInputProps extends IComponentProps {
    placeholder?: string
    icon?: React.ComponentType | null
    value: string
    onChange: TChangeInputEvent
}

const Input: FC<IInputProps> = ({ placeholder = '', icon = null, value, onChange }) => {
    const Icon = icon
    return (
        <div className='input-container'>
            <input
                type='text'
                value={value}
                onChange={(e) => onChange(e)}
                placeholder={placeholder}
            />
            {Icon ? (
                <div className='icon-container'>
                    <Icon />
                </div>
            ) : null}
        </div>
    )
}

export default Input
