//for control panel
//start, stop, clear, pause?
//generation # will also be here
//randomize button? (addtoinal ftr)
//speed input? (additional ftr)
//manual steps? (additional ftr)
//change grid zie? (additional ftr)
import React, {useState, useCallback, useRef} from 'react';

const Controls =() =>{
//start/stop button contrlled by state
const [running, setRunning] = useState(false)
//functionto create new value from state for sim. function we do NOT want to recreate everyrend(use useCallback)
//
const runRef = useRef(running);
runRef.current = running;
//useRef hook so that function has access to updated running value since function doesnt change but state does
//current value of reference to running, is = to running in fn

const runSim =useCallback(() =>{
if (!running){
    return; //'base case' if not running
}
//TODO: simulate game using setstate

setTimeout(runSim, 1000); //call 'recursively' running runSim. Check if runnning, if not return. if is, setState to simlulate update. call function again to repeat.
}, []);
    return(
        <div className = 'control-cont'>
            <h4> Control Panel</h4>
            <button onClick={()=>{
                setRunning(!running);
            }}>
                {running ? 'stop' : 'start'}
            </button>
        </div>
    )
}


export default Controls;