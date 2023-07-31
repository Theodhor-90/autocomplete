import { fireEvent, prettyDOM, render } from '@testing-library/react'
import Input, { TChangeInputEvent } from './Input'
import { SearchIcon } from '../icons/SearchIcon'
import { useState } from 'react'

const mockedPlaceholder = 'Search'
const mockedValue = 'test'
const changedMockedValue = 'testing'

const MockedInput = () => {
    const [value, setValue] = useState(mockedValue)
    const changeValue:TChangeInputEvent = e => {
        setValue(e.target.value)
    }
    return (
        <Input
            placeholder={mockedPlaceholder}
            value={value}
            onChange={changeValue}
            icon={SearchIcon}
        />
    )
}

describe('<Input />', () => {
    test('correctly renders {placeholder} prop', () => {
        const { container } = render(
            <MockedInput />
        )
        const targetInput = container.querySelector('input')
        expect(targetInput?.placeholder).toEqual(mockedPlaceholder)
    })
    test('correctly renders {value} prop', () => {
        const { container } = render(
            <MockedInput />
        )
        const targetInput = container.querySelector('input')
        expect(targetInput?.value).toEqual(mockedValue)
    })
    test('correctly triggers {onChange} prop', () => {
        const { container } = render(
            <MockedInput />
        )
        const targetInput = container.querySelector('input')
        if (targetInput) fireEvent.change(targetInput, { target: { value: changedMockedValue } })
        expect(targetInput?.value).toEqual(changedMockedValue)
    })
    test('correctly renders {icon} prop', () => {
        const { container } = render(
            <MockedInput />
        )
        expect(container.querySelector('.icon-container')).toBeTruthy()
    })
})
