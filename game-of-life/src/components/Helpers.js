///helper functions 
import React, {useState, useCallback, useRef } from 'react';
import produce from 'immer';


export const numRows = 25;
export const numCols = 25;
//array of operations to do logic.
//column doesnt change but row does
//each location rep by operations
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
        // initialize array for columns, 2nd value is map, mapping 0s to each column
        //0 means dead, 1 means alive       
      }

      return rows;
    };


