import React from 'react';
import { Uselocal, LocalProvider} from './LocalizationContext';



  

const Translator=()=>{

    console.log("jdnmvn", Uselocal());
    const{local,setLocal,translation}=Uselocal();


    const Translate = (newlocal) => {
        setLocal(newlocal);
    };

  return (
    <>
        <h1>{translation("greeting")}</h1>
        <h1>{translation("welcome")}</h1>
        <button onClick={()=>Translate("en")} className="p-2 rounded-xl bg-zinc-500 m-5">English</button>
        <button onClick={()=>Translate("es")} className="p-2 rounded-xl bg-zinc-500">Espanish</button>
    </>
  )
}

const TranslatorFunction = () => {
  return (
    <LocalProvider>
      <Translator/>
    </LocalProvider>
  );
};

export default TranslatorFunction



