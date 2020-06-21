
import React from 'react';
import {AboutCont, RulesTitle, RulesItems, StoryTitle, RulesList, RulesCont} from './styles'
const About =() =>{

    return (
        <AboutCont>
            <RulesCont>
            <RulesTitle> Rules of Life: </RulesTitle>
            <RulesList>
                <RulesItems>
                Any live cell with two or three live neighbors survives.
                </RulesItems>
                <RulesItems>
                Any dead cell with three live neighbors becomes a live cell.
                </RulesItems>
                <RulesItems>
                All other live cells die in the next generation. Similarly, all other dead cells stay dead.
                </RulesItems>
            </RulesList>

            </RulesCont>
            <div className = 'story-head'>
            <StoryTitle>Story of Life: </StoryTitle>
            <p>The Game of Life was developed by Brititsh Mathmetician, John Horton Conway, in 1970. It is a cellular automation, zero player game, that is turing complete. Developed with the initial goal of defining an interesting and unpredictable automation. Having the power of a universal Turing machine, anything that can be computed algorithmically can be computed with the Game Of Life.</p>

            <p> The <span>'Universe of life'</span> is a 2D orthogonal grid of cells, each having 2 states: alive or dead. Each cell has 8 neighbors of possible alive.dead interactions per generation. Many different patterns are possible, and classified by their behavior. </p>
            <p>More at <a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'> Wikepedia </a></p>
            </div>
        </AboutCont>
    )
}

export default About;