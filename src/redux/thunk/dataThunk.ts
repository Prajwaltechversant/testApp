import { createAsyncThunk } from '@reduxjs/toolkit'

export const dataAPIThunk = createAsyncThunk(
    'data/fetchData',
    async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments`)
        return await response.json()
    },
)