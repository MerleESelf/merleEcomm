import axios from 'axios'
import history from '../history'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


// thunks
export const me = createAsyncThunk(
    'auth/me',
    async () => {
        try {
            const token = window.localStorage.getItem(TOKEN)
            if (token) {
                const res = await axios.get('/auth/me', {
                    headers: {
                        authorization: token
                    }
                })
            }
            return res.data
        } catch (err) {
            console.log(err)
        }
    }
)

export const authenticate = createAsyncThunk(
    'auth/authenticate',
    async userData => {
        try {
            const { username, userpassword, method } = userData
            const res = await axios.post(`/auth/${method}`, { username, userpassword })
            window.localStorage.setItem(TOKEN, res.data.token)
            dispatch(me())
        } catch (authError) {
            console.log(authError)
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    () => {
        window.localStorage.removeItem(TOKEN)
        history.push('/login')
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: {},
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(me.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(me.fulfilled, (state, action) => {
            state.status = 'succeded'
            return action.payload
        })
        builder.addCase(me.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        builder.addCase(logout.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            state.status = 'succeded'
            state.value = {}
        })
    }
})

export const { setAuth } = authSlice.actions
export default authSlice.reducer
