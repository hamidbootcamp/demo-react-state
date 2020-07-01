import React,{ useState } from 'react';
import './Room.css';

function Room() {
    // const state  = useState(true);
    // console.log("State = ", state);

    let [isLit, setLit]  = useState(false);
    let [Temp, setTemp]  = useState(72);

    // function updateLit() {
    //     console.log("Button Clicked");
    //     setLit(!isLit);      
    // }
    function onLit() {
        console.log("Button Clicked");
        setLit(1);      
    }
    function offLit() {
        console.log("Button Clicked");
        setLit(0);      
    }
    // function increaseTemp() {
    //     console.log("Button Clicked");
    //     setTemp(++Temp);      
    // }
    function decreaseTemp() {
        console.log("Button Clicked");
        setTemp(--Temp);      
    }

  return (
   <div className={`room ${isLit ? "lit" : "dark"}`}>
     The Room is {isLit? "lit": "dark"}, Click ON/OFF buttons to change room color, Thank You
     <br/>
     <button onClick = {onLit} >ON</button>
     <button onClick = {offLit} >OFF</button>
     <br/>
     And the current temperature is : {Temp}(F), Click +/- buttons to increase/decrese temperature :)
     <br/>
     <button onClick={()=>{
         console.log("Increse Temperature by Arrow Function");
         setTemp(++Temp);
     }}>+</button>
     <button onClick = {decreaseTemp} >-</button>
   </div>
  );
}

export default Room;
