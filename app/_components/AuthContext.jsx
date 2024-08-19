
import react,{createContext,useContext, useState} from "react";

const AuthContext=createContext();

const AuthProvider=({children})=>{

    const [user, setUser] = useState(null);
    console.log(user);
    

    const login=(username)=>{
            setUser(username);
    }

    const logout=()=>{
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>


    )
}

const UseAuth=()=>{
    return (AuthContext);
}

export{UseAuth,AuthProvider}