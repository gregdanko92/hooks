import { useState, useEffect } from 'react';
import Timer from './Timer';

function Clock(props) {
  const [time, setTime] = useState(new Date());
  const [timer, setTimer] = useState('00')

 //Replaces componentDidMount and componentWillUnmount

  const handleStart = () =>{
   const timerTick = (timer) =>{
     setTimer(timer + 1)
   }

   const timerId = setInterval( () => timerTick(timer), 1000)

   return function cleanup() {
    clearInterval(timerId);
  };

  }



 useEffect(() => {
     const tick = () => {
     setTime(new Date());
    }

  var timeID = setInterval( () => tick(), 1000 );

  return function cleanup() {
      clearInterval(timeID);
    };
    
 });
   return (
      <div className='clock'>
        <h1>Clock son</h1>
        <h2>It is {time.toLocaleTimeString()}.</h2>
        <h2>It is {time.toLocaleDateString()}.</h2>
        <br />
        <br />
        <br />
        <h2>pop quiz hot shot, now make a timer</h2>
        <h4>{timer}</h4>
        {/* <button onClick={startTimer}>Start</button> */}
        <button onClick={handleStart}>Start</button>
        <button >Stop</button>
      </div>
    );
}

export default Clock