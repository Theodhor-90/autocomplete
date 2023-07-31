import { FC } from 'react'
import { IBasicIcon } from '../../types/genericTypes'

export const SearchIcon: FC<IBasicIcon> = ({ fill = 'none', stroke = 'black' }) => {
    return (
        <svg
            viewBox='0 0 24 24'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
                stroke={stroke}
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M20.9984 20.9999L16.6484 16.6499'
                stroke={stroke}
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}
