import { render, screen } from '@testing-library/react'
import AutoSearchCard from './AutoSearchCard'

const mockedStory = {
    title: 'This is a testing story',
    author: 'Author',
    comments: 10,
    points: 10,
}

const mockedTitleText = 'This is a testing st'
const mockedComments = `${mockedStory.comments} comments`
const mockedPoints = `${mockedStory.points} points`
const mockedTerm = 'oRy'

describe('<AutoSearchCard />', () => {
    test('correctly renders {title} prop', () => {
        render(
            <AutoSearchCard data={mockedStory} searchTerm={mockedTerm}/>
        )
        expect(screen.getByText(mockedTitleText)).toBeTruthy()
    })
    test('correctly renders {author} prop', () => {
        render(
            <AutoSearchCard data={mockedStory} searchTerm={mockedTerm}/>
        )
        expect(screen.getByText(mockedStory.author)).toBeTruthy()
    })
    test('correctly renders {comments} prop', () => {
        render(
            <AutoSearchCard data={mockedStory} searchTerm={mockedTerm}/>
        )
        expect(screen.getByText(mockedComments)).toBeTruthy()
    })
    test('correctly renders {points} prop', () => {
        render(
            <AutoSearchCard data={mockedStory} searchTerm={mockedTerm}/>
        )
        expect(screen.getByText(mockedPoints)).toBeTruthy()
    })
    test('correctly renders a <span> with a case insensitive match of the search term', () => {
        const {container} = render(
            <AutoSearchCard data={mockedStory} searchTerm={mockedTerm}/>
        )
        expect(container.querySelector('span')?.innerHTML.toLowerCase()).toEqual(mockedTerm.toLowerCase())
    })

})
