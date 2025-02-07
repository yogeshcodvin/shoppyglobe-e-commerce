
import {configureStore, createReducer} from '@reduxjs/toolkit'
import  cartReducer from './cartSlice.js'
import searchReducer from './searchSlice.js'

export const appStore = configureStore({

    reducer : {

        cart : cartReducer

        ,

        search : searchReducer
    }

});
