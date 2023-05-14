import { createSlice } from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
            // console.log(action.payload)
        },
        removeUser(state,action){
            state.pop()
        },
        clearAllUser(state,action){
            while (state.length > 0) {
                state.pop();
              }
        }
    }
})
// console.log(userSlice.actions);
export {userSlice}

export const {addUser,clearAllUser}= userSlice.actions;