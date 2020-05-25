import React, { useState } from "react";
import "./App.css";

function App() {
  const numRows = 50;
  const numCols = 50;
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols).fill(0)));
      // initialize array for columns, 2nd value is map, mapping 0s to each column
      //0 means dead, 1 means alive
    }
    return rows;
  });

  return (
    
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat (${numCols}, 25px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              style={{
                width: 25,
                height: 25,
                backgroundColor: grid[i][k] ? "purple" : "black",
                border: "solid 1px yellow",
              }}
            />
          ))
        )}
      

      {/*GRID DISPLAY:
        map over grid state
        rows = array
        rows.map =column
        display dv that is box with 25 by 25 size
        background color is based of if 0 or 1(dead or alive)
        use index to get row/column index for color changing
        (alive = purp, dead = blk)
        grid[i][k] ternary for colors on index of row and columns
        use index for rows, columns as key because they wont be moved
        display in grid div, repeat, set how big
        */}
    </div> //App div end
  );
}

export default App;
