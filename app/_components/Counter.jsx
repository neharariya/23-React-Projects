import React, { useReducer } from 'react'

const Counter = () => {

    const initialstate=0;

    const reducer= (state,action)=>{
            switch(action){
                case "+": return state+1;
                case "-": return state-1;
                case "RESET": return state=0;

                default : return state;
            }

            
    }

    const [count, dispatch] = useReducer(reducer,initialstate);

  return (
    <div className=" flex flex-col items-center gap-5 mt-5 ">
       <div className="text-2xl bg-zinc-500 p-2 rounded-md h-12 w-10 text-center"> {count} </div>
        <div className="flex flex-row gap-3">
        <button onClick={()=>dispatch("+")} className="p-4 bg-zinc-500 rounded-xl">+</button>
        <button onClick={()=>dispatch("-")} className="p-4 bg-zinc-500 rounded-xl">-</button>
        <button onClick={()=>dispatch("RESET")} className="p-4 bg-zinc-500 rounded-xl">Reset</button>
        </div>
    </div>
  )

}

export default Counter