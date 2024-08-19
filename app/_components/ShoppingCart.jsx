import React from 'react';
import { UseCart, CartProvider } from './CartContext';

// console.log(UseCart);

// destructuring 


const ShoppingCart = () => {

  const{cartState,cartDispatch}=UseCart();

  const updateQuantity =(itemid,quantity)=>{
        if(quantity>0){
          cartDispatch({type:"UPDATE_QUANTITY",payload:{id:itemid,quantity}})
        }
  }

  const removeFromCart=(itemid)=>{
    cartDispatch({type:"REMOVE_ITEM",payload:{id:itemid}})
  }

  const addToCart =(item)=>{

      const exisitingCartItems = cartState.cartItems.find((cartItem)=>cartItem.id===item.id);

      if(exisitingCartItems)
        {
           cartDispatch({type:"UPDATE_QUANTITY",payload:{id:item.id,quantity:exisitingCartItems.quantity+1}});
        }

        else{
          cartDispatch({type:"ADD_TO_CART",payload:{...item,quantity:1}});
        }
     
  };

  const products = [
    {id:1,name:"item-A"},
    {id:2,name:"item-B"},
    {id:3,name:"item-C"},
    {id:4,name:"Another-item-A"},
    {id:5,name:"Another-item-B"},
]

  return (
    <div>
    <h1 className="mt-4 ml-5">Shopping Cart</h1>

    <ul className="ml-5 mt-4">
      {cartState.cartItems.map((item,id)=>(    
        <div key={id} className="flex flex-row gap-5 mb-5">
          <li>
            {item.name}-{item.quantity}
          </li>
          <div className="flex gap-2">
            <button onClick={()=>updateQuantity(item.id,item.quantity+1)} className="p-2 bg-zinc-500 rounded-md h-9 w-8">+</button>
            <button onClick={()=>updateQuantity(item.id,item.quantity-1)} className="p-2 bg-zinc-500 rounded-md h-9 w-8">-</button>
            <button onClick={()=>{removeFromCart(item.id)}} className="p-2 bg-zinc-500 rounded-xl h-9">Remove</button>
            </div>
        </div>
      ))}
    </ul>

    

    <h2  className="mt-4 ml-20 mb-8 font-bold">Product list</h2>

    <ul className="ml-16 mt-3">
        {products.map((Product,id)=>{
                return(
                    <li key={id}>{Product.name} <button onClick={()=>{addToCart(Product)}} className="p-2 bg-zinc-500 mb-3 rounded-xl">Add to Cart</button></li>
                )
        })}
    </ul>

    </div>

    
  )
}

const ShoppingCartFunction = () => {
  return (
    <CartProvider>
      <ShoppingCart/>
    </CartProvider>
  );
};

export default ShoppingCartFunction
