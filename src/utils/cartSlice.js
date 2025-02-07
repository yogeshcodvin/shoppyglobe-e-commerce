import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items :  []
    },
    reducers : 
        {
        addItem: (state,action)=>
        {
            const item = state.items.find((item)=> item.id === action.payload.id);
            const data = {...action.payload, quantity: 1}
            if (!item)
            {
                state.items.push(data);
            }
            else 
            {
                item.quantity++;
            }
        }
        ,
        removeItem: (state,action)=>
        {
            state.items = state.items.filter(item => item.id !== action.payload);

        }
        ,

        decreaseItem: (state, action)=>
        {
            const item = state.items.find(item=> item.id === action.payload)

            if (item)
            {
                if(item.quantity > 1){
                    item.quantity--;
                }
                else{
                    state.items = state.items.filter(i => i.id !== action.payload);
                }
            }
        }
        ,
        clearCart: (state,action)=>
        {
            state.items = [];
        }
    }   
    })

export const {addItem, removeItem, clearCart, decreaseItem}   = cartSlice.actions
export default cartSlice.reducer ;