import React, {useState, useCallback, useRef } from 'react';
import produce from 'immer';
import {numCols, numRows, ops, clearGrid} from './Helpers'


function Grid(){

const [generation, setGen] = useState(0);
const genRef = useRef(generation)
genRef.current = generation

const [grid, setGrid] = useState(() => {
 return clearGrid();
  });

  const [running, setRunning] = useState(false);
  const runRef = useRef(running);
  runRef.current = running;

  const [interval, setInterval]=useState('');
  const intRef = useRef(interval);
  intRef.current = interval;
  
  const handleChange = (e) => { 
    setInterval(e.target.value)
}


  const runSim = useCallback(() =>{
    if (!runRef.current){
        return; //'base case' if not running
    }
    setGrid(g =>{
        return produce(g, gridCopy =>{ //pass in fn for current value of grid(g)
            //return new value for grid: produce fn passing in g, & gridcopy, mutating over gridcopy. 
            //loop over rows/columns
            //get neighbors for each cell:
            for(let i =0; i < numRows; i++){
                for(let k =0; k < numCols; k++){
                    let neighbors = 0;
                    ops.forEach(([x, y])=> {
                        const newI = i + x;
                        const newK = k + y;
                        if (newI >= 0 && newI <numRows && newK >= 0 && newK <numCols){
                            neighbors += g[newI][newK]
                        }
                    })
                    //after find neighbors, implementRULES
                    if (neighbors < 2 || neighbors > 3){
                        gridCopy[i][k] = 0; //if neighrbors less than 2 or more than 3: live becomes dead
                        //between 2-3 continues too live: dont need to change anything
                    } else if (g[i][k] === 0 && neighbors ===3){
                        gridCopy[i][k] = 1; //if dead and neighbors are exactly 3; become alive
                    }
                }
            }
        })
    
    
    })



    
    setTimeout(runSim, intRef.current); //intref for speed change
    setGen(genRef.current+1) //use ref to generation to update count
//call 'recursively' running runSim. Check if runnning, if not return. if is, setState to simlulate update. call function again to repeat.
    }, [ops]);


  return (
      <div className = 'grid-holder'>

    <div className = 'control-cont'>
            <h4> Control Panel</h4>
            <div className = 'control-cont'>
  <h3> GENERATION: {generation}</h3>
    <div className='speed'> 
    Speed: 
    <input
    name='speed'
    placeholder = 'speed'
    value={intRef.current}
    onChange={handleChange} /> 
    </div>

    <button onClick={()=> {
        setRunning(!running);
        if (!running && interval){
        runRef.current = true;
        runSim();
        } else if(!interval){
            alert('need for speed');
        }
    }}
    >
    {running ? 'Stop' : 'Start'}
    </button>
    
    <button onClick={()=>{
        setGen(0)
        setGrid(clearGrid());

    }}
    > Clear </button>
    <button onClick={()=>{
        const rows = [];
        for (let i = 0; i < numRows; i++) {
         rows.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
         );
        }
        setGrid(rows);
    }}
    > Random </button>
</div>
        </div>   
    
      <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 25px)`,
          boxSizing: 'border-box' 
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={()=> {
                  if (!running){
                  const newGrid = produce(grid, gridCopy => {
                      gridCopy[i][k] = grid[i][k] ? 0 : 1;
                  });
                  setGrid(newGrid);
                } //not clickable while running
            }} //onclick state changes: use copygrid to change state of grid. immer allows immutable change and generates new grid to make changes to instead, act as double buffering
              style={{
                width: 25,
                height: 25,
                backgroundColor: grid[i][k] ? 'gold' : 'black', 
                border: 'solid 1px purple',
              }}
            />
          ))
        )}
      
</div>
</div>
      /*GRID DISPLAY:
        map over grid state
        rows = array
        rows.map =column
        display dv that is box with 25 by 25 size
        background color is based of if 0 or 1(dead or alive)
        use index to get row/column index for color changing
        (alive = gold, dead = blk)
        grid[i][k] ternary for colors on index of row and columns
        use index for rows, columns as key because they wont be moved
        display in grid div, repeat, set how big
        FOR ONCLICK: to change state, using plugin called immer
        immer: 
        */
        )
        }

        export default Grid;