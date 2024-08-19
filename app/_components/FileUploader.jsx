import React,{useState} from 'react';

const FileUploader = () => {
    const [File, setFile] = useState(null);

    const handleFile=(e)=>{
        console.log(e);
        const selectedfile = e.target.files[0];
        setFile(selectedfile);
    }
  return (

    <>
    <input type="file" accept="image/*" onChange={handleFile}></input>
    {File && <img src={URL.createObjectURL(File)}></img>}
    </>
  )
}

export default FileUploader