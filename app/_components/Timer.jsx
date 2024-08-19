import React, {useState} from 'react'


const Timer = () => {

  const [temp, setTemp] = useState(0);
  const [timer, setTimer] = useState(0);
  // const [secs, setSecs] = useState(0)

    const startTimer=()=>{
    
      setTemp(setInterval(()=>{
       setTimer(prevtimer => prevtimer + 1)
      
      

      //  if(timer>60)
      //  {
      //   setMins(Math.floor(timer/60));
      //   setSecs(timer%60);
      //  }else{
      //   setSecs(timer);
      //  }
      },1000))

    }


    const resetTimer = ()=>{
      // setMins(0);

    
      
      clearInterval(temp);
      setTimer(0);
    }

    const stopTimer = ()=>{

      clearInterval(temp);
    }
    

  return (

   <>
    <div className=" flex font-bold text-xl gap-2 absolute top-[220px] left-1/2 -translate-x-1/2 -traslate-y-1/2 ">
      <div>{Math.floor(timer/60)} mins</div>
      <div>{timer%60} secs</div>
    </div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
      <button  onClick = {()=>{startTimer()}} className="bg-green-800 font-bold p-3">Start</button>
      <button onClick = {()=>{stopTimer()}}  className="bg-red-500 font-bold p-3">Stop</button>
      <button onClick = {()=>{resetTimer()}}  className="bg-yellow-500 font-bold p-3">Reset</button>
    </div>
   </>


  )

}

export default Timer