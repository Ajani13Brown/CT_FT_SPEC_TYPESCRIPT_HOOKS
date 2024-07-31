import { createSlice } from "@reduxjs/toolkit";

export interface Item {
    id: number; 
  name: string;
  price: number;
}

interface ShoppingCartState {
    cart: Item[]
    total:number
}

const initialState: ShoppingCartState = {
    cart: [],
    total:0
}
const shoppingCartSlice = createSlice({
    name:'shoppingCart',
    initialState,
    reducers:{
        addItem : (state:ShoppingCartState,action) =>{
            const item = action.payload
            state.cart = [...state.cart, item]
            console.log(state.cart)
        },
            
        removeItem : (state:ShoppingCartState, action) => {
            const itemId = action.payload
            state.cart = state.cart.filter((item:Item) => {
                return item.id !== itemId
                
            })
        },

        shoppingCartTotal : (state: ShoppingCartState,) => {
            state.total = state.cart.reduce((sum,item) => 
                sum + item.price, 0
            )
        }
    }
})

export const {addItem, removeItem, shoppingCartTotal} = shoppingCartSlice.actions;
export const { getInitialState } = shoppingCartSlice
export default shoppingCartSlice.reducer;