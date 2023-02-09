import { useEffect, useState } from "react";
import './app.css'
import Display from "./components/Display";
import LapBtn from "./components/LapBtn";
import { LapDisplay } from "./components/LapDisplay";
import PauseBtn from "./components/PauseBtn";
import ResetBtn from "./components/ResetBtn";
import StartBtn from "./components/StartBtn";

function App() {

  const [milliSeconds,setMilliSeconds]=useState(0);
  const [seconds,setSeconds]=useState(0);
  const [minutes,setMinutes]=useState(0);
  const [hours, setHours]=useState(0);
  const [running,setRunning]=useState(false);
  let timer ;
  const [lap,setLap]=useState([])


  useEffect(()=>{
    if(running){
      timer=setInterval(()=>{
      if(seconds>59){
        setMinutes(prev=>prev+1)
        setSeconds(0);
        clearInterval(timer)
      }
      if(minutes>59){
        setHours(prev=>prev+1)
        setMinutes(0);
        clearInterval(timer)
      }
      if(milliSeconds>999){
        setSeconds(prev=>prev+1);
        setMilliSeconds(0);
        clearInterval(timer)
      }
      else
      {setMilliSeconds(prev=>prev+1);
      }
    },1)
    }else{
      clearInterval(timer);
    }

    return()=>{
      clearInterval(timer);
    }
  })

  const handlePlay=()=>{
    setRunning(true)
  }

  const handlePause=()=>{
    setRunning(false)
  }

  const handleReset=()=>{
    setHours(0);
    setMilliSeconds(0);
    setSeconds(0);
    setMinutes(0);
    setLap([]);
  }

  const handleLap=()=>{
    setLap(prev=>[...prev,{
      hours:hours,
      minutes:minutes,
      seconds:seconds,
      milliSeconds:milliSeconds
    }])
  }



  return (
    <div className="container">
      <div className="watch-container">
        <Display milliSeconds={milliSeconds} seconds={seconds} minutes={minutes} hours={hours} />
        <div className="d-flex">
          {running?<PauseBtn handler={handlePause}/>:<StartBtn handler={handlePlay}/>}
          <LapBtn isRunning={running} handler={handleLap}/>
        </div>
        <ResetBtn isRunning={running} handler={handleReset}/>
        {lap.map((item,index)=><LapDisplay index={index+1} hours={item.hours} minutes={item.minutes} seconds={item.seconds} milliSeconds={item.milliSeconds} />)}
      </div>
    </div>
  );
}

export default App;
