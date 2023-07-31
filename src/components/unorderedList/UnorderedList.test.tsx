import { render, screen } from '@testing-library/react'
import UnorderedList from './UnorderedList'
import Button from '../button/Button'

const mockedClassName = 'testing-class'

describe('<UnorderedList />', () => {
    test('correctly renders children', () => {
        render(
            <UnorderedList>
                <Button text='button' />
            </UnorderedList>
        )
        expect(screen.getByRole('button')).toBeTruthy()
    })
    test('correctly receives and renders { className } prop', () => {
        const { container } = render(
            <UnorderedList className={mockedClassName}>
                <Button text='button' />
            </UnorderedList>
        )
        expect(container.querySelector(`.${mockedClassName}`)).toBeTruthy()
    })
})