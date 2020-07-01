import React,{ useState } from 'react';
import './Room.css';

function Room() {
    // const state  = useState(true);
    // console.log("State = ", state);

    let [isLit, setLit]  = useState(true);
    let [Age, setAge]  = useState(20);

    function updateLit() {
        console.log("Button Clicked");
        setLit(!isLit);      
    }
    function increaseAge() {
        console.log("Button Clicked");
        setAge(++Age);      
    }

  return (
   <div className={`room ${isLit ? "lit" : "dark"}`}>
     The Room is {isLit? "lit": "dark"}
     <br/>
     Age: {Age}
     <br/>
     <button onClick = {updateLit} >Toggle Light</button>
     <br/>
     <button onClick={()=>{
         console.log("Increse Age by Arrow Function");
         setAge(++Age);
     }}>Increse Age by Arrow Function</button>
     <br/>
     <button onClick = {increaseAge} >Increase Age</button>
   </div>
  );
}

export default Room;
