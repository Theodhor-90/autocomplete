import { useEffect, useRef } from "react"
import { injectHighlightedHtml } from "./injectHighlightedHtml"
import { mockedEntry, mockedResult, mockedTerm } from "./mocks"
import { render } from "@testing-library/react"

test('should inject correctly given html, ', () => {
    
    const Test = () => {
        const ref = useRef(null as null | HTMLDivElement)
        useEffect(() => {
            injectHighlightedHtml(ref, mockedEntry, mockedTerm)
        }, [])
        return(
            <div id="test" ref={ref}>
    
            </div>
        )
    }
    const {container} = render(<Test />)
    expect(container.querySelector('#test')?.innerHTML).toEqual(mockedResult)
})