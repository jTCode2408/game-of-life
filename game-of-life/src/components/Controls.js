//for control panel
//start, stop, clear --START/STOP/CLEAR ADDED
//generation # will also be here -ADDED
//randomize button? (addtoinal ftr) -ADDED
//speed input? (additional ftr)- ADDED
//change grid zie? (additional ftr) -TODO
import React, {useState, useCallback, useRef} from 'react';


const Controls =() =>{
//start/stop button contrlled by state
//functionto create new value from state for sim. function we do NOT want to recreate everyrend(use useCallback)
//

//useRef hook so that function has access to updated running value b/c: function doesnt change but state does, and fn need access to state
//current value of reference to running, is = to running in fn

    return(
        <div className = 'control-cont'>
            <h4> Control Panel</h4>
        
        </div>
    )
}


export default Controls;