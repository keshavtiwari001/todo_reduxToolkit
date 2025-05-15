import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk(
    'users/fetchUsers', 
    async()=>{
        const response = await fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .catch(error =>{
            console.log("error fetching data : ", error);
            return error;
        })
        return response;
    }
)

const initialState = {
    data : [],
    loading : false,
    error : null,
}

export const getAllUsers = createSlice({
    name : 'getUsers',
    initialState,
    extraReducers: (builder ) =>{
        builder.addCase(fetchUsers.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action )=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.error.message;
        } )
    }
})

export {fetchUsers};
export default getAllUsers.reducer;