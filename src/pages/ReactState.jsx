import React from "react";
import { useState } from "react";

export default function ReactState(){
    //js area
    const [username, setUsername]= useState("andi")
    
    const handleButton = ()=>{
        setUsername("ismai")
    }
    const handleInput = (e)=>{
        setUsername(e.target.value)
    }
    return(
        //jsx area
        <div className="App">
            <h1>React State</h1>
            <h3>{username}</h3>
            <button onClick={handleButton}>ganti</button>
            <input type="text" placeholder="ganti text" onChange={handleInput} />
        </div>
    )
}