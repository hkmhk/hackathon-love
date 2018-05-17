
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

export const MainContainer = styled.div`
  height:100%;
  width: 100%;
  dipslay:flex;
`;

export const TitleMain = styled.h1`
    font-family: "Avenir Next", sans-serif;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    color: white;
`;

export const NameCharacter = styled.h2`
    font-family: "Avenir Next", sans-serif;
    font-weight: Multiple;
    font-size: 1.5rem;
`;