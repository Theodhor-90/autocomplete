import { fireEvent, render, waitFor } from '@testing-library/react'
import AutoSearch from './AutoSearch'
import { Provider } from 'react-redux'
import store from '../../store/store'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { stories } from './mocks'

const handlers = [
    rest.get('https://hn.algolia.com/api/v1/search', (req, res, ctx) => {
        console.log(stories)
        return res(
            ctx.json({
                hits: stories,
            })
        )
    }),
]

const server = setupServer(...handlers)

beforeAll(() => {
    server.listen()
})

afterEach(() => {
    server.resetHandlers()
})

afterAll(() => {
    server.close()
})

describe('<AutoSeach />', () => {
    test('does NOT render the dropdown on mount', () => {
        const { container } = render(
            <Provider store={store}>
                <AutoSearch />
            </Provider>
        )
        expect(container.querySelector('.unordered-list')).toBeFalsy()
    })
    test('does NOT render the dropdown on search term length less than 3', async () => {
        const { container } = render(
            <Provider store={store}>
                <AutoSearch />
            </Provider>
        )
        const targetInput = container.querySelector('input')
        if (targetInput) fireEvent.change(targetInput, { target: { value: 'aa' } })
        await waitFor(() => {
            expect(container.querySelector('.unordered-list')).toBeFalsy()
        })
    })
    test('does render correctly the dropdown on search term is greater than or equal to 3', async () => {
        const { container } = render(
            <Provider store={store}>
                <AutoSearch />
            </Provider>
        )
        const targetInput = container.querySelector('input')
        if (targetInput) fireEvent.change(targetInput, { target: { value: 'aaa' } })
        await waitFor(() => {
            expect(container.querySelector('.unordered-list')).toBeTruthy()
        })
    })
    test('does render correctly 5 stories if search term is greater than or equal to 3 ', async () => {
        const { container } = render(
            <Provider store={store}>
                <AutoSearch />
            </Provider>
        )
        const targetInput = container.querySelector('input')
        if (targetInput) fireEvent.change(targetInput, { target: { value: 'aaa' } })
        await waitFor(() =>
            expect(container.querySelectorAll('.auto-search-card').length).toEqual(5)
        )
    })
})
