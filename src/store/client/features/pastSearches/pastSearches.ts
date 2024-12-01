import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
// Define a type for the slice state
interface PastSearchesState {
  value: string[]
}

// Define the initial state using that type
const initialState: PastSearchesState = {
  value: [],
}

export const  pastSearchesSlice = createSlice({
  name: 'pastSearches',
  initialState,
  reducers: {
    addSearch: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload)
    },
    clearSearches: (state) => {
      state.value = []
    },
  },
})

export const { addSearch, clearSearches } = pastSearchesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPastSearches = (state: RootState) => state.pastSearches.value

export default pastSearchesSlice.reducer