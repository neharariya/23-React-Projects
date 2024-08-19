import React,{useState} from 'react';

const ColorPicker = () => {
const [color, setColor] = useState(null);



  return (
    <>    
    <input type="color" className="m-5 w-32 h-16" onChange={(e)=>{setColor(e.target.value)}}></input>

    <div className="m-10">{color}</div>
    </>

  )
}

export default ColorPicker
