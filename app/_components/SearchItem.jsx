import React,{useState} from 'react'

const SearchItem = ({item}) => {
    const [searchitem, setSearchItem] = useState("");

    const filtereditem = item.filter((items)=>items.toLowerCase().includes(searchitem.toLowerCase()));

  return (
    <>
    <input className="text-black bg-zinc-500" tpe="text" placeholder="Search item" onChange={(e)=>{setSearchItem(e.target.value)}}></input>

    <ul className="text-white">
     {filtereditem.map((Item,index)=> (
            <li key={index}>{Item}</li>    
     ))}
    </ul>

    <div>{}</div>
    </>
  )
}

export default SearchItem