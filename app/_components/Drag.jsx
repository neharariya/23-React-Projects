import React,{useReducer,useState} from 'react'

const Drag = () => {

    const boxReducer=(state,action)=>{
        switch(action.type){
            case "MOVE":
                return{
                    ...state,
                    top:action.payload.top,
                    left:action.payload.left
                    }

            default: return state;
        }
    }



    const [boxState, dispatch] = useReducer(boxReducer,{left:0,top:0});

    const [isDraging, setIsDragging] = useState(false);
    const [initialX, setInitialX] = useState(0);
    const [initialY, setInitialY] = useState(0);

    const handleMouseDown=(e)=>{

        setIsDragging(true);
        setInitialX(e.clientX-boxState.left);
        setInitialY(e.clientY-boxState.top);

    }

    const handleMouseUp=(e)=>{

        setIsDragging(false);
    }
 
    const handleMouseMove=(e)=>{
        if(isDraging){
            const left= e.clientX-initialX;
            const top= e.clientY-initialY;
            dispatch({type:"MOVE",payload:{top,left}})
        }
    }

  return (
    <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{position:"absolute", left:boxState.left,top:boxState.top,cursor:"grab"}}>
        Drag Me
    </div>
  )
}


export default Drag