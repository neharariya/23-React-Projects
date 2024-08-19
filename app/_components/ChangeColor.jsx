import React,{useState} from 'react'

const ChangeColor = () => {
    const [change, setChange] = useState(true);

    const onclick=()=>{

        setChange(!change);

    }


  return (
    <>

    <div className={`h-screen w-screen  ${ change ?"bg-pink-500" : "bg-pink-700"}`}>
    <button onClick={onclick} className="h-14 w-20 p-2 bg-zinc-300 rounded-3xl m-8 text-black font-bold">Change</button>
    </div>

    </>
  )
}

export default ChangeColor