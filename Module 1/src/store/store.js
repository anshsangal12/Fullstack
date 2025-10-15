import { configureStore, createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: { name: 'Guest' },
  reducers: {
    setUser: (state, action) => { state.name = action.payload }
  }
})

export const { setUser } = userSlice.actions
export const store = configureStore({ reducer: { user: userSlice.reducer } })