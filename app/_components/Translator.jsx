import React from 'react';
import { uselocal, LocalProvider} from './LocalizationContext';



  

const Translator=()=>{

    console.log("jdnmvn", uselocal());
    const{local,setLocal,translation}=uselocal();


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



