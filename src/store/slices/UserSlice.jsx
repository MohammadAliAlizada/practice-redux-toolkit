import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload, 1)
        },
        deleteUsers(state,action){

            return [];
        }
    },

    //extraReducers used to asigned a action all reducers
    extraReducers(builder){
        builder.addCase(userSlice.actions.deleteUsers, ()=>{
            return [];
        })
    }
});
export default userSlice.reducer;

export const {addUser, removeUser, deleteUsers} = userSlice.actions