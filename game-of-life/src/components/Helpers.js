///helper functions 
import React, {useState} from react;

export const numRows = 50;
export const numCols = 50;

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


