import React, { createContext, useContext,useReducer } from "react";


const CartContext = createContext();

const CartProvider = ({children})=>{

    const initialState = {
        cartItems:[]
       
    }

   
    

    const cartReducer=(state,action)=>{
        console.log("action",action);
        console.log("state",state);
        console.log("initialstate",initialState);
        
        
        
        switch(action.type){
            case "ADD_TO_CART": 
                return{
                    cartItems:[...state.cartItems,action.payload]
                }

            case "UPDATE_QUANTITY":
                return{
                    ...state,
                    cartItems:state.cartItems.map((items)=>items.id===action.payload.id?{...items,quantity:action.payload.quantity}:items)
                }

            case "REMOVE_ITEM":
                return{
                    cartItems:state.cartItems.filter((item)=>item.id !== action.payload.id)
                }


                default:
                    return state;

        }
    
    }

    
    const [cartState, cartDispatch] = useReducer(cartReducer,initialState);
    console.log("cartstate",cartState);

    return(
        <CartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </CartContext.Provider>
    )

};


const UseCart = ()=>{
   return useContext(CartContext)
};

export{UseCart,CartProvider};