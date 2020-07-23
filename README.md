# Deployed at:
https://game-of-life.jasmineterry.vercel.app/


# Game-Of-Life
* Implementation of Conway's Game Of Life, coded in ReactJs *

# Built With:
* ReactJS
* Styled Components


# Rules:
* Any LIVE cell with 2 OR 3 live neighbors, lives to next generation. 
* Any DEAD cell with 3 live neighbors, becomes alive in next generation.
* All other live cells become DEAD in next generation, and dead cells STAY dead.

# Specifications: 

* Bootstrapped with Create-React-App in `game-of-life` folder
* Rules, game info code found in `About.js` file
* Main functionality for grid code found in `Grid.js` file
* Variables for clearing grid, finding neighbor operation, and grid row/column generation code found in `Helpers.js` file
* Styling for app found in `Styles.js` file


# Research:

## About The Game:
* Created by John Conway, a British mathmetician, in 1970.
* Zero player game, that evolves by state without needing further input from players.
* Start game by creating an initial configuration and watching how it evolves. 
* Developed with purpose of defining an interesting and unpredictable automation. 
* Turing complete, can simulate any turing machine

## About Cellular Automation:
* Cellular automaton is a discrete model studied in automata theory.
* Consists of a regular grid of cells, each in one of a finite number of states, such as on and off, & can be any number of dimensions. 
* For each cell, a set of cells called its neighborhood is defined relative to the specified cell (neighbors)
* New generation is created according to a rule that determines the new state of each cell in terms of the current state of the cell and the states of neighbor cells.

## About Turing Completeness:
* A Turing Complete system is able to perform arbitrary, general purpose computation.
* Can be used to simulate any Turing machine, meaning it is able to recognize or decide other data-manipulation rule sets. 
* Virtually all programming languages today are Turing-complete. 
* Anything computable can be computed in The Game of Life given a large enough grid and enough time (and perhaps patience)


# Contributions:

## Have ideas for cool features to add? Or just ideas for improvement? 

* Feel free to submit a PR with feature, updates, bugs via PR

