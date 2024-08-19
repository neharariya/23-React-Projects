import React,{useState} from 'react'

export const Pagination = ({item, ItemsPerPage}) => {
    const [CurrentPage, setCurrentPage] = useState(1);
    const LastItemIndex = CurrentPage*ItemsPerPage;
    const FirstItemIndex = LastItemIndex-ItemsPerPage;
    const CurrentItems = item.slice(FirstItemIndex,LastItemIndex);
    

    const Pages = [];
    for(let i=1
      ; i<=Math.ceil(item.length/ItemsPerPage);i++)
    {Pages.push(i)};

  return (
  <div className="m-5">
    <ul className='text-white'>
    {CurrentItems.map((item, index)=>{
       return(
        <li key={index} className='text-white cursor-pointer'>
          {item}
        </li>
       )
    })}
    </ul>

    {Pages.map((number, index)=>{
      return(
        <li key={index} className='text-white cursor-pointer' onClick={()=>{setCurrentPage(number)}}>{number}</li>
      )
    })}
  </div>  
  )
}

export default Pagination
