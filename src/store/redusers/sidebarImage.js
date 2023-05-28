import { createSlice } from '@reduxjs/toolkit'


const initialState = {
        img:null,
        color:''

}

const SidebarStyle = createSlice({
     name:"img",
    initialState,
    reducers:{
         setImage(state,action){
             console.log(action.payload)

             state.img = action.payload

         },
         setColor(state,action) {
             state.color = action.payload

         }
    }
})

export const { setImage,setColor } = SidebarStyle.actions

export default SidebarStyle.reducer

