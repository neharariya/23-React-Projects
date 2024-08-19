import React, { useReducer } from 'react'

const MultipleState = () => {

    const Increment=()=>{
        dispatch({type:"INCREMENT"})
    };

    const TextChanger=()=>{
        dispatch({type:"TEXT-CHANGER"})
    };

    const ToggleAction=()=>{
        dispatch({type:"TOGGLE-ACTION"})
    }

    const DataReducer=(state,action)=>{

        console.log(state);

        switch(action.type)
        {
            
            case "INCREMENT":{
               return{
                count:state.count+1
               };
            }

            case "TEXT-CHANGER":{
                return{
                 ...state,Text:"Neha"
                };
             }

             case "TOGGLE-ACTION":{
                return{
                 ...state,Active:!state.Active
                };
             }

             dispatchEventefault:
                return state;
        }
    }

    const InitialState=
        {
            count:0,
            Text:"Hello World",
            Active:true,
        }

   const [Data, dispatch] = useReducer(DataReducer,InitialState);

  return (
   <>
        <p>Count: {Data.count}</p>
        <p>Text: {Data.Text}</p>
        <p>Active: {Data.Active ? "Active" : "Inactive"}</p>

        <div className="flex gap-3">
        <button className="p-2 bg-zinc-500 rounded-xl" onClick={Increment}>Increment</button>
        <button className="p-2 bg-zinc-500 rounded-xl" onClick={TextChanger}>Change Text</button>
        <button className="p-2 bg-zinc-500 rounded-xl" onClick={ToggleAction}>Toggle Active</button>
        </div>
   </>
  )
}

export default MultipleState