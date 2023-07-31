import { getHighlightedString } from "./getHighlightedString"
import { mockedEntry, mockedResult, mockedTerm } from "./mocks"

test('correctly wraps in a span a given term matched inside a string', () => {
    expect(getHighlightedString(mockedEntry, mockedTerm)).toEqual(mockedResult)
})
