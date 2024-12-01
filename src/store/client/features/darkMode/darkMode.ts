import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
// Define a type for the slice state
interface DarkModeState {
    value: boolean
}

const initialVal = localStorage.getItem('darkMode') === 'true' ? true : false

// Define the initial state using that type
const initialState: DarkModeState = {
  value: initialVal || true,
}

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectDarkMode = (state: RootState) => state.darkMode.value

export default darkModeSlice.reducer