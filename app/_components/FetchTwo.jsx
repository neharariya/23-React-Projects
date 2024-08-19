import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchTwo = () => {

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    
console.log(data1,data2);

useEffect(() => {
  
    axios.get("https://jsonplaceholder.typicode.com/posts")
.then(response=>{
    setData1(response.data)
}).catch(error=>{
    console.log("error",error);
});

axios.get("https://jsonplaceholder.typicode.com/posts")
.then(response=>{
    setData2(response.data)
}).catch(error=>{
    console.log("error",error);
});

}, [])

const userId1Data = data1.find(post => post.id === 1);
const userId2Data = data2.find(post => post.id === 2);

  console.log(userId1Data);
  console.log(userId2Data);
  



  return (
  <>
    <div>{userId1Data ? <div>{userId1Data.title}</div>:<div>loading...</div>}</div>

    <div>{userId2Data ? <div>{userId2Data.title}</div>:<div>loading...</div>}</div>
  </>
  )
}

export default FetchTwo