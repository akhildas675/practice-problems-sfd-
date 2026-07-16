import React, { useState } from 'react';


const darkMode={
    color:"red",
    height:"100vh"
    

}

const UseStateExample = () => {

    const [name,setName]=useState("Unknown");

    const [haveBrain,SetHaveBrain]=useState(false)

    const updateName=()=>{
        setName("Veena")

        console.log(name)
    }

    const toggle = ()=>{
        SetHaveBrain(!haveBrain)
    }





    return (
        <div style={darkMode}>

            <p>Name:{name}</p>
         
            <p style={darkMode}>Have Brain:{haveBrain ? "Yes" :"No"}</p>

            <button onClick={updateName}>Set name</button>

            <button onClick={toggle}>Set Brain</button>
            
        </div>
    );
}

export default UseStateExample;
