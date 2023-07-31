import { getHighlightedString } from './getHighlightedString'

// injects a given string as innerHtml into a component
export const injectHighlightedHtml = (
    target: React.MutableRefObject<HTMLDivElement | null>,
    payload: string,
    searchTerm: string
) => {
    target.current!.innerHTML = ''
    target.current?.insertAdjacentHTML('afterbegin', getHighlightedString(payload, searchTerm))
}
