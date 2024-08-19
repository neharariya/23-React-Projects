
import React,{useState} from 'react'

const RegistrationForm = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isRegistered, setisRegistered] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [User, setUser] = useState([]);

  const handleAuthentication=(e)=>{

    // e.preventDefault();
    if(isRegistered=== false)
    {

    }
    else
    {
      const newUser={Email,Password};
      // setEmail("");
      // setPassword("");
      setUser([...User,newUser]);
      localStorage.setItem("User",JSON.stringify([...User,newUser]))
      setisLoggedIn(true);
    }
  }

  return (

    <>

    <div>
      {isLoggedIn ? (<div><h2 className="font-bold text-3xl">
        welcome, {Email}</h2>
        <button className="p-2 rounded-xl bg-zinc-600">Logout</button></div>)
       : <div> <form className="p-5">



<h1 className="text-3xl font-bold">{isRegistered ? "Register" : "Login"}</h1>


<div className="flex flex-row items-center gap-5 mb-12 mt-10">
  <h2>Email-id:-</h2>
  <input type="email"
    
   onChange={(e)=>{setEmail(e.target.value)}}
  className="w-40 bg-zinc-400 p-2 rounded-xl"></input>
</div>

<div className="flex flex-row items-center gap-5">
  <h2>Password</h2>
  <input type="password"

    onChange={(e)=>{setPassword(e.target.value)}}
   className="w-40 bg-zinc-400 p-2 rounded-xl"></input>
</div>

<button onClick={handleAuthentication} className="p-2 rounded-xl bg-zinc-600 mt-5">{isRegistered ? "Register" : "Login"}</button>



  
</form>

<p className="mt-5">
{isRegistered ? "Already have an account Log in now!!":  "Don't have an Account register now!!" }
</p>


<button className="p-2 rounded-xl bg-zinc-600 mt-5" onClick={()=>setisRegistered(!isRegistered)}>{isRegistered ? "Login" : "Register"}</button>

{/* {isRegistered ? <button>Login</button> :<button onClick={()=>setisRegistered(!isRegistered)}>Register</button>}
<button className="p-2 rounded-xl bg-zinc-600 mt-5">Login</button> */} </div>
      }
    </div>

    </>


    
  )
}

export default RegistrationForm