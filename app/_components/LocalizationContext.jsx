import {createContext,useContext,useState} from "react";

const LocalContext = createContext();

const LocalProvider=({children})=>{

    const [local, setLocal] = useState("en");


    const localString={

        en:{
            greeting:"hello guys!",
            welcome:"Welcome to my app"
        },
    
        es:{
            greeting:"hola mundo!",
            welcome:"Bienvenido a mi aplicacion"
        }

    };

    const translation=(key)=>{
        return localString[local][key]

    }

    return(
        <LocalContext.Provider value={{local,setLocal,translation}}>
            {children}
        </LocalContext.Provider>
    )
};

const Uselocal=()=>{
    return useContext(LocalContext)
}

export{Uselocal,LocalProvider};