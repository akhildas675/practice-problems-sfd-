import React, { useState } from "react";

const UseStatePractice = () => {
  const [count, setCount] = useState(0);

  const [data,setData]=useState("")

  console.log(count, "rendered");

  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>Entered:{data}</h1>

      <button onClick={() => setCount(count + 1)}>Click</button>

      <input type="text"
      value={data} 
      placeholder="Enter data"
      onChange={(e)=>setData(e.target.value)}
      />
    </div>
  );
};

export default UseStatePractice;
