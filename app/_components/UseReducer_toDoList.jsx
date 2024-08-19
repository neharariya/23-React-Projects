import React,{useReducer,useState} from 'react';

const UseReducer_toDoList = () => {

    const [task, setTask] = useState("")

    const initialState = {
        Tasks:[]
    }

    const TaskReducer=(state,action)=>{

        console.log("state",state);
        console.log("action",action);
        
        switch(action.type){
            case "ADD_TASK":
                return{
                    Tasks:[...state.Tasks,{id:Date.now(),text:action.payload}]
                }

            case "REMOVE_TASK":
                return{
          Tasks: state.Tasks.filter((task) => task.id !== action.payload)
                }

    }

}

    const [Task, TaskDispatch] = useReducer(TaskReducer,initialState);

  return (
    <>
    <div className=" mt-5 flex items-center justify-center gap-5">
    <input value={task} onChange={(e)=>{setTask(e.target.value)}} type="text" placeholder="enter task here.........." className="bg-teal-100 rounded-xl h-12 p-4 text-black "></input>
    <button onClick={()=>{TaskDispatch({type:"ADD_TASK",payload:task});
     setTask("");
    }} className="rounded-2xl bg-teal-600 p-3 font-bold">Add Task</button>

    </div>

    
    <ul>{Task.Tasks.map((item,index)=>(
           <div key={index} className="flex items-center gap-4 mt-5 ml-60">
           <li key={item.id}>{item.text}</li>
           <button onClick={()=>{
            TaskDispatch({type:"REMOVE_TASK",payload:item.id})
           }} className="p-3 rounded-xl bg-teal-800 font-bold">Delete Task</button>
          </div>
       
        
    ))}</ul>
    
    </>
  )
}

export default UseReducer_toDoList