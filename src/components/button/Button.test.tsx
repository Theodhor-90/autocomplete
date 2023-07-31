import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"

const mockedText = 'button text'
const mockedClassName = 'special-button'
const mockedOnClick = jest.fn()

describe('<Button />', () => { 
    test('correctly receives and renders { text } prop', () => {
        render(<Button text={mockedText} />)
        expect(screen.getByText(mockedText)).toBeTruthy()
    })
    test('correctly receives and renders { className } prop', () => {
        const {container} = render(<Button className={mockedClassName} text='button' />)
        expect(container.querySelector(`.${mockedClassName}`)).toBeTruthy()
    })
    test('correctly receives and renders { disabled } prop', () => {
        const {container} = render(<Button disabled text='button' />)
        expect(container.querySelector('button')?.disabled).toBeTruthy()
    })
    test('correctly triggers { onClick } prop when clicked', () => {
        const {container} = render(<Button onClick={mockedOnClick} text='button' />)
        fireEvent.click(screen.getByRole('button'))
        expect(mockedOnClick).toBeCalled()
    })
 })