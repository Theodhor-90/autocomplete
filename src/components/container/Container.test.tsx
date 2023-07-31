import { render, screen } from '@testing-library/react'
import Container from './Container'
import Button from '../button/Button'

const mockedClassName = 'testing-class'

describe('<Container />', () => {
    test('correctly renders children', () => {
        render(
            <Container>
                <Button text='button' />
            </Container>
        )
        expect(screen.getByRole('button')).toBeTruthy()
    })
    test('correctly receives and renders { className } prop', () => {
        const { container } = render(
            <Container className={mockedClassName}>
                <Button text='button' />
            </Container>
        )
        expect(container.querySelector(`.${mockedClassName}`)).toBeTruthy()
    })
})
