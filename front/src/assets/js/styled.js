
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


export const InputStyle = styled.input`
    border-color: transparent;
    border-bottom-color: #000;
    color: #000 ;
    ::placeholder{
    color: #000;
    }
`;

export const IconStyle = styled.i`
    color: red;
`;

