import { FC, useState } from 'react'
import Input, { TChangeInputEvent } from '../../components/input/Input'
import UnorderedList from '../../components/unorderedList/UnorderedList'
import Button from '../../components/button/Button'
import { SearchIcon } from '../../components/icons/SearchIcon'
import Container from '../../components/container/Container'
import { useDebounce } from '../../hooks/useDebounce'
import { Story, useSearchStoriesQuery } from '../../store/api/hackerNewsApiSlice'
import AutoSearchCard from '../../components/autoSearchCard/AutoSearchCard'
import ListItem from '../../components/ListItem/ListItem'

export interface IAutoSeachProps {
    debounce?: number 
}

const AutoSearch: FC<IAutoSeachProps> = ({ debounce = 750 }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedTerm = useDebounce(searchTerm, debounce)

    const isSearchTermValid = searchTerm.length > 2

    const updateSearchTerm: TChangeInputEvent = (e) => setSearchTerm(e.target.value)

    const { data: stories = [], isLoading, isError } =
        useSearchStoriesQuery(debounce ? debouncedTerm : searchTerm, {
            skip: debounce ? debouncedTerm.length < 3 : searchTerm.length < 3,
        }) || {}
    return (
        <Container>
            <div
                className='auto-search'
                aria-label='Hacker news search input'
                aria-haspopup={true}
                aria-expanded={isSearchTermValid}
            >
                <h6>Search</h6>
                <div className='auto-search-body'>
                    <div className='auto-search-content'>
                        <Input
                            placeholder='Search title'
                            value={searchTerm}
                            onChange={updateSearchTerm}
                            icon={!searchTerm.length ? SearchIcon : null}
                        />
                        {isSearchTermValid &&
                            (isError ? (
                                <div className='notification'>
                                    An error occurred when trying to fetch the data. Please try
                                    again shortly.
                                </div>
                            ) : isLoading ? (
                                <div className='notification'>Loading data...</div>
                            ) : (
                                <UnorderedList>
                                    {stories.length ? (
                                        stories.map((el, index) => (
                                            <ListItem key={`autoOption${index}`}>
                                                <AutoSearchCard
                                                    data={el}
                                                    searchTerm={searchTerm}
                                                />
                                            </ListItem>
                                        ))
                                    ) : (
                                        <div className='empty'>
                                            No stories found matching search criteria
                                        </div>
                                    )}
                                </UnorderedList>
                            ))}
                    </div>
                    <Button
                        text='SEARCH'
                        disabled={searchTerm.length < 3}
                    />
                </div>
            </div>
        </Container>
    )
}

export default AutoSearch
