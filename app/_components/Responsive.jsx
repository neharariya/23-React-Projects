import React,{useState} from 'react';
import { IoMenu } from "react-icons/io5";
import "./Style.css"

const Responsive = () => {
    const [isopen, setIsOpen] = useState(false);
  return (
    <>
    <button onClick={()=>{setIsOpen(!isopen)}} className={"menu-icon m-5 text-4xl"}>
        <IoMenu />
    </button>

    <ul className={`menu-bar ml-5 ${isopen ? "open" : ""}`}>
        <li>About</li>
        <li>Services</li>
        <li>Contact Us</li>
        <li>Products</li>
    </ul>
    </>
  )
}

export default Responsive