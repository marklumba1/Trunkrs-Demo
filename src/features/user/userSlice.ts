import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    user: {
        email: "",
        firstName: "",
        lastName: "",
        age: "",
        id: 0
    }
}
export const userSlice = createSlice({
    name: `userSlice`,
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer