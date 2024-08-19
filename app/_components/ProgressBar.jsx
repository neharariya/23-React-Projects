import React, {useState} from 'react'


const ProgressBar = () => {

  const [input, setInput] = useState(null);
  const widthPercentage = Math.min(Math.max(input, 0), 100);

  return (

  <>
     <div className="absolute top-[240px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 w-96 h-8 rounded-2xl ">
        <div className= "text-center bg-pink-400 h-full rounded-2xl transition-all duration-1000 "
          style={{ width: `${widthPercentage}%` }}>{input>0 && `${input}%`}</div>
     </div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3">
      <h2>input percentage:</h2>
      <input 
       type = "number"
       value = {input}
       onChange = {(e)=>{
       setInput(e.target.value)
      }} 
       placeholder="%" className="bg-gray-500 text-center rounded-xl w-16 h-8 "></input>
    </div>
  </>

  )

}

export default ProgressBar