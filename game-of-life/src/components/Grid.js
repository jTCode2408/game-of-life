import React, {useState, useCallback, useRef } from 'react';
import produce from 'immer';

function Grid(){

const numRows = 50;
const numCols = 50;

//array of operations to do logic.
//column doesnt change but row does
//each location rep by operations
const ops =[
    [0,1],
    [0,-1],
    [1,-1],
    [-1,1],
    [1,1],
    [-1,-1],
    [1,0],
    [-1,0]
];

const clearGrid = ()=>{
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols).fill(0)));
        // initialize array for columns, 2nd value is map, mapping 0s to each column
        //0 means dead, 1 means alive
      }
      return rows;
    };

const [grid, setGrid] = useState(() => {

 return clearGrid();
  });

  const [running, setRunning] = useState(false);
  const runRef = useRef(running);
  runRef.current = running;

  const [interval, setInterval]=useState('');

  const handleChange = (e) => { 
    setInterval(e.target.value)
}


  
  const runSim = useCallback(() =>{
    if (!runRef.current){
        return; //'base case' if not running
    }
    //TODO: impliment game LOGIC using setstate
    setGrid(g =>{
        return produce(g, gridCopy =>{ //pass in fn for current value of grid(g)
            //return new value for grid: produce fn passing in g, & gridcopy, mutating over gridcopy. 
            //loop over rows/columns
            //get neighbors for each cell:
            //
            for(let i =0; i < numRows; i++){
                for(let k =0; k < numCols; k++){
                    let neighbors = 0;
                    ops.forEach(([x, y])=> {
                        const newI = i + x;
                        const newK = k + y;
                        if (newI >= 0 && newI <numRows && newK >= 0 && newK <numCols){
                            neighbors += g[newI][newK]
                        }// set boundaries for edges
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
    });
    
    setTimeout(runSim, interval); 
    console.log(setTimeout)//call 'recursively' running runSim. Check if runnning, if not return. if is, setState to simlulate update. call function again to repeat.
    //TODO: CHANGE SPEED TO USER INPUTTED VAR(EXTRA FEATURE)
    }, []);


  return (
      <>
    <div className = 'control-cont'>
    <h4> Control Panel</h4> 
  <h3> Gen #: </h3>
    {/*TODO: DISPLAY CUREENT GENERATION # in runSim  */}
    <div className='speed'> 
    Speed: 
    <input
    type = 'text'
    placeholder = 'speed'
    value={interval}
    onChange={handleChange} /> 
    </div>

    <button onClick={()=> {
        setRunning(!running);
        if (!running){
        runRef.current = true;
        runSim();
        }
    }}
    >
    {running ? 'Stop' : 'Start'}
    </button>
    <button onClick={()=>{
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
    
      <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 25px)`, //TODO, CHANGE SIZE OR USER INPUT?
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={()=> {
                  const newGrid = produce(grid, gridCopy => {
                      gridCopy[i][k] = grid[i][k] ? 0 : 1;
                  });
                  setGrid(newGrid);
            }} //onclick state changes: use copygrid to change state of grid. immer allows immutable change and generates new grid to make changes to instead
              style={{
                width: 25,
                height: 25,
                backgroundColor: grid[i][k] ? 'black' : undefined, //TODO: CHANGE COLOR, OR USER INPUT?
                border: 'solid 1px purple',
              }}
            />
          ))
        )}
      
</div>
</>
      /*GRID DISPLAY:
        map over grid state
        rows = array
        rows.map =column
        display dv that is box with 25 by 25 size
        background color is based of if 0 or 1(dead or alive)
        use index to get row/column index for color changing
        (alive = white, dead = blk)
        grid[i][k] ternary for colors on index of row and columns
        use index for rows, columns as key because they wont be moved
        display in grid div, repeat, set how big
        FOR ONCLICK: to change state, using plugin called immer
        immer: 
        */
        )
        }

        export default Grid;