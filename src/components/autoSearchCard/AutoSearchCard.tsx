import { FC, useEffect, useRef } from 'react'
import { injectHighlightedHtml } from '../../utils/injectHighlightedHtml'
import { IComponentProps } from '../../types/genericTypes'
import plur from 'plur'

type HackerNewsCard = {
    title: string
    points: number
    author: string
    comments: number
}

export interface IAutoSearchCardProps extends IComponentProps {
    data: HackerNewsCard
    searchTerm: string
}

const AutoSearchCard: FC<IAutoSearchCardProps> = ({ data, searchTerm }) => {
    const titleRef = useRef(null as null | HTMLDivElement)
    const authorRef = useRef(null as null | HTMLDivElement)

    useEffect(() => {
        // highlights the searchterm in the title or author
        injectHighlightedHtml(titleRef, data.title, searchTerm)
        injectHighlightedHtml(authorRef, data.author, searchTerm)
    }, [data])
    return (
        <div
            className='auto-search-card'
            tabIndex={0}
        >
            <div
                className='auto-search-title'
                ref={titleRef}
            >{data.title}</div>
            <div className='auto-search-info'>
                <div>{`${data.points} ${plur('point',data.points)}`}</div>
                <div ref={authorRef}>{`by ${data.author}`}</div>
                <div>{`${data.comments} ${plur('comment', data.comments)}`}</div>
            </div>
        </div>
    )
}

export default AutoSearchCard
