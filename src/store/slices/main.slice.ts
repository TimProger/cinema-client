import { createSlice } from '@reduxjs/toolkit'
import { IMainState } from '../../types/main.type'

const initialState: IMainState = {
    popular: [],
}

export const MainState = createSlice({
    name: 'main',
    initialState,
    reducers: {
        pop_add: (state, action) => {
            console.log(action)
            state.popular = [...state.popular, action.payload]
        },
    },
})

export const { pop_add } = MainState.actions

export default MainState.reducer