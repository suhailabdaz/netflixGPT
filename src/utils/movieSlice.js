import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        trailerId:null,
    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.nowPlaying=action.payload
        },
        addPopular:(state,action)=>{
            state.popular=action.payload
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload
        },
        addUpcoming:(state,action)=>{
            state.upcoming=action.payload
        },

        addTrailerVideo:(state,action)=>{
            state.trailerId=action.payload
        }

    }
})
export const {addNowPlaying,addTrailerVideo,addPopular,addTopRated,addUpcoming} =  movieSlice.actions;

export default movieSlice.reducer;

