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