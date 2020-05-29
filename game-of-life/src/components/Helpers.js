///helper functions 
import React from 'react';

export const numRows = 25;
export const numCols = 25;

export const ops =[
    [0,1],
    [0,-1],
    [1,-1],
    [-1,1],
    [1,1],
    [-1,-1],
    [1,0],
    [-1,0]
];

export const clearGrid = ()=>{
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols).fill(0)));
    
      }

      return rows;
    };


