import styled,{keyframes} from "styled-components";

import Theme from "./Theme";

const backgroundChange = keyframes`
  from {
    background-color: #3feee7;
  }
  to {
    background-color:white;
  }
`;

export const StyledNavBar = styled.nav`
  background-color: #197278;
  max-width: 100%;
  align-content:left;
  display: flex;
  border: 1px solid black;
  font-size:2rem;
  /* justify-content: space-evenly; */
  & :hover{
      /* animation:${backgroundChange} ; */
      background-color:#EDDDD4;
      color:black;
      transition:ease-in-out .25s;
  }
  a {
    color: white;
    text-decoration: none;
    padding: 9px 5px;
    display: flex;
   
  }
`
  export const StyledForm = styled.form`
  display: flex;
  padding:1rem;
  flex-wrap: no-wrap;
  flex-direction:column;
  max-width: 800px;
  background-color: #EDDDD4;
  font: #3feee7;
  font-size: 1rem;
  padding:2px;

  
  button{
    max-width:20%;
    :hover{
      /* animation:${backgroundChange} ; */
      background-color:#C44536;
      border: 1px black solid;
      color:black;
      transition:ease-in-out .25s;
  }
  }
  p{
    font: #3feee7; 
  }
  label{
    
    display:flex;
    background-color:197278;
    color:white;& 
    :hover{
      /* animation:${backgroundChange} ; */
      border: 1px black solid;
      background-color:#C44536;
      color:black;
      transition:ease-in-out .25s;
  }
      
      input{
          /* border:1px solid black; */
      }
  } 
`;

export const StyledLogin=styled.div`
display: flex;
  flex-wrap: no-wrap;
  flex-direction:column;
  max-width: 800px;
  background-color: #EDDDD4;
  font: #3feee7;
  font-size: 1rem;
  /* border: 1px black solid; */
  padding:2px;
  button{
    max-width:20%;
    :hover{
      /* animation:${backgroundChange} ; */
      background-color:#C44536;
      border: 1px black solid;
      color:black;
      transition:ease-in-out .25s;
  }
  }
  p{
      font: #3feee7; 
    }
    label{
 
        display:flex;
      background-color:197278;
      color:white;& 
      :hover{
      /* animation:${backgroundChange} ; */
      background-color:#C44536;
      border: 1px black solid;
      color:black;
      transition:ease-in-out .25s;
  }
      
      input{
          /* border:1px solid black; */
      }
  }
`
export const StyledErrors = styled.div`
color:C44536;

`
export const StyledHome = styled.div`
  background-color:EDDDD4;
  font-size:1rem;
`;
