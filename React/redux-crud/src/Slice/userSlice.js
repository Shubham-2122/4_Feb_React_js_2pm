import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// readuser
export const readuser = createAsyncThunk(
    'readuser',async(data,{rejectWithValue})=>{
        try {
            const res = await axios.get("http://localhost:3000/users")
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue
        }
    }
)

// creaete 
export const createuser = createAsyncThunk(
    'createuser',async(data,{rejectWithValue})=>{
        try {
            const res = await axios.post("http://localhost:3000/users",data)     
            const result = await res.data
            return result       
        } catch (error) {
            return rejectWithValue
        }
    }
)

export const userSlice = createSlice({
    name:"userDetails",
    initialState : {
        loading : true,
        users : [],
        error : ""        
    },
    reducers:{
        userPending:(state,action)=>{
            state.loading = true;
        },
        userFullfiled:(state,action)=>{
            state.loading = false;
            state.users.push(action.payload)
        },
        userRejected:(state,action)=>{
            state.loading = false;
            state.error = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(readuser.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(readuser.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
        })
        .addCase(readuser.rejected,(state,action)=>{
            state.loading = false
            state.error = ""
        })
        // create

         .addCase(createuser.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(createuser.fulfilled,(state,action)=>{
            state.loading = false
            state.users.push(action.payload)
        })
        .addCase(createuser.rejected,(state,action)=>{
            state.loading = false
            state.error = ""
        })
    }
})

export const {userPending,userFullfiled,userRejected} = userSlice.actions

export default userSlice.reducer;