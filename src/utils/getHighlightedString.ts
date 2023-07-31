// wraps inside a <span></span> a given search term within a string
export const getHighlightedString = (entry: string, searchTerm: string) => {
    const regex = new RegExp('(' + searchTerm + ')', 'i')
    return entry.replace(regex, `<span>$1</span>`)
}
