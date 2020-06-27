import React, {useState, useCallback, useRef } from 'react';
import produce from 'immer';
import {numCols, numRows, ops, clearGrid} from './Helpers'
import {Gen, StyledButton, GridHolder} from './styles';

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
        return; 
    }
    setGrid(g =>{
        return produce(g, gridCopy =>{ 
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
        
                    if (neighbors < 2 || neighbors > 3){
                        gridCopy[i][k] = 0;
                    } else if (g[i][k] === 0 && neighbors ===3){
                        gridCopy[i][k] = 1; 
                    }
                }
            }
        })    
    })

    
    setTimeout(runSim, intRef.current); 
    setGen(genRef.current+1) 
    }, [ops]);

  return (
    <>
    <div className = 'control-cont'>
  <Gen> GENERATION: {generation}</Gen>
    <div className='speed'> 
     <input
    name='speed'
    placeholder = 'speed(ms)'
    value={intRef.current}
    onChange={handleChange} /> 
    </div>

    <StyledButton onClick={()=> {
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
    </StyledButton>
    
    <StyledButton onClick={()=>{
        setGen(0)
        setGrid(clearGrid());
    
    }}
    > Clear </StyledButton>
    <StyledButton onClick={()=>{
        const rows = [];
        for (let i = 0; i < numRows; i++) {
         rows.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
         );
        }
        setGrid(rows);
    }}
    > Random </StyledButton>

        </div>   
       
    <GridHolder>
      <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 30px)`,
          boxSizing: 'border-box',
          margin:'5%'
      
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
                } 
            }} 
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

</GridHolder>
</>
        )
        }
export default Grid;