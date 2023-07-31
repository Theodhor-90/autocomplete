import { useState, useEffect } from 'react'

export const useDebounce = (entry: string, timer: number = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(entry)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(entry)
        }, timer)

        return () => {
            clearTimeout(handler)
        }
    }, [entry, timer])

    return debouncedValue
}
