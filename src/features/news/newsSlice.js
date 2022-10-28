import { createSlice } from "@reduxjs/toolkit"

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        entities: [],
    },

})

export default newsSlice.reducer;