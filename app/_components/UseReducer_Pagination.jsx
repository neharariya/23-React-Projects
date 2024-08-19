import React,{useReducer,useEffect} from 'react'

const UseReducer_Pagination = () => {

    const ItemsPerPage=5;

    const PaginationReducer=(state,action)=>{
        switch(action.type){
            case "SET_TOTAL_ITEMS":
                return{
                    ...state,
                    TotalItems:action.payload 
                }

                case "SET_CURRENT_PAGE":
                    return{
                        ...state,
                        CurrentPage:action.payload
                    }

                default: return state;
        }

       

    }

    const [PaginationState, dispatch] = useReducer(PaginationReducer,{CurrentPage:1,TotalItems:0});



    const data = Array.from({length:25},(_,index)=>`Item ${index+1}`);
    console.log(data);
    

    useEffect(() => {
      dispatch({type:"SET_TOTAL_ITEMS",payload:data.length})
    
    }, [])

    const FirstIndex = (PaginationState.CurrentPage-1)*ItemsPerPage;
    const LastIndex= FirstIndex + ItemsPerPage;

    const DisplayItems= data.slice(FirstIndex,LastIndex);

    const handlePageClick=(newPage)=>{
            dispatch({type:"SET_CURRENT_PAGE",payload:newPage})
    }
       
  return (
    <>
    <ul>
        {DisplayItems.map((item,index)=>(
                
                    <li className="m-10" key={index}>{item}</li>
                
        ))}
    </ul>

    <div className="flex gap-3 ml-5">
        <button onClick={()=>{handlePageClick(PaginationState.CurrentPage-1)}} disabled={PaginationState.CurrentPage===1} className="p-2 bg-zinc-500 rounded-xl">Previous</button>
        <button onClick={()=>{handlePageClick(PaginationState.CurrentPage+1)}} disabled={LastIndex>=data.length}  className="p-2 bg-zinc-500 rounded-xl">Next</button>
    </div>
    </>
  )
}

export default UseReducer_Pagination