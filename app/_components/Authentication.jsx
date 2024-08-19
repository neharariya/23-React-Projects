import React from 'react';
import { AuthProvider, UseAuth } from './AuthContext';

const Authentication = () => {

    const{user,login,logout} = UseAuth();

  return (
    <div>
        <h1>User Authentication Example</h1>
       {
        user ? (
            <div className="ml-5 mt-5 flex flex-col gap-3">
                <p>{`Welcome,${user.UserName}`}</p>
                <button onClick={()=>{logout()}} className="p-2 bg-zinc-500 rounded-xl w-16">Logout</button>
            </div>
        ) : (<button className="p-2 bg-zinc-500 rounded-xl w-16" onClick={()=>login({UserName:"Neha"})}>Login</button>)
       }
    </div>
  )
}

const AuthenticationFunction = () => {
  return (
    <AuthProvider>
      <Authentication/>
    </AuthProvider>
  );
};

export default AuthenticationFunction