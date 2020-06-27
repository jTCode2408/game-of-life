import styled from 'styled-components'

import stary2 from '../images/stary2.jpg'
/////APP STYLES/////

export const AppCont = styled.div`
text-align: center;
display:flex;
flex-direction:column;
width:100%;
background: url(${stary2});
background-position:center;
background-size:cover;
background-repeat:no-repeat;
`

export const Title = styled.h1`
font-size: 56px;
font-family: 'Press Start 2P', cursive;
font-weight: heavy;
color: #A9F8FB;
width: 80%;
margin:0 auto;
align-items: center;
`

export const Pages = styled.div`
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`

////GRID STYLES////

////CONTROLS///
export const Gen = styled.h2`
font-size: 30px;
color: #26F0F1;
margin-left:5%;
width:100%;
display:block;
`

export const GridHolder = styled.div`
box-sizing:border-box;
`

export const StyledButton = styled.button`
background-color:#5F4BB6;
color: #26F0F1;
width:37%;
font-size: 16px;
font-weight: bold;
border-radius: 10%;
height: 30px;
margin-left:5%;
margin-right:5%;
margin-top: 5px;
margin-bottom: 5px;
border-style:none;
&:hover{
    transform:scale(1.05);
    cursor: crosshair;
`

///////ABOUT PAGE///////
export const AboutCont = styled.div`
display:flex;
flex-direction:column;
justify-content: space-between;
padding: 3%;
margin-top:3%
`

export const RulesCont = styled.div`
width:100%;
height:90px
padding:0;
`

export const RulesTitle = styled.h2`
font-size: 30px;
color: #B191FF;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

export const RulesList = styled.ul`
height: 90px;
width:100%
`

export const RulesItems = styled.li`
width:95%;
text-align: left;
font-size: 20px;
color:#26F0F1;
font-weight: bold;
font-family: 'Special Elite', cursive;
`

export const StoryTitle = styled.h2`
font-size: 30px;
color: #B191FF;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

export const StoryP =styled.p`
color:#26F0F1;
font-family: 'Special Elite', cursive;
`

export const WikP=styled.p`
color: #C4EBC8;
&:hover{
    transform:scale(1.05);
    cursor: grabbing;
}`