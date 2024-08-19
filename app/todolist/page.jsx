'use client'
import React,{useState} from 'react'

export const Todolist = () => {
    const [input, setInput] = useState("");
    const [maintask, setMaintask] = useState([]);

    const SubmitHandler=(e)=>{
       e.preventDefault();
       setMaintask([...maintask,input]);
       setInput("");

    }

     const DeleteHandler=(index)=>{
         let copytask = [...maintask];
         copytask.splice(index,1);
         setMaintask(copytask);
     }

     let result =maintask.map((item,index) => {
          
      return(
       <div key={index}>

          <li className="mb-5" key={index}>{item}
          <button onClick={()=>{DeleteHandler(index)}} className="p-2 bg-zinc-500">delete</button>
          </li>
       
       </div>
      )

   })
   

  return (
    <div className="flex gap-6 m-6">
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} className="h-20 p-2 bg-zinc-200 text-black"></input>
        <button onClick={SubmitHandler} className="bg-zinc-500 p-3 rounded-2xl h-16 w-16">Add</button>

        <div>
            <ul>{result}</ul>
        </div>
    </div>
  )
}

export default Todolist


