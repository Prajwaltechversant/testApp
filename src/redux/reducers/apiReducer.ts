import { createSlice } from "@reduxjs/toolkit";
import { dataAPIThunk } from "../thunk/dataThunk";
import { FetchSliceType } from "../../types/redux";




const initialState:FetchSliceType={
    
    loading:false,
    data:'',
    error:''
}



const  apiReducer = createSlice({
    name:'apiData',
    initialState,
    reducers:{},

    extraReducers: (builder) => {
        builder.addCase(dataAPIThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(dataAPIThunk.fulfilled, (state, action) => {
            state.data = action.payload
        });
        builder.addCase(dataAPIThunk.rejected, (state, action) => {
            state.loading = false;
            state.data = ''
            state.error =  "failed to fetch data ";
        });
    },    
})


export default apiReducer.reducer;