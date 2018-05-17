
import styled from 'styled-components';


export const Exemple1 = styled.button`
    width: 150px;
    height: 60px;
    background: black;
    border-radius: 5px;
    color:white;
    font-size:20px;
    &:hover{
        background:blue;
    }
`;

export const Exemple2 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const TitleMain = styled.h1`
    font-family: "Avenir Next", sans-serif;
    text-align: center;
    font-weight: bold;
    font-size: 1.8rem;
    color: white;
    position:absolute;
    width:100%;
    transform:translate(-50%,-67%);
    top:67%;
    left:50%;
`;

export const NameCharacter = styled.h2`
    font-family: "Avenir Next", sans-serif;
    font-weight: Multiple;
    font-size: 1.5rem;
`;

export const LogoImg = styled.div`
    width: 55%;
    height:55%;
    position:absolute;
    transform:translate(-50%,-40%);
    top:40%;
    left:50%;
`

export const Icon = styled.div`
    position:absolute;
    transform:translate(-50%,-80%);
    top:85%;
    left:50%;
`
export const MainContainer = styled.div`
    background: radial-gradient(circle at top left,#070048, #3218B1, #3E25BD, #5437DC, #E12BFF 90%);
    min-height:100vh;
`