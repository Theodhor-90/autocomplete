import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Story = {
    title: string
    comments: number
    author: string
    points: number
}

export const hackerNewsApiSlice = createApi({
    reducerPath: 'hackerNewsApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://hn.algolia.com/' }),
    endpoints: (builder) => ({
        searchStories: builder.query<Story [], string>({
            query: (searchTerm) => ({
                url: 'api/v1/search',
                method: 'GET',
                params: {
                    query: `"${searchTerm}"`,
                    tags: 'story',
                    hitsPerPage: 5,
                    restrictSearchableAttributes: 'title'

                }
            }),
            transformResponse: (response: any) => {
                return (
                    response?.hits.map((el: any) => {
                        return {
                            author: el.author,
                            comments: el.num_comments,
                            points: el.points,
                            title: el.title,
                        }
                    }) ?? []
                )
            },
        }),
    }),
})

export const { useSearchStoriesQuery } = hackerNewsApiSlice
