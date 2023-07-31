type responseStory = {
    title: string
    author: string
    num_comments: number
    points: number
}

const stories: responseStory [] = []
for (let a = 1; a <= 5; a++) {
    const sotry = {
        title: `Testing story ${a}`,
        author: `Author ${a}`,
        num_comments: 10,
        points: 10,
    }
    stories.push(sotry)
}

export { stories }
