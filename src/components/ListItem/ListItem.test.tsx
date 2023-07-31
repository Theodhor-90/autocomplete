import { render, screen } from '@testing-library/react'
import ListItem from './ListItem'
import Button from '../button/Button'

const mockedClassName = 'testing-class'

describe('<ListItem />', () => {
    test('correctly renders children', () => {
        render(
            <ListItem>
                <Button text='button' />
            </ListItem>
        )
        expect(screen.getByRole('button')).toBeTruthy()
    })
    test('correctly receives and renders { className } prop', () => {
        const { container } = render(
            <ListItem className={mockedClassName}>
                <Button text='button' />
            </ListItem>
        )
        expect(container.querySelector(`.${mockedClassName}`)).toBeTruthy()
    })
})
